import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const RequestQuote = () => {
  const { toast } = useToast();
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
      <section className="bg-industrial-gradient py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">Get a Quote</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Request a Quote</h1>
            <p className="text-primary-foreground/80 text-lg">
              Fill in your details and requirements — we'll get back to you with a competitive quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-2xl">
          {submitted ? (
            <div className="text-center py-16">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                Your quote request has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="font-semibold">
                Submit Another Request
              </Button>
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-card border border-border">
              <SectionHeading badge="Lead Form" title="Tell Us Your Requirements" centered={false} />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Your company" required />
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
                  <Label htmlFor="service">Service/Product Interest</Label>
                  <Select>
                    <SelectTrigger>
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
                  <Label htmlFor="requirements">Requirements *</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Please describe your requirements in detail — quantity, specifications, timeline, etc."
                    rows={6}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold h-12 text-base"
                >
                  {loading ? "Submitting..." : "Submit Quote Request"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your information will only be used to respond to your enquiry.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default RequestQuote;
