import { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="glass-card glass-card-hover rounded-2xl p-8 h-full flex flex-col group relative overflow-hidden">
        {/* Decorative gradient blob */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
          {description}
        </p>
        
        <Link 
          href="/book" 
          className="mt-auto inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors w-fit"
        >
          Book Project
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </FadeIn>
  );
}
