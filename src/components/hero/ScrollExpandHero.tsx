import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-editorial.jpg";
import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Hero cinematográfico: a mídia começa pequena e expande conforme o scroll.
 * Mobile usa curso de scroll menor. Respeita prefers-reduced-motion.
 */
export function ScrollExpandHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0, 0.85], isMobile ? ["66%", "100%"] : ["38%", "100%"]);
  const height = useTransform(
    scrollYProgress,
    [0, 0.85],
    isMobile ? ["38vh", "82vh"] : ["46vh", "100vh"],
  );
  const radius = useTransform(scrollYProgress, [0, 0.85], [14, 0]);
  const mediaScale = useTransform(scrollYProgress, [0, 0.85], [1.14, 1]);
  const sideOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const leftX = useTransform(scrollYProgress, [0, 0.5], ["0%", isMobile ? "-6%" : "-22%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ["0%", isMobile ? "6%" : "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0.6, 0.92], [0, 1]);
  const veil = useTransform(scrollYProgress, [0.3, 0.92], [0, 0.72]);

  if (reduceMotion) return <StaticHero />;

  return (
    <section
      ref={ref}
      aria-label="AG Imports"
      className="relative h-[200vh] md:h-[260vh]"
    >
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <motion.div
          style={{ width, height, borderRadius: radius }}
          className="relative overflow-hidden border border-border bg-surface"
        >
          <motion.img
            src={heroImage}
            alt="Composição editorial da AG Imports"
            style={{ scale: mediaScale }}
            decoding="async"
            className="size-full object-cover"
          />
          <motion.div style={{ opacity: veil }} className="absolute inset-0 bg-background" />

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <p className="label-xs text-muted-foreground">AG Imports</p>
            <h1 className="text-editorial mt-5 max-w-3xl text-3xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Importados selecionados para quem valoriza o extraordinário.
            </h1>
            <div className="mt-8">
              <ActionLink to="/catalogo">Ver catálogo</ActionLink>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          style={{ opacity: sideOpacity, x: leftX }}
          className="label-xs pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground md:left-12"
        >
          Seleção
          <br />
          curada
        </motion.p>
        <motion.p
          style={{ opacity: sideOpacity, x: rightX }}
          className="label-xs pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-right text-muted-foreground md:right-12"
        >
          Importados
          <br />
          premium
        </motion.p>

        <motion.p
          style={{ opacity: sideOpacity }}
          className="label-xs pointer-events-none absolute bottom-8 flex items-center gap-3 text-muted-foreground"
        >
          Role para expandir
          <span aria-hidden="true" className="animate-bounce">
            ↓
          </span>
        </motion.p>
      </div>
    </section>
  );
}

function StaticHero() {
  return (
    <section className="border-b border-border">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="label-xs text-muted-foreground">AG Imports</p>
          <h1 className="text-editorial mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Importados selecionados para quem valoriza o extraordinário.
          </h1>
          <div className="mt-10">
            <ActionLink to="/catalogo">Ver catálogo</ActionLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <img
            src={heroImage}
            alt="Composição editorial da AG Imports"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
