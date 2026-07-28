import { NextResponse } from "next/server";
import { getCompanyData } from "@/lib/company";

// Revalida os dados a cada 1 hora (ISR para rotas de API).
export const revalidate = 3600;

export async function GET() {
  const data = getCompanyData();
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
