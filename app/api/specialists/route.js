import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const specialists = await prisma.specialists.findMany();
    const serialized = specialists.map((s) => ({
      ...s,
      id: typeof s.id === "bigint" ? s.id.toString() : s.id,
    }));
    return Response.json(serialized);
  } catch (error) {
    console.error("API /specialists error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
