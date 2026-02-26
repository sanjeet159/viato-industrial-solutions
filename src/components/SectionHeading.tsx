interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ badge, title, description, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
          light ? "bg-accent/20 text-accent" : "bg-accent/10 text-accent"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
