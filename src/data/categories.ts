/**
 * CATEGORIAS — AG IMPORTS
 * Ajuste/remova conforme as categorias reais do catálogo da loja.
 * `image`: arquivo em `public/categories/`. Deixe null enquanto não houver imagem real.
 */

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string | null;
};

export const categories: Category[] = [
  {
    id: "01",
    slug: "perfumes",
    name: "Perfumes",
    description: "Fragrâncias importadas.",
    image: null,
  },
  {
    id: "02",
    slug: "body-care",
    name: "Body Care",
    description: "Cuidados para o corpo.",
    image: null,
  },
  {
    id: "03",
    slug: "skincare",
    name: "Skincare",
    description: "Rotina de cuidados com a pele.",
    image: null,
  },
  {
    id: "04",
    slug: "maquiagem",
    name: "Maquiagem",
    description: "Seleção de beleza.",
    image: null,
  },
  {
    id: "05",
    slug: "acessorios",
    name: "Acessórios",
    description: "Peças complementares.",
    image: null,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
