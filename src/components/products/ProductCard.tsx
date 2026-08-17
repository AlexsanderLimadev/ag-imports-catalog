import { Link } from "@tanstack/react-router";
import { ProductImage } from "./ProductImage";
import { ProductBadge } from "./ProductBadge";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/data/products";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  return (
    <Link
      to="/produto/$slug"
      params={{ slug: product.slug }}
      className="group block overflow-hidden rounded-xl border border-border bg-background-2 transition-colors duration-300 hover:border-foreground/25"
    >
      <div className="relative overflow-hidden bg-surface">
        <ProductImage
          product={product}
          priority={priority}
          className="p-4 transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:p-6"
        />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {product.isNew ? <ProductBadge>Novo</ProductBadge> : null}
          {!product.available ? <ProductBadge>Esgotado</ProductBadge> : null}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden justify-center bg-gradient-to-t from-background/85 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex">
          <span className="label-xs text-foreground">Ver produto →</span>
        </div>
      </div>

      <div className="space-y-1.5 border-t border-border p-3 sm:p-4">
        <p className="label-xs truncate text-muted-foreground">{product.brand}</p>
        <h3 className="truncate text-sm font-normal">{product.name}</h3>
        <p className="text-sm text-muted-foreground">
          {product.price === null ? (
            <span className="label-xs text-foreground">Consulte</span>
          ) : (
            <span className="text-foreground">{formatPrice(product.price)}</span>
          )}
        </p>
      </div>
    </Link>
  );
}
