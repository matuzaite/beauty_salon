import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const services = await prisma.services.findMany();
    const serialized = services.map((s) => ({
      ...s,
      id: typeof s.id === "bigint" ? s.id.toString() : s.id,
    }));
    return Response.json(serialized);
  } catch (error) {
    console.error("API /services error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
