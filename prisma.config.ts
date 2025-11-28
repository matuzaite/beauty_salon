import fs from "node:fs";
import path from "node:path";

import { defineConfig, env } from "prisma/config";

const ensureEnvVar = (name: string) => {
  if (process.env[name]) {
    return;
  }

  const candidateFiles = [".env", ".env.local"];

  for (const relativePath of candidateFiles) {
    const absolutePath = path.resolve(process.cwd(), relativePath);

    if (!fs.existsSync(absolutePath)) {
      continue;
    }

    const lines = fs.readFileSync(absolutePath, "utf-8").split(/\r?\n/);

    for (const line of lines) {
      if (!line || line.trim().startsWith("#")) {
        continue;
      }

      const [key, ...valueParts] = line.split("=");
      if (!key || valueParts.length === 0) {
        continue;
      }

      const value = valueParts.join("=").trim();
      if (!process.env[key] && value) {
        const unquoted = value.replace(/^"|"$/g, "");
        process.env[key] = unquoted;
      }
    }

    if (process.env[name]) {
      break;
    }
  }
};

ensureEnvVar("DATABASE_URL");
ensureEnvVar("DIRECT_URL");

const shadowDatabaseUrl = process.env.DIRECT_URL;

export default defineConfig({
  schema: "./prisma/schema.prisma",
  migrations: {
    path: "./prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
    ...(shadowDatabaseUrl ? { shadowDatabaseUrl } : {}),
  },
});
