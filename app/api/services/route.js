import prisma from "@/lib/prisma";

function safeJson(data) {
  return JSON.parse(
    JSON.stringify(data, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function GET() {
  const services = await prisma.$queryRaw`
    SELECT
      id,
      name
    FROM services
    ORDER BY id ASC
  `;

  return Response.json(safeJson(services));
}
