import type { Metadata } from "next";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { getCompanyData } from "@/lib/company";
import { FadeIn } from "@/components/FadeIn";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Manutenção preventiva e corretiva, e instalação completa de Niveladoras de Doca (Móvel, Embutir e Frontal) e acessórios na Região Sudeste.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  const company = getCompanyData();
  const whatsapp = company.contato.telefones[0]?.whatsapp ?? "";

  return (
    <>
      <section className="border-b border-navy-800 bg-radial-glow">
        <div className="container-page py-16 sm:py-20">
          <FadeIn>
            <p className="eyebrow">Serviços</p>
            <h1 className="section-heading mt-3 max-w-3xl">
              Manutenção e instalação de Niveladoras de Doca na Região Sudeste.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-300 sm:text-lg">
              Atendemos em boa parte da Região Sudeste com equipe técnica própria, serviço especializado com consultoria prévia, se necessário, e testes de funcionamento com os devidos ajustes após a instalação.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page space-y-16">
          {company.servicos.map((servico, i) => (
            <FadeIn key={servico.id} delay={i * 0.05}>
              <article
                id={servico.id}
                className="grid gap-8 border-b border-navy-800 pb-16 last:border-b-0 last:pb-0 lg:grid-cols-[0.9fr,1.1fr]"
              >
                <div>
                  <p className="eyebrow">
                    {String(i + 1).padStart(2, "0")} / {String(company.servicos.length).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                    {servico.titulo}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-steel-400 sm:text-base">
                    {servico.descricao}
                  </p>
                </div>

                <div className="card-surface p-6 sm:p-8">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand-blue-light">
                    O que inclui
                  </h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {servico.itens.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-steel-300">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-800 bg-navy-900/40">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Não sabe qual serviço você precisa?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-steel-400 sm:text-base">
              Descreva o problema para a nossa equipe e receba um diagnóstico técnico.
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Falar com um técnico
          </a>
        </div>
      </section>
    </>
  );
}