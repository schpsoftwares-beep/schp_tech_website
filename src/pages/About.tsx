import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";
import { Code2, Target, Zap, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-white/5 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              About <span className="text-gradient">SCHP Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              We are a modern software solutions company dedicated to building innovative, reliable, and intelligent technology for forward-thinking businesses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <FadeIn direction="right">
              <h2 className="text-3xl font-display font-bold text-white mb-6">Our Mission</h2>
              <div className="glass-card rounded-2xl p-8 border-l-4 border-l-primary">
                <p className="text-lg text-white/90 leading-relaxed italic">
                  "To build innovative and reliable technology solutions that empower businesses to scale faster, operate smarter, and achieve their full potential in the digital era."
                </p>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-display font-bold text-white mb-6">What We Do</h3>
                <p className="text-muted-foreground mb-4">
                  We don't just write code. We analyze your business processes and architect solutions that solve real problems.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Web Development", "App Development", "AI/ML Solutions", 
                    "Custom Software", "MVP Development", "Billing Systems", 
                    "Business Management ERP"
                  ].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <Target className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Precision</h3>
                <p className="text-sm text-muted-foreground">Exact engineering mapped perfectly to your business requirements.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <Zap className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Power</h3>
                <p className="text-sm text-muted-foreground">High-performance architectures that handle scale effortlessly.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <Code2 className="text-secondary mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Modern Tech</h3>
                <p className="text-sm text-muted-foreground">Utilizing the latest frameworks for future-proof applications.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <ShieldCheck className="text-emerald-500 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Reliability</h3>
                <p className="text-sm text-muted-foreground">Secure, tested, and rock-solid software you can depend on.</p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </Layout>
  );
}
