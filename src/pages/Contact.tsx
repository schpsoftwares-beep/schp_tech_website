import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("In a real app, this would send an email. For projects, please use the Book Project page!");
  };

  return (
    <Layout>
      <section className="pt-24 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a general inquiry? Reach out to us. If you have a specific project in mind, use our Booking page for faster service.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <FadeIn direction="right">
              <h2 className="text-3xl font-display font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone & WhatsApp</h3>
                    <a href="https://wa.me/919380978759" target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-white transition-colors">+91 93809 78759 (WhatsApp)</a>
                    <a href="tel:9019596221" className="block text-muted-foreground hover:text-white transition-colors">+91 90195 96221</a>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <a href="mailto:schpsoftwares@gmail.com" className="block text-muted-foreground hover:text-white transition-colors">schpsoftwares@gmail.com</a>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                    <p className="text-muted-foreground">Digital Operations<br/>HQ in India</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden glass-card h-64 relative group border-white/10">
                <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] flex items-center justify-center z-10 group-hover:backdrop-blur-none transition-all duration-500">
                  <span className="bg-background/90 px-4 py-2 rounded-lg border border-white/10 text-sm font-medium">Map View Unavailable</span>
                </div>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop" className="w-full h-full object-cover grayscale opacity-50" />
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="glass-card rounded-3xl p-8 lg:p-10 border-t-4 border-t-secondary">
                <h2 className="text-2xl font-display font-bold text-white mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">First Name</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Last Name</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                    <Textarea placeholder="How can we help you?" className="min-h-[150px]" required />
                  </div>
                  <Button type="submit" variant="gradient" size="lg" className="w-full">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </Layout>
  );
}
