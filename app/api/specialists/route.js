import prisma from "@/lib/prisma";

function safeJson(data) {
  return JSON.parse(
    JSON.stringify(data, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function GET() {
  const specialists = await prisma.specialists.findMany();
  return Response.json(safeJson(specialists));
}
