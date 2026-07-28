import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/Logo";
import type { CompanyData } from "@/lib/company";

const LINKS_UTEIS = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export function Footer({ company }: { company: CompanyData }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
            {company.descricaoCurta}
          </p>
          <a
            href={company.redesSociais.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fortnelcher no Instagram"
            className="icon-negative mt-5 hover:bg-brand-blue-dark"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Links úteis
          </h2>
          <ul className="mt-4 space-y-2.5">
            {LINKS_UTEIS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-steel-400 transition-colors hover:text-brand-blue-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Contato
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-steel-400">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" strokeWidth={1.5} aria-hidden="true" />
              <a href={`mailto:${company.contato.email}`} className="hover:text-brand-blue-light">
                {company.contato.email}
              </a>
            </li>
            {company.contato.telefones.map((tel) => (
              <li key={tel.numero} className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" strokeWidth={1.5} aria-hidden="true" />
                <a href={`tel:+${tel.whatsapp}`} className="hover:text-brand-blue-light">
                  {tel.numero}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" strokeWidth={1.5} aria-hidden="true" />
              <span>{company.endereco.regiaoAtendida}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" strokeWidth={1.5} aria-hidden="true" />
              <span>{company.contato.horario.textoCompleto}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Dados da empresa
          </h2>
          <dl className="mt-4 space-y-3 text-sm text-steel-400">
            <div>
              <dt className="text-xs uppercase tracking-wide text-steel-500">Razão social</dt>
              <dd className="mt-1 leading-snug">{company.razaoSocial}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-steel-500">CNPJ</dt>
              <dd className="mt-1 font-mono text-steel-300">{company.cnpj}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="rib-divider" />

      <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-steel-500 sm:flex-row">
        <p>
          © {year} {company.razaoSocial}. Todos os direitos reservados.
        </p>
        <p className="font-mono">CNPJ {company.cnpj}</p>
      </div>
    </footer>
  );
}
