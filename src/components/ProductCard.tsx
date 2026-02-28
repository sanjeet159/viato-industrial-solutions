import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/data/products";

export type { ProductCategory };

const ProductCard = ({
  category,
  isHovered,
  onHover,
  onLeave,
  index,
}: {
  category: ProductCategory;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  index: number;
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <motion.div
        className="rounded-2xl border bg-card overflow-hidden cursor-pointer relative"
        animate={{
          borderColor: isHovered ? "hsl(28 90% 52% / 0.4)" : "hsl(214 20% 88% / 0.5)",
          boxShadow: isHovered
            ? "0 25px 60px -12px hsl(28 90% 52% / 0.15), 0 0 0 1px hsl(28 90% 52% / 0.1)"
            : "0 4px 20px -4px hsl(215 80% 22% / 0.06)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Top glow line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-industrial-gradient-accent"
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ originX: 0 }}
        />

        {/* Header area */}
        <div
          className="p-6 md:p-8"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <motion.div
                className="h-14 w-14 rounded-xl flex items-center justify-center shrink-0"
                animate={{
                  backgroundColor: isHovered ? "hsl(28 90% 52% / 0.15)" : "hsl(215 80% 22% / 0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  className="h-7 w-7 transition-colors duration-300"
                  style={{ color: isHovered ? "hsl(28 90% 52%)" : "hsl(215 80% 22%)" }}
                />
              </motion.div>
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-1.5">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed hidden md:block">
                  {category.desc}
                </p>
              </div>
            </div>

            {/* Expand arrow */}
            <motion.div
              className="h-9 w-9 rounded-full border border-border/60 flex items-center justify-center shrink-0 mt-1"
              animate={{
                rotate: isHovered || mobileOpen ? 180 : 0,
                borderColor: isHovered ? "hsl(28 90% 52% / 0.4)" : "hsl(214 20% 88% / 0.6)",
                backgroundColor: isHovered ? "hsl(28 90% 52% / 0.08)" : "transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </motion.div>
          </div>

          {/* Mobile description */}
          <p className="text-muted-foreground text-sm leading-relaxed mt-3 md:hidden">
            {category.desc}
          </p>
        </div>

        {/* Sub-products — desktop: hover, mobile: tap */}
        <AnimatePresence>
          {(isHovered || mobileOpen) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-border/30 pt-5">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-4">
                  Products
                </p>
                <ul className="space-y-1">
                  {category.subProducts.map((sub, i) => (
                    <motion.li
                      key={sub.slug}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                    >
                      <Link
                        to={`/products/${category.slug}/${sub.slug}`}
                        className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-foreground/80 hover:bg-accent/8 hover:text-accent transition-all group/item"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover/item:bg-accent group-hover/item:scale-125 transition-all" />
                          {sub.name}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/0 group-hover/item:text-accent group-hover/item:translate-x-0 -translate-x-2 transition-all" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  to={`/products/${category.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-3 transition-all"
                >
                  View All {category.title} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
