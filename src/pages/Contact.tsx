import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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

  return (
    <Layout>
      <section className="bg-industrial-gradient py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">Contact</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Get In Touch</h1>
            <p className="text-primary-foreground/80 text-lg">
              Have a question or need a quote? Our team is ready to help you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <SectionHeading badge="Reach Us" title="Contact Information" centered={false} />
              {[
                { icon: MapPin, label: "Address", value: "Waluj MIDC, Aurangabad,\nMaharashtra, India" },
                { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
                { icon: Mail, label: "Email", value: "info@viatoindustries.com" },
                { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-border mt-6 aspect-video bg-muted flex items-center justify-center">
                <iframe
                  title="Viato Industries Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.139!2d75.25!3d19.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzEyLjAiTiA3NcKwMTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="p-8 rounded-xl bg-card border border-border">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="you@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements..." rows={5} required />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold h-11"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
