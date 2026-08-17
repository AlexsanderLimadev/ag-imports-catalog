/**
 * CATÁLOGO — AG IMPORTS
 *
 * COMO ADICIONAR UM PRODUTO
 * 1. Copie um objeto abaixo e ajuste os campos.
 * 2. `slug` deve ser lowercase, sem acentos e sem caracteres especiais.
 * 3. `images`: coloque os arquivos em `public/products/` e referencie por "/products/arquivo.webp".
 *    Deixe o array vazio ([]) enquanto a foto real não existir — a interface mostra um
 *    placeholder discreto em vez de uma imagem falsa.
 * 4. `price: null` faz o site exibir "CONSULTE" e direcionar ao WhatsApp.
 *
 * ATENÇÃO: os itens abaixo são PLACEHOLDERS de estrutura. Nenhum produto, preço ou
 * imagem foi inventado. Substitua pelos dados reais do catálogo da loja.
 */

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  /** slug de uma categoria em src/data/categories.ts */
  category: string;
  /** null = preço a confirmar ("CONSULTE") */
  price: number | null;
  description?: string;
  images: string[];
  volume?: string;
  size?: string;
  sku?: string;
  available: boolean;
  featured: boolean;
  isNew: boolean;
  /** true enquanto os dados reais do catálogo não forem preenchidos */
  placeholder?: boolean;
};

const placeholderBase = {
  price: null,
  images: [] as string[],
  available: true,
  placeholder: true,
} satisfies Partial<Product>;

export const products: Product[] = [
  {
    ...placeholderBase,
    id: "001",
    slug: "produto-placeholder-01",
    name: "Produto placeholder 01",
    brand: "Marca a confirmar",
    category: "perfumes",
    featured: true,
    isNew: true,
  },
  {
    ...placeholderBase,
    id: "002",
    slug: "produto-placeholder-02",
    name: "Produto placeholder 02",
    brand: "Marca a confirmar",
    category: "body-care",
    featured: true,
    isNew: true,
  },
  {
    ...placeholderBase,
    id: "003",
    slug: "produto-placeholder-03",
    name: "Produto placeholder 03",
    brand: "Marca a confirmar",
    category: "skincare",
    featured: true,
    isNew: false,
  },
  {
    ...placeholderBase,
    id: "004",
    slug: "produto-placeholder-04",
    name: "Produto placeholder 04",
    brand: "Marca a confirmar",
    category: "maquiagem",
    featured: true,
    isNew: false,
  },
  {
    ...placeholderBase,
    id: "005",
    slug: "produto-placeholder-05",
    name: "Produto placeholder 05",
    brand: "Marca a confirmar",
    category: "acessorios",
    featured: false,
    isNew: true,
  },
  {
    ...placeholderBase,
    id: "006",
    slug: "produto-placeholder-06",
    name: "Produto placeholder 06",
    brand: "Marca a confirmar",
    category: "body-care",
    featured: false,
    isNew: true,
  },
  {
    ...placeholderBase,
    id: "007",
    slug: "produto-placeholder-07",
    name: "Produto placeholder 07",
    brand: "Marca a confirmar",
    category: "perfumes",
    featured: false,
    isNew: false,
  },
  {
    ...placeholderBase,
    id: "008",
    slug: "produto-placeholder-08",
    name: "Produto placeholder 08",
    brand: "Marca a confirmar",
    category: "skincare",
    available: false,
    featured: false,
    isNew: false,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getNewProducts() {
  return products.filter((p) => p.isNew);
}

export function getBrands() {
  return Array.from(new Set(products.map((p) => p.brand))).sort();
}
