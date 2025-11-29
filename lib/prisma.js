import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";

const { Pool } = pkg;

// Enhance connection string for required SSL if not already specified.
function withSslMode(url) {
  if (!url) return url;
  if (/sslmode=/i.test(url)) return url;
  return url.includes("?") ? `${url}&sslmode=require` : `${url}?sslmode=require`;
}

// Prefer pooled connection string (port 6543) if provided separately.
const rawUrl = process.env.DATABASE_POOL_URL || process.env.DATABASE_URL;
const connectionString = withSslMode(rawUrl);
const hasPgBouncerFlag = /pgbouncer=true/i.test(String(connectionString));
if (process.env.LOG_DB_INIT === '1' && !hasPgBouncerFlag && String(connectionString).includes(':6543')) {
  console.warn('[prisma] pooled port 6543 detected but missing pgbouncer=true in URL');
}

let prisma;

if (process.env.ACCELERATE_URL) {
  // Prefer Prisma Accelerate in serverless if configured
  const globalKey = "__PRISMA_CLIENT_ACCEL__";
  if (!global[globalKey]) {
    global[globalKey] = new PrismaClient({
      datasourceUrl: connectionString,
      accelerateUrl: process.env.ACCELERATE_URL,
    });
  }
  prisma = global[globalKey];
} else {
  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: parseInt(process.env.PG_POOL_MAX || "1", 10),
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: parseInt(process.env.PG_CONN_TIMEOUT_MS || '10000', 10),
  });
  const adapter = new PrismaPg(pool);
  const globalKey = "__PRISMA_CLIENT__";
  if (!global[globalKey]) {
    global[globalKey] = new PrismaClient({ adapter });
    if (process.env.LOG_DB_INIT === '1') {
      try {
        const host = (() => { try { return new URL(connectionString).host; } catch { return 'unknown-host'; } })();
        console.log('[prisma] initializing connection pool host=', host);
        global[globalKey].$queryRaw`SELECT 1`.catch(e => console.error('[prisma] warmup error', e));
      } catch (e) {
        console.error('[prisma] init error', e);
      }
    }
  }
  prisma = global[globalKey];
}

export default prisma;
