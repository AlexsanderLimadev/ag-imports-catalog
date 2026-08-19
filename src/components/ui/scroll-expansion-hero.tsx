import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ScrollExpandMedia — mídia que expande conforme o scroll.
 * Adaptado do componente original (Next.js) para TanStack Start:
 * - <img> nativo em vez de next/image
 * - cores via tokens do design system (sem classes hardcoded)
 * - deltaMode normalizado (Firefox reporta linhas, não pixels)
 */
interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export function ScrollExpandMedia({
  mediaType = "image",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [isMobileState, setIsMobileState] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const expandedRef = useRef(false);
  const touchStartYRef = useRef(0);

  progressRef.current = scrollProgress;
  expandedRef.current = mediaFullyExpanded;

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setScrollProgress(1);
      setShowContent(true);
      setMediaFullyExpanded(true);
      return;
    }

    const apply = (delta: number) => {
      const next = Math.min(Math.max(progressRef.current + delta, 0), 1);
      setScrollProgress(next);
      if (next >= 1) {
        setMediaFullyExpanded(true);
        setShowContent(true);
      } else if (next < 0.75) {
        setShowContent(false);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (expandedRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!expandedRef.current) {
        e.preventDefault();
        const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
        apply(dy * 0.0009);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const startY = touchStartYRef.current;
      if (!startY) return;
      const touchY = e.touches[0]?.clientY ?? startY;
      const deltaY = startY - touchY;

      if (expandedRef.current && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!expandedRef.current) {
        e.preventDefault();
        apply(deltaY * (deltaY < 0 ? 0.008 : 0.005));
        touchStartYRef.current = touchY;
      }
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = 0;
    };

    const handleScroll = () => {
      if (!expandedRef.current) window.scrollTo(0, 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const checkIfMobile = () => setIsMobileState(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex min-h-[100svh] flex-col items-center justify-start">
        <div className="relative flex w-full flex-col items-center min-h-[100svh]">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={bgImageSrc}
              alt=""
              aria-hidden="true"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-background/72" />
          </motion.div>

          <div className="container relative z-10 mx-auto flex flex-col items-center justify-start">
            <div className="flex flex-col items-center justify-center min-h-[100svh] w-full relative">
              <div
                className="absolute z-0 overflow-hidden rounded-xl border border-border shadow-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0 0 50px rgba(0,0,0,0.4)",
                }}
              >
                {mediaType === "video" ? (
                  <div className="relative size-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                      className="size-full rounded-xl object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-background"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative size-full">
                    <img
                      src={mediaSrc}
                      alt={title || "Mídia"}
                      width={1280}
                      height={720}
                      decoding="async"
                      className="size-full rounded-xl object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-background"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.6 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className="relative z-10 mt-4 flex flex-col items-center gap-3 text-center transition-none">
                  {date ? (
                    <p
                      className="label-xs text-muted-foreground"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  ) : null}
                  {scrollToExpand ? (
                    <p
                      className="label-xs text-muted-foreground"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  ) : null}
                </div>
              </div>

              <div
                className={cn(
                  "relative z-10 flex w-full flex-col items-center justify-center gap-4 text-center transition-none",
                  textBlend ? "mix-blend-difference" : "mix-blend-normal",
                )}
              >
                <motion.h1
                  className="text-editorial text-4xl text-foreground transition-none md:text-5xl lg:text-6xl"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.h1>
                <motion.p
                  className="text-editorial text-4xl text-foreground transition-none md:text-5xl lg:text-6xl"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.p>
              </div>
            </div>

            <motion.section
              className="flex w-full flex-col px-5 py-10 md:px-16 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScrollExpandMedia;
