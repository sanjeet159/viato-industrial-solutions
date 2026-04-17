import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight, Shield, Clock, Headphones, Package } from "lucide-react";

const RequestQuote = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get("product") ?? "";
  const prefilledCategory = searchParams.get("category") ?? "";
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({ title: "Quote Request Received!", description: "Our team will contact you within 24 hours." });
    }, 1000);
  };

  return (
    <Layout>
      <section className="bg-industrial-gradient py-24 md:py-36 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-6 border border-accent/20">
              Get a Quote
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Request a <span className="text-accent">Quote</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Fill in your details and requirements — we'll get back to you with a competitive quote within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background relative overflow-hidden mesh-gradient">
        <div className="container-narrow max-w-3xl relative z-10">
          {submitted ? (
            <AnimateIn>
              <motion.div
                className="text-center py-20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <motion.div
                  className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: 2, duration: 0.4 }}
                >
                  <CheckCircle className="h-10 w-10 text-accent" />
                </motion.div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">Thank You!</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                  Your quote request has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                </p>
                <MagneticButton className="inline-block">
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="font-semibold rounded-full px-8 h-12">
                    Submit Another Request
                  </Button>
                </MagneticButton>
              </motion.div>
            </AnimateIn>
          ) : (
            <>
              {/* Trust indicators */}
              <AnimateIn>
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  {[
                    { icon: Clock, text: "Response within 24 hrs" },
                    { icon: Shield, text: "100% Confidential" },
                    { icon: Headphones, text: "Dedicated Support" },
                  ].map((t) => (
                    <div key={t.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <t.icon className="h-4 w-4 text-accent" />
                      <span>{t.text}</span>
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn>
                <motion.div
                  className="p-8 md:p-10 rounded-2xl glass-card industrial-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <SectionHeading badge="Lead Form" title="Tell Us Your Requirements" centered={false} />
                  {prefilledProduct && (
                    <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
                      <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <Package className="h-5 w-5 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-accent font-semibold">Quoting</p>
                        <p className="font-display font-bold text-foreground text-base truncate">{prefilledProduct}</p>
                      </div>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                        <Input id="name" placeholder="Your name" required className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-semibold">Company Name *</Label>
                        <Input id="company" placeholder="Your company" required className="h-12 rounded-xl" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                        <Input id="email" type="email" placeholder="you@company.com" required className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold">Phone *</Label>
                        <Input id="phone" type="tel" placeholder="+91 77220 90400" required className="h-12 rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-semibold">Service/Product Interest</Label>
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select a service or product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gas-pipeline">Gas Pipeline Systems</SelectItem>
                          <SelectItem value="material-handling">Material Handling Equipment</SelectItem>
                          <SelectItem value="packaging">Packaging Solutions</SelectItem>
                          <SelectItem value="welding">Welding Consumables</SelectItem>
                          <SelectItem value="engineering">Engineering Services</SelectItem>
                          <SelectItem value="maintenance">Maintenance & AMC</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requirements" className="text-sm font-semibold">Requirements *</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Please describe your requirements in detail — quantity, specifications, timeline, etc."
                        rows={6}
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <MagneticButton>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold h-14 rounded-full text-base shadow-xl shadow-accent/20"
                      >
                        {loading ? "Submitting..." : (
                          <>Submit Quote Request <ArrowRight className="ml-2 h-5 w-5" /></>
                        )}
                      </Button>
                    </MagneticButton>
                    <p className="text-xs text-muted-foreground text-center pt-2">
                      We respect your privacy. Your information will only be used to respond to your enquiry.
                    </p>
                  </form>
                </motion.div>
              </AnimateIn>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default RequestQuote;
