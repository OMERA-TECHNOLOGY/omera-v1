import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", project: "", budget: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Let's Build
              <br />
              <span className="text-accent">Something Amazing</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to transform your vision into reality? Share your project
              idea and let's discuss how we can help you succeed.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email Us</p>
                  <a
                    href="mailto:hello@apexdevs.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    hello@omera.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Talk to Founders</p>
                  <p className="text-muted-foreground">
                    Direct access to our founding team
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-500">
                      Available now
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 glass-morph rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by startups and enterprises
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="font-bold text-accent">4.9/5</span> Rating
                </div>
                <div className="w-px h-6 bg-border" />
                <div>
                  <span className="font-bold text-accent">100%</span>{" "}
                  Satisfaction
                </div>
                <div className="w-px h-6 bg-border" />
                <div>
                  <span className="font-bold text-accent">24h</span> Response
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-morph p-8 lg:p-12 ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="text-base font-semibold mb-2 block"
                >
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alemayehu Tadele"
                  required
                  className="bg-background/50 border-accent/30 focus:border-accent h-12"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-base font-semibold mb-2 block"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alemayehe@omera.tech"
                  required
                  className="bg-background/50 border-accent/30 focus:border-accent h-12"
                />
              </div>

              <div>
                <Label
                  htmlFor="project"
                  className="text-base font-semibold mb-2 block"
                >
                  Project Idea
                </Label>
                <Textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Tell us about your project vision, goals, and requirements..."
                  required
                  rows={5}
                  className="bg-background/50 border-accent/30 focus:border-accent resize-none"
                />
              </div>

              <div>
                <Label
                  htmlFor="budget"
                  className="text-base font-semibold mb-2 block"
                >
                  Budget Range (Optional)
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., $10k - $50k"
                  className="bg-background/50 border-accent/30 focus:border-accent h-12"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-primary font-bold text-lg h-14 rounded-xl group"
              >
                Start the Project
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                We typically respond within 24 hours. Your information is kept
                confidential.
              </p>
            </form>
          </Card>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
