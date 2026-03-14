import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquareShare } from "lucide-react";

export function Book() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Web Development",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello SCHP Technologies,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Details:\n${formData.description}\n\nI would like to discuss this project.`;
    
    const whatsappUrl = `https://wa.me/919380978759?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    "Web Development", "App Development", "AI & ML Solutions", 
    "Custom Software", "MVP Development", "Billing Software", 
    "Business Management System", "Other"
  ];

  return (
    <Layout>
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="w-16 h-16 mx-auto bg-green-500/20 text-green-500 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquareShare size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Book Your <span className="text-gradient">Project</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the details below. This will prepare a WhatsApp message directly to our team so we can start discussing your requirements instantly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 pt-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl border-white/10 relative overflow-hidden">
              {/* Subtle top border gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Full Name *</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={e => setFormData(p => ({...p, name: e.target.value}))}
                    placeholder="John Doe" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Phone Number *</label>
                    <Input 
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData(p => ({...p, phone: e.target.value}))}
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Interested Service *</label>
                  <select 
                    className="flex h-12 w-full rounded-xl border border-white/10 bg-[#141A29] px-4 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary/50"
                    value={formData.service}
                    onChange={e => setFormData(p => ({...p, service: e.target.value}))}
                  >
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Project Description *</label>
                  <Textarea 
                    required
                    value={formData.description}
                    onChange={e => setFormData(p => ({...p, description: e.target.value}))}
                    placeholder="Briefly describe what you want to build..." 
                    className="min-h-[160px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 py-6 text-lg rounded-xl shadow-lg shadow-green-500/20 group">
                  <MessageSquareShare size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                  Continue to WhatsApp
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  We aim to respond to all inquiries within 2 hours.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
