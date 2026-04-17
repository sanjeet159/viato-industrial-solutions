import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "K-217, Waluj MIDC, Aurangabad – 431136,\nMaharashtra, India",
      href: "https://maps.app.goo.gl/iCD7tSd6Rp9ecY7q6?g_st=aw",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 77220 90400\n+91 98347 31352",
      href: "tel:+917722090400",
    },
    {
      icon: Mail,
      label: "Email",
      value: "viatoindustries@gmail.com",
      href: "mailto:viatoindustries@gmail.com",
    },
    { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
  ];

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
              Contact
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Have a question or need a quote? Our team is ready to help you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background relative overflow-hidden mesh-gradient">
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-5 gap-14">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <AnimateIn>
                <SectionHeading badge="Reach Us" title="Contact Information" centered={false} />
              </AnimateIn>
              <div className="space-y-5">
                {contactInfo.map((item, i) => {
                  const content = (
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.label}</p>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                  return (
                    <AnimateIn key={item.label} delay={i * 0.1}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </AnimateIn>
                  );
                })}
              </div>

              <AnimateIn delay={0.4}>
                <div className="rounded-2xl overflow-hidden border border-border mt-8 aspect-video bg-muted">
                  <iframe
                    title="Viato Industries Location"
                    src="https://maps.google.com/maps?q=Waluj+MIDC+Aurangabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimateIn>
            </div>

            {/* Form */}
            <AnimateIn className="md:col-span-3" direction="right">
              <motion.div
                className="p-8 md:p-10 rounded-2xl glass-card industrial-glow"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                      <Input id="name" placeholder="Your name" required className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-semibold">Company</Label>
                      <Input id="company" placeholder="Company name" className="h-12 rounded-xl" />
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
                    <Label htmlFor="subject" className="text-sm font-semibold">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements..." rows={5} required className="rounded-xl" />
                  </div>
                  <MagneticButton>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold h-13 rounded-full text-base shadow-lg shadow-accent/20"
                    >
                      {loading ? "Sending..." : (
                        <>Send Message <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </MagneticButton>
                </form>
              </motion.div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
