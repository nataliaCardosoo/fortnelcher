import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import { getCompanyData } from "@/lib/company";
import { ServiceCard } from "@/components/ServiceCard";
import { DockLevelerDiagram } from "@/components/DockLevelerDiagram";
import { FadeIn } from "@/components/FadeIn";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Início",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const company = getCompanyData();
  const whatsapp = company.contato.telefones[0]?.whatsapp ?? "";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-radial-glow">
        <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:py-28">
          <FadeIn>
            <p className="eyebrow">Engenharia de docas de carga · Região Sudeste</p>
            <h1 className="section-heading mt-4">
              Sua doca sempre <span className="text-brand-blue-light">no nível certo</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
              {company.descricaoLonga}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Solicitar orçamento
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-700 px-6 py-3.5 text-sm font-semibold text-steel-200 transition-colors hover:border-brand-blue hover:text-white"
              >
                Ver serviços
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-navy-800 pt-8">
              <div>
                <dt className="eyebrow">Região</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">Sudeste</dd>
              </div>
              <div>
                <dt className="eyebrow">Atendimento</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">Seg–Sex</dd>
              </div>
              <div>
                <dt className="eyebrow">Especialidade</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">Docas</dd>
              </div>
            </dl>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="card-surface p-6 sm:p-8">
              <DockLevelerDiagram className="w-full" />
              <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-steel-500">
                Niveladora em operação: doca → plataforma → caminhão
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="rib-divider" />

      {/* FAIXA DE CONFIANÇA */}
      <section className="border-b border-navy-800 bg-navy-900/40">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <span className="icon-negative">
              <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Atuação regional</p>
              <p className="text-sm text-steel-400">{company.endereco.regiaoAtendida}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="icon-negative">
              <Clock className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Horário de atendimento</p>
              <p className="text-sm text-steel-400">{company.contato.horario.textoCompleto}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="icon-negative">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Equipe especializada</p>
              <p className="text-sm text-steel-400">Manutenção e instalação técnica completa</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20">
        <div className="container-page">
          <FadeIn>
            <p className="eyebrow">Por que a Fortnelcher</p>
            <h2 className="section-heading mt-3 max-w-2xl">
              Cada minuto de doca parada custa caro. A gente resolve isso.
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {company.diferenciais.map((dif, i) => (
              <FadeIn key={dif.titulo} delay={i * 0.08}>
                <div className="card-surface h-full p-6">
                  <h3 className="font-display text-base font-semibold text-white">
                    {dif.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-400">
                    {dif.descricao}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS (PREVIEW) */}
      <section className="border-t border-navy-800 py-20">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">O que fazemos</p>
                <h2 className="section-heading mt-3">Nossos serviços</h2>
              </div>
              <Link
                href="/servicos"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue-light hover:text-white"
              >
                Ver todos os serviços
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.servicos.map((servico, i) => (
              <ServiceCard key={servico.id} servico={servico} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-navy-800 bg-navy-900/40">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Precisa de manutenção ou instalação na sua doca?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-steel-400 sm:text-base">
              Fale agora com a Fortnelcher e receba atendimento técnico especializado na Região Sudeste.
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}