import heroImage from "@/assets/hero-editorial.jpg";
import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container className="grid min-h-[calc(100svh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-0">
        <div className="reveal min-w-0">
          <p className="label-xs text-muted-foreground">AG Imports</p>
          <h1 className="text-editorial mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Importados selecionados
            <br />
            para quem valoriza
            <br />
            o extraordinário.
          </h1>
          <div className="mt-10">
            <ActionLink to="/catalogo">Ver catálogo</ActionLink>
          </div>

          <p className="label-xs mt-16 flex items-center gap-3 text-muted-foreground">
            Explore a coleção
            <span aria-hidden="true" className="animate-bounce">
              ↓
            </span>
          </p>
        </div>

        <div className="reveal overflow-hidden rounded-xl border border-border bg-surface">
          <img
            src={heroImage}
            alt="Composição editorial em tecido escuro representando a estética da AG Imports"
            width={1408}
            height={1760}
            decoding="async"
            className="aspect-[4/5] w-full object-cover lg:aspect-[4/5]"
          />
        </div>
      </Container>
    </section>
  );
}
