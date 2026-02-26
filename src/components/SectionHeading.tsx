import { AnimateIn } from "@/components/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ badge, title, description, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {badge && (
        <AnimateIn>
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-4 ${
            light
              ? "bg-accent/20 text-accent border border-accent/30"
              : "bg-accent/10 text-accent border border-accent/20"
          }`}>
            {badge}
          </span>
        </AnimateIn>
      )}
      <AnimateIn delay={0.1}>
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
          {title}
        </h2>
      </AnimateIn>
      {description && (
        <AnimateIn delay={0.2}>
          <p className={`mt-5 text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            {description}
          </p>
        </AnimateIn>
      )}
    </div>
  );
};

export default SectionHeading;
