import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Cog,
  Flame,
  Factory,
  HardHat,
  Wrench,
  Package,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations";
import faviconMark from "@/assets/favicon-mark.png";

interface IndustrialCTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

const orbitIndustries = [
  { icon: Flame, label: "Gas" },
  { icon: Factory, label: "Manufacturing" },
  { icon: HardHat, label: "Construction" },
  { icon: Wrench, label: "Engineering" },
  { icon: Package, label: "Packaging" },
  { icon: Zap, label: "Energy" },
  { icon: ShieldCheck, label: "Safety" },
];

const IndustrialCTA = ({
  title = "Partner With Viato Industries",
  description = "Complete solutions to your industrial needs — bringing peace of mind so you can focus on your core activity.",
  primaryLabel = "Request Quote",
  primaryTo = "/request-quote",
  secondaryLabel = "Contact Us",
  secondaryTo = "/contact",
}: IndustrialCTAProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const parallaxX = useTransform(springX, [-1, 1], [-30, 30]);
  const parallaxY = useTransform(springY, [-1, 1], [-20, 20]);
  const counterParallaxX = useTransform(springX, [-1, 1], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="section-padding bg-industrial-gradient relative overflow-hidden grain-overlay"
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl pointer-events-none"
      />

      {/* Animated conveyor lines (top + bottom) */}
      <div className="absolute top-8 left-0 right-0 h-[2px] overflow-hidden opacity-30">
        <motion.div
          className="h-full w-[200%] bg-[linear-gradient(90deg,transparent,hsl(var(--accent))_50%,transparent)]"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute bottom-8 left-0 right-0 h-[2px] overflow-hidden opacity-30">
        <motion.div
          className="h-full w-[200%] bg-[linear-gradient(90deg,transparent,hsl(var(--accent))_50%,transparent)]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Giant rotating gears (background decoration) */}
      <motion.div
        style={{ x: counterParallaxX }}
        className="absolute -left-32 -bottom-32 text-accent/[0.08] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Cog className="h-[420px] w-[420px]" strokeWidth={1} />
      </motion.div>
      <motion.div
        style={{ x: parallaxX }}
        className="absolute -right-24 -top-24 text-accent/[0.08] pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <Cog className="h-[300px] w-[300px]" strokeWidth={1} />
      </motion.div>

      {/* Content */}
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: Copy + CTAs */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 mb-6">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {hoveredIndustry ?? "Built for Industry"}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-[1.05]">
                {title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <MagneticButton>
                <Link to={primaryTo}>
                  <Button
                    size="lg"
                    className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold px-10 h-14 rounded-full shadow-xl shadow-accent/30 group"
                  >
                    {primaryLabel}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </MagneticButton>
              {secondaryLabel && secondaryTo && (
                <MagneticButton>
                  <Link to={secondaryTo}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground font-semibold px-10 h-14 rounded-full backdrop-blur"
                    >
                      {secondaryLabel}
                    </Button>
                  </Link>
                </MagneticButton>
              )}
            </motion.div>

            {/* Stats strip */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { v: "90+", l: "Projects" },
                { v: "8+", l: "Years" },
                { v: "7+", l: "Industries" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="border-l-2 border-accent/40 pl-3"
                >
                  <div className="font-display text-xl md:text-2xl font-bold text-accent">
                    {s.v}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-primary-foreground/50">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Interactive industry orbit */}
          <div className="relative h-[420px] hidden lg:flex items-center justify-center">
            {/* Concentric rings */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-primary-foreground/10"
                style={{
                  width: `${i * 130}px`,
                  height: `${i * 130}px`,
                }}
              />
            ))}

            {/* Center hub — white circle with favicon mark for max visibility */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 h-28 w-28 rounded-full bg-primary-foreground flex items-center justify-center shadow-2xl shadow-accent/40 ring-4 ring-accent/30"
            >
              <img
                src={faviconMark}
                alt="Viato"
                className="h-16 w-16 object-contain"
              />
            </motion.div>

            {/* Orbiting industry icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute h-[390px] w-[390px]"
            >
              {orbitIndustries.map((ind, i) => {
                const angle = (i / orbitIndustries.length) * Math.PI * 2;
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = ind.icon;
                return (
                  <motion.button
                    key={ind.label}
                    type="button"
                    onMouseEnter={() => setHoveredIndustry(ind.label)}
                    onMouseLeave={() => setHoveredIndustry(null)}
                    whileHover={{ scale: 1.25 }}
                    className="absolute top-1/2 left-1/2 h-14 w-14 -ml-7 -mt-7 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors shadow-lg"
                    style={{ x, y }}
                  >
                    {/* Counter-rotate so icon stays upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Pulse pings */}
            <motion.div
              className="absolute h-32 w-32 rounded-full border-2 border-accent/40 pointer-events-none"
              animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialCTA;
