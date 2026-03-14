import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Link } from "wouter";
import { 
  MonitorSmartphone, 
  Smartphone, 
  BrainCircuit, 
  CodeSquare,
  Code2,
  ArrowRight,
  Star
} from "lucide-react";

export function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Abstract Technology Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-8 border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new projects
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                Precision. Power. <br className="hidden md:block"/>
                <span className="text-gradient">Performance.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                Leveraging AI to build smarter Web, App, and Custom Software solutions that elevate your business to the next level.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book">
                <Button variant="gradient" size="lg" className="w-full sm:w-auto group">
                  Book Project Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Our Services
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Core Expertise</h2>
            <p className="text-muted-foreground text-lg">We deliver cutting-edge solutions across multiple platforms.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              delay={0}
              title="Web Development" 
              description="Custom, high-performance web applications built with modern frameworks."
              icon={<MonitorSmartphone size={28} strokeWidth={1.5} />}
            />
            <ServiceCard 
              delay={0.1}
              title="App Development" 
              description="Native and cross-platform mobile experiences for iOS and Android."
              icon={<Smartphone size={28} strokeWidth={1.5} />}
            />
            <ServiceCard 
              delay={0.2}
              title="AI Solutions" 
              description="Intelligent integrations that automate processes and provide insights."
              icon={<BrainCircuit size={28} strokeWidth={1.5} />}
            />
            <ServiceCard 
              delay={0.3}
              title="Custom Software" 
              description="Tailored digital ecosystems designed specifically for your operations."
              icon={<CodeSquare size={28} strokeWidth={1.5} />}
            />
          </div>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <Link href="/services">
              <Button variant="ghost" className="group">
                See all 8 services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Why Choose <span className="text-gradient">SCHP Tech?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are not just coders; we are digital partners. Our mission is to build innovative, reliable, and scalable technology solutions that directly impact your bottom line.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Rapid MVP Development & Deployment",
                  "Enterprise-grade Security & Architecture",
                  "AI-driven Process Automation",
                  "24/7 Dedicated Support & Maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white/80">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-primary">
                      <ArrowRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button>Learn More About Us</Button>
              </Link>
            </FadeIn>
            
            <FadeIn direction="left" className="relative">
              <div className="relative rounded-2xl overflow-hidden glass-card border-white/20 p-2">
                <img 
                  src={`${import.meta.env.BASE_URL}images/about-bg.png`} 
                  alt="Network nodes" 
                  className="rounded-xl w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent" />
                
                {/* Floating stat card */}
                <div className="absolute bottom-6 left-6 glass-card p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-to-b from-white/5 to-primary/10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
            <FadeIn className="relative z-10">
              <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's discuss how our custom software solutions can solve your unique challenges and accelerate growth.
              </p>
              <Link href="/book">
                <Button variant="gradient" size="lg" className="px-10 py-6 text-lg">
                  Start Your Project
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
