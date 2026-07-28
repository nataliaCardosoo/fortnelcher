# Site Fortnelcher

Site institucional da **Fortnelcher Engenharia Comércio Manutenção e Instalação de Equipamentos LTDA**, construído com Next.js 14 (App Router), TypeScript, Tailwind CSS e Framer Motion, pronto para deploy na Vercel.

## Stack

- **Next.js 14** (App Router, Server Components, ISR, Edge Runtime na API de contato)
- **TypeScript**
- **Tailwind CSS** (tema customizado azul/preto em `tailwind.config.ts`)
- **Framer Motion** (animações de entrada e o diagrama animado da niveladora)
- **lucide-react** (ícones em estilo de linha/negativo)
- Dados da empresa em **JSON** (`data/company.json`), consumidos via `lib/company.ts` e expostos também por uma API Route (`/api/company`)

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha as variáveis conforme necessário
npm run dev
```

Acesse http://localhost:3000

## Estrutura

```
app/
  layout.tsx          # layout raiz: fontes, metadata, JSON-LD, header/footer
  page.tsx             # Home
  quem-somos/page.tsx
  servicos/page.tsx
  contato/page.tsx
  api/
    company/route.ts   # GET com os dados da empresa (cache/ISR de 1h)
    contact/route.ts   # POST do formulário de contato (Edge Function)
  sitemap.ts            # sitemap.xml dinâmico
  robots.ts             # robots.txt dinâmico
  icon.tsx               # favicon gerado dinamicamente (next/og)
  opengraph-image.tsx    # imagem de Open Graph gerada dinamicamente
components/              # componentes reutilizáveis e acessíveis
data/company.json        # "banco de dados" com as informações da empresa
lib/company.ts           # acesso tipado aos dados da empresa
```

## Variáveis de ambiente

Veja `.env.example`. Principais:

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL final do site (usada em SEO, sitemap e Open Graph) |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics 4 (`G-XXXXXXXXXX`). Se vazio, o GA4 não é carregado |
| `RESEND_API_KEY` | (opcional) ativa o envio automático de e-mail do formulário de contato via [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | E-mail que recebe as mensagens do formulário (padrão: `fortnelcher@gmail.com`) |

> Sem `RESEND_API_KEY`, o formulário de contato continua funcionando (valida os dados e retorna sucesso), mas a mensagem só fica registrada no log do servidor — configure o Resend (ou outro provedor de e-mail) em produção para receber as mensagens de fato.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta Next.js automaticamente. Configure as variáveis de ambiente (mesmas do `.env.example`) em **Settings → Environment Variables**.
4. Clique em **Deploy**. Os próximos `git push` para a branch principal fazem deploy contínuo automaticamente.

O projeto já usa Edge Runtime na rota de contato e ISR (`revalidate`) nas páginas e na API de dados da empresa, sem configuração adicional na Vercel.

## Editando o conteúdo

Todo o conteúdo institucional (nome, CNPJ, endereço, telefones, horário, serviços, diferenciais, textos de SEO) fica em `data/company.json`. Edite esse arquivo e o conteúdo é refletido em todas as páginas automaticamente — não é necessário mexer nos componentes.

## Modo escuro/claro

O tema padrão é escuro (alinhado à identidade visual azul/preto da marca). O botão de sol/lua no cabeçalho alterna para um tema claro, salvo em `localStorage`. Cabeçalho e rodapé permanecem sempre na paleta escura da marca por consistência visual.

## Acessibilidade e performance

- Link "Pular para o conteúdo principal" para navegação por teclado
- Foco visível (`:focus-visible`) em toda a interface
- `prefers-reduced-motion` respeitado (animações reduzidas automaticamente)
- Metadados dinâmicos, `sitemap.xml`, `robots.txt`, dados estruturados `LocalBusiness` (JSON-LD) e imagem de Open Graph gerada dinamicamente
