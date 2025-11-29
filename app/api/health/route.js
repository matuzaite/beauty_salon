export const runtime = 'nodejs';

import prisma from '@/lib/prisma';

export async function GET() {
  const result = {
    time: new Date().toISOString(),
    databaseReachable: true,
  };
  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch (e) {
    result.databaseReachable = false;
    result.error = e.code || e.message;
  }
  return Response.json(result, { status: result.databaseReachable ? 200 : 503 });
}