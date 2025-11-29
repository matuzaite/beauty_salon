export const runtime = 'nodejs';

export async function GET() {
  const url = process.env.DATABASE_POOL_URL || process.env.DATABASE_URL || '';
  let host = 'unknown';
  let hasSsl = false;
  let length = url.length;
  try { host = new URL(url).host; } catch {}
  try { hasSsl = /sslmode=require/i.test(url); } catch {}
  return Response.json({ host, length, hasSsl }, { status: 200 });
}