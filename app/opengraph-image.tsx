import { ImageResponse } from "next/og";
import { getCompanyData } from "@/lib/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function OpengraphImage() {
  const company = getCompanyData();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #080B13 0%, #101828 60%, #14213D 100%)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#2F6FE0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700, color: "white", letterSpacing: -1 }}>
              FORTNELCHER
            </span>
            <span style={{ fontSize: 18, color: "#8B96AC", letterSpacing: 2 }}>
              ENGENHARIA E MANUTENÇÃO INDUSTRIAL
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={{ fontSize: 54, fontWeight: 700, color: "white", lineHeight: 1.15, maxWidth: 980 }}>
            Manutenção e instalação de niveladoras de doca
          </span>
          <span style={{ fontSize: 26, color: "#AEB8CB" }}>
            {company.endereco.regiaoAtendida}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
