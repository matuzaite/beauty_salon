import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const specialists = await prisma.specialists.findMany();
    return Response.json(specialists);
  } catch (err) {
    console.error("API /specialists error:", err);
    return new Response("Server error", { status: 500 });
  }
}
