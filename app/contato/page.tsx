import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { getCompanyData } from "@/lib/company";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Fortnelcher: telefone, WhatsApp, e-mail e horário de atendimento para manutenção e instalação de niveladoras de doca na Região Sudeste.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const company = getCompanyData();

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page grid gap-14 lg:grid-cols-[0.95fr,1.05fr]">
        <FadeIn>
          <p className="eyebrow">Contato</p>
          <h1 className="section-heading mt-3">Vamos falar sobre a sua doca.</h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-steel-400 sm:text-base">
            Preencha o formulário ou fale direto pelos canais abaixo. Respondemos em
            horário comercial, de segunda a sexta-feira.
          </p>

          <dl className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="icon-negative">
                <Mail className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-steel-500">E-mail</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${company.contato.email}`}
                    className="text-sm font-medium text-white hover:text-brand-blue-light sm:text-base"
                  >
                    {company.contato.email}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="icon-negative">
                <Phone className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-steel-500">
                  Telefone / WhatsApp
                </dt>
                <dd className="mt-1 space-y-1">
                  {company.contato.telefones.map((tel) => (
                    <a
                      key={tel.numero}
                      href={`https://wa.me/${tel.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-medium text-white hover:text-brand-blue-light sm:text-base"
                    >
                      {tel.numero}{" "}
                      <span className="text-xs font-normal text-steel-500">({tel.label})</span>
                    </a>
                  ))}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="icon-negative">
                <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-steel-500">
                  Área de atendimento
                </dt>
                <dd className="mt-1 text-sm font-medium text-white sm:text-base">
                  {company.endereco.textoCompleto}
                </dd>
                <dd className="text-sm text-steel-400">{company.endereco.regiaoAtendida}</dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="icon-negative">
                <Clock className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-steel-500">
                  Horário de atendimento
                </dt>
                <dd className="mt-1 text-sm font-medium text-white sm:text-base">
                  {company.contato.horario.textoCompleto}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="icon-negative">
                <Instagram className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-steel-500">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href={company.redesSociais.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-brand-blue-light sm:text-base"
                  >
                    @fortnelcher
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="card-surface p-6 sm:p-9">
            <h2 className="font-display text-lg font-semibold text-white">
              Envie sua mensagem
            </h2>
            <p className="mt-1 text-sm text-steel-400">
              Campos com * são obrigatórios.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}