import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="section-heading mt-3">Essa página não está nivelada.</h1>
      <p className="mt-4 max-w-md text-sm text-steel-400 sm:text-base">
        O endereço acessado não existe ou foi movido. Volte para o início e
        encontre o que precisa.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-brand-glow"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        Voltar ao início
      </Link>
    </section>
  );
}
