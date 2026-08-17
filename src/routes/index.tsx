import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryGrid } from "@/components/categories/CategoryGrid";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { NewProducts } from "@/components/sections/NewProducts";
import { AboutSection } from "@/components/sections/AboutSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { STORE_NAME } from "@/lib/constants";

const title = "AG Imports | Catálogo de Importados Premium";
const description =
  "Catálogo premium da AG Imports: produtos importados selecionados. Fale direto com a loja pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: STORE_NAME,
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <section className="py-20 md:py-32">
        <Container>
          <SectionHeading eyebrow="Coleções" title="Explore por categoria." />
          <div className="mt-10">
            <CategoryGrid />
          </div>
        </Container>
      </section>

      <FeaturedProducts />
      <NewProducts />
      <AboutSection />
      <TrustSection />
      <InstagramSection />
      <CtaSection />
    </>
  );
}
