import companyData from "@/data/company.json";

export interface Telefone {
  label: string;
  numero: string;
  whatsapp: string;
}

export interface Horario {
  dias: string;
  abertura: string;
  fechamento: string;
  textoCompleto: string;
}

export interface Contato {
  email: string;
  telefones: Telefone[];
  horario: Horario;
}

export interface Endereco {
  cidade: string;
  estado: string;
  estadoNome: string;
  regiaoAtendida: string;
  textoCompleto: string;
}

export interface RedesSociais {
  instagram: string;
}

export interface Servico {
  id: string;
  titulo: string;
  resumo: string;
  descricao: string;
  itens: string[];
}

export interface Diferencial {
  titulo: string;
  descricao: string;
}

export interface Seo {
  tituloPadrao: string;
  descricaoPadrao: string;
  palavrasChave: string[];
}

export interface CompanyData {
  nome: string;
  razaoSocial: string;
  cnpj: string;
  slogan: string;
  descricaoCurta: string;
  descricaoLonga: string;
  contato: Contato;
  endereco: Endereco;
  redesSociais: RedesSociais;
  servicos: Servico[];
  diferenciais: Diferencial[];
  seo: Seo;
}

/**
 * Retorna os dados da empresa a partir do "banco de dados" em JSON.
 * Em uma evolução futura, esta função pode ser trocada por uma
 * chamada a um banco de dados real sem alterar quem a consome.
 */
export function getCompanyData(): CompanyData {
  return companyData as CompanyData;
}

export function getServicoBySlug(slug: string): Servico | undefined {
  return getCompanyData().servicos.find((s) => s.id === slug);
}
