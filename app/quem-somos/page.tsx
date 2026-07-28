import type { Metadata } from "next";
import { Target, Eye, Compass, MessageCircle } from "lucide-react";
import { getCompanyData } from "@/lib/company";
import { FadeIn } from "@/components/FadeIn";
import { DockLevelerDiagram } from "@/components/DockLevelerDiagram";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a Fortnelcher, empresa de engenharia especializada em manutenção e instalação de Niveladoras de Doca (Móvel, Embutir e Frontal) e acessórios na Região Sudeste.",
  alternates: { canonical: "/quem-somos" },
};

export default function QuemSomosPage() {
  const company = getCompanyData();
  const whatsapp = company.contato.telefones[0]?.whatsapp ?? "";

  return (
    <>
      <section className="border-b border-navy-800 bg-radial-glow">
        <div className="container-page py-16 sm:py-20">
          <FadeIn>
            <p className="eyebrow">Quem somos</p>
            <h1 className="section-heading mt-3 max-w-3xl">
              Engenharia dedicada a manter cada doca da Região Sudeste operando.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-300 sm:text-lg">
              {company.descricaoLonga}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr,0.85fr] lg:items-center">
          <FadeIn>
            <div className="space-y-6 text-sm leading-relaxed text-steel-300 sm:text-base">
              <p>
                A <strong className="text-white">{company.razaoSocial}</strong> nasceu para
                resolver um problema muito concreto: docas de carga paradas custam tempo,
                dinheiro e segurança. Nossa base fica localizada em Itapeva - MG, com estrutura técnica para atendimento em toda a Região Sudeste, oferecendo manutenção preventiva,
                manutenção corretiva e instalação completa de Niveladoras de Doca (Móvel, Embutir e Frontal)
                e seus respectivos acessórios (Guarda Corpo para Niveladora, Calços de Roda e Batedores).
              </p>
              <p>
                Nosso trabalho começa antes do primeiro parafuso: realizamos serviço especializado com
                consultoria prévia, se necessário, evitando impactos na execução da instalação e
                entendendo o fluxo de carga e descarga do cliente para propor a solução técnica certa.
              </p>
              <p>
                Trabalhamos com equipe própria, testes de funcionamento com os devidos ajustes após
                a instalação e acompanhamento técnico contínuo, para que cada equipamento instalado ou
                revisado pela Fortnelcher opere com segurança e previsibilidade, operação após operação.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="card-surface p-6 sm:p-8">
              <DockLevelerDiagram className="w-full" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-navy-800 bg-navy-900/40 py-20">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          <FadeIn>
            <div className="card-surface h-full p-7">
              <span className="icon-negative">
                <Target className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-lg font-semibold text-white">Missão</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">
                Manter as Niveladoras de Doca da região funcionando com segurança, reduzindo
                paradas não planejadas e riscos de acidente na carga e descarga.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="card-surface h-full p-7">
              <span className="icon-negative">
                <Eye className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-lg font-semibold text-white">Visão</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">
                Ser referência em manutenção e instalação de Niveladoras de Doca na Região
                Sudeste, reconhecida pela agilidade e precisão no atendimento técnico.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="card-surface h-full p-7">
              <span className="icon-negative">
                <Compass className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-lg font-semibold text-white">Valores</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">
                Segurança, precisão técnica e compromisso com o prazo — a doca do
                cliente parada é sempre tratada com prioridade.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-navy-800">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Quer conhecer melhor o nosso trabalho?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-steel-400 sm:text-base">
              Fale com a equipe Fortnelcher e conte como está a Niveladora de Doca da sua operação hoje.
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}