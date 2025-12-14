import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";

const { Pool } = pkg;

// Relax TLS only in development to avoid local self-signed cert chain issues.
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const globalForPrisma = globalThis;

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL env var");
}

const pool =
  globalForPrisma.__pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: process.env.VERCEL ? 1 : 5,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 15_000,
    keepAlive: true,
  });

globalForPrisma.__pgPool = pool;

const adapter = new PrismaPg(pool);

const prisma =
  globalForPrisma.prismaWithPgAdapter ?? new PrismaClient({ adapter });

globalForPrisma.prismaWithPgAdapter = prisma;

export default prisma;
