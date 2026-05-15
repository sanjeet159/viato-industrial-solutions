import { useState } from "react";
import Layout from "@/components/Layout";
import { AnimateIn, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage =
`*[ VIATO INDUSTRIES ]*
*New Website Enquiry*
-----------------------------

*Name:* ${formData.name}
*Company:* ${formData.company || "N/A"}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject || "General Enquiry"}

-----------------------------
*Message:*
${formData.message}
-----------------------------
_Sent from viato.in_`;
    const whatsappNumber = "919834731352";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Redirecting to WhatsApp!",
        description: "Your message is ready — just hit Send on WhatsApp.",
      });
      setFormData({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
      window.open(whatsappURL, "_blank");
    }, 800);
  };

  return (
    <Layout>

      <SEO
        title="Contact Us — Aurangabad & Pune Office"
        description="Reach Viato Industries for gas pipeline, chemicals and packaging enquiries. Office at Waluj MIDC, Aurangabad. Call +91 98347 31352."
        slug="contact"
        keywords="Viato Industries contact number, Aurangabad industrial company, Waluj MIDC supplier"
      >
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Viato Industries",
          url: "https://viato-industrial-solutions.lovable.app/contact",
          telephone: ["+919834731352", "+917722090400"],
          email: "viatoindustries@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "K-217, Waluj MIDC",
            addressLocality: "Aurangabad",
            addressRegion: "Maharashtra",
            postalCode: "431136",
            addressCountry: "IN",
          },
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            opens: "09:00",
            closes: "18:00",
          }],
        })}</script>
      </SEO>

      {/* ══════ HERO — Compact ══════ */}
      <section className="bg-industrial-gradient py-10 md:py-14 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="container-wide relative z-10">
          <motion.div
            className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-3 border border-accent/20">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Contact Us
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                Get In <span className="text-accent">Touch</span>
              </h1>
            </div>
            <p className="text-primary-foreground/50 text-sm md:text-base leading-relaxed md:max-w-xs">
              Have a question or need a quote? Our team responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ QUICK CONTACT STRIP ══════ */}
      <section className="bg-card border-b border-border">
        <div className="container-wide py-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { icon: Phone, label: "Call Us", value: "+91 98347 31352", href: "tel:+919834731352", color: "28 90% 52%" },
              { icon: Phone, label: "Alternate", value: "+91 77220 90400", href: "tel:+917722090400", color: "28 90% 52%" },
              { icon: Mail, label: "Email Us", value: "viatoindustries@gmail.com", href: "mailto:viatoindustries@gmail.com", color: "210 80% 55%" },
              { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9AM – 6PM", href: null, color: "150 60% 45%" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} className="flex items-center gap-4 px-8 py-5 hover:bg-muted/50 transition-colors group">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `hsl(${item.color} / 0.1)` }}>
                      <item.icon className="h-5 w-5" style={{ color: `hsl(${item.color})` }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                      <p className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/0 group-hover:text-accent ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 px-8 py-5">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `hsl(${item.color} / 0.1)` }}>
                      <item.icon className="h-5 w-5" style={{ color: `hsl(${item.color})` }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                      <p className="text-sm font-bold text-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ MAIN CONTENT ══════ */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-accent/4 blur-3xl pointer-events-none" />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">

            {/* ── Left: Info + Map ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Address card */}
              <AnimateIn>
                <motion.a
                  href="https://www.google.com/maps/place/19%C2%B049'48.6%22N+75%C2%B012'21.5%22E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all group relative overflow-hidden"
                  whileHover={{ y: -3 }}
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Registered Office</p>
                      <p className="font-bold text-foreground text-sm">K-217, Waluj MIDC</p>
                      <p className="text-muted-foreground text-sm">Aurangabad – 431136, Maharashtra</p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Open in Maps <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              </AnimateIn>

              {/* Map */}
              <AnimateIn delay={0.2}>
                <motion.div
                  className="rounded-2xl overflow-hidden border border-border/50 shadow-lg relative group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-2xl z-10 transition-colors pointer-events-none" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2254.807468884801!2d75.20635521867543!3d19.830223395424387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQ5JzQ4LjYiTiA3NcKwMTInMjEuNSJF!5e1!3m2!1sen!2sin!4v1776582610439!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Viato Industries Location"
                  />
                </motion.div>
              </AnimateIn>

              {/* WhatsApp CTA */}
              <AnimateIn delay={0.3}>
                <motion.a
                  href="https://wa.me/919834731352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/40 transition-all group"
                  whileHover={{ y: -2 }}
                >
                  <div className="h-11 w-11 rounded-xl bg-green-500/15 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-sm">Chat on WhatsApp</p>
                    <p className="text-muted-foreground text-xs">Quick response guaranteed</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </AnimateIn>
            </div>

            {/* ── Right: Form ── */}
            <AnimateIn className="lg:col-span-3" direction="right" delay={0.15}>
              <motion.div
                className="rounded-3xl border border-border/50 bg-card relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Form header */}
                <div className="px-8 md:px-10 pt-8 md:pt-10 pb-6 border-b border-border/40">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Send className="h-4 w-4 text-accent" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">Send a Message</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-12">
                    Fill in the form — we'll reply via WhatsApp instantly.
                  </p>
                </div>

                {/* Form body */}
                <div className="px-8 md:px-10 py-8">
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12 rounded-xl border-border/60 focus:border-accent bg-background"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company</Label>
                        <Input
                          id="company"
                          placeholder="Company name"
                          value={formData.company}
                          onChange={handleChange}
                          className="h-12 rounded-xl border-border/60 focus:border-accent bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 rounded-xl border-border/60 focus:border-accent bg-background"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98347 31352"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 rounded-xl border-border/60 focus:border-accent bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-border/60 focus:border-accent bg-background"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-xl border-border/60 focus:border-accent resize-none bg-background"
                      />
                    </div>

                    {/* Submit */}
                    <MagneticButton>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 rounded-xl text-base shadow-lg shadow-accent/20 relative overflow-hidden group"
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <motion.div
                                className="h-4 w-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                              />
                              Opening WhatsApp...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Send via WhatsApp
                              <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </MagneticButton>

                    <p className="text-xs text-muted-foreground text-center">
                      Clicking send will open WhatsApp with your message pre-filled.{" "}
                      <span className="font-semibold text-foreground">Just tap Send.</span>
                    </p>

                  </form>
                </div>
              </motion.div>
            </AnimateIn>

          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
