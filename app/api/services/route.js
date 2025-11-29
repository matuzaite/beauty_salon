import prisma from "@/lib/prisma";
export const runtime = 'nodejs';

async function withRetry(fn, { attempts = 4, baseDelayMs = 300, jitterMs = 150 } = {}) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      const backoff = baseDelayMs * Math.pow(2, i); // 300, 600, 1200, 2400
      const jitter = Math.floor(Math.random() * jitterMs);
      const delayMs = backoff + jitter;
      if (i < attempts - 1) await new Promise(r => setTimeout(r, delayMs));
    }
  }
  throw lastErr;
}

export async function GET() {
  try {
    const services = await withRetry(() => prisma.services.findMany());
    return Response.json(services);
  } catch (error) {
    console.error("API /services error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
