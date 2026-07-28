"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefone: (form.elements.namedItem("telefone") as HTMLInputElement).value,
      mensagem: (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus("error");
        setFeedback(result.message ?? "Não foi possível enviar sua mensagem.");
        return;
      }

      setStatus("success");
      setFeedback(result.message);
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Falha de conexão. Tente novamente em instantes.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-steel-300">
            Nome *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-navy-700 bg-navy-900 px-4 py-2.5 text-sm text-white placeholder:text-steel-500 focus:border-brand-blue"
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-steel-300">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-lg border border-navy-700 bg-navy-900 px-4 py-2.5 text-sm text-white placeholder:text-steel-500 focus:border-brand-blue"
            placeholder="(35) 90000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-steel-300">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-navy-700 bg-navy-900 px-4 py-2.5 text-sm text-white placeholder:text-steel-500 focus:border-brand-blue"
          placeholder="voce@empresa.com.br"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-steel-300">
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-navy-700 bg-navy-900 px-4 py-2.5 text-sm text-white placeholder:text-steel-500 focus:border-brand-blue"
          placeholder="Conte o que sua doca precisa: manutenção, instalação, orçamento..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>

      <div id="form-status" role="status" aria-live="polite">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm text-emerald-400">
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            {feedback}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}
