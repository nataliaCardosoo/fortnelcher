import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface ContactPayload {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Não foi possível ler os dados enviados." },
      { status: 400 }
    );
  }

  const nome = body.nome?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const telefone = body.telefone?.trim() ?? "";
  const mensagem = body.mensagem?.trim() ?? "";

  if (!nome || !email || !mensagem) {
    return NextResponse.json(
      { ok: false, message: "Preencha nome, e-mail e mensagem." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Informe um e-mail válido." },
      { status: 400 }
    );
  }

  // Encaminha a mensagem por e-mail usando a Resend API, se configurada.
  // Defina RESEND_API_KEY e CONTACT_TO_EMAIL nas variáveis de ambiente da Vercel
  // para ativar o envio automático. Sem essas variáveis, a rota apenas valida
  // os dados e retorna sucesso (útil em desenvolvimento local).
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "fortnelcher@gmail.com";

  if (resendApiKey) {
    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Site Fortnelcher <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: email,
          subject: `Novo contato pelo site - ${nome}`,
          text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone || "não informado"}\n\nMensagem:\n${mensagem}`,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error(`Falha ao enviar e-mail: ${emailResponse.status}`);
      }
    } catch (error) {
      console.error("Erro ao enviar contato por e-mail:", error);
      return NextResponse.json(
        {
          ok: false,
          message:
            "Não foi possível enviar sua mensagem agora. Tente novamente ou fale por WhatsApp.",
        },
        { status: 502 }
      );
    }
  } else {
    // Sem provedor de e-mail configurado: registra no log do servidor.
    console.log("Novo contato recebido pelo site:", {
      nome,
      email,
      telefone,
      mensagem,
    });
  }

  return NextResponse.json({
    ok: true,
    message: "Mensagem enviada com sucesso! Retornaremos em breve.",
  });
}
