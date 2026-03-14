import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  MonitorSmartphone, Smartphone, BrainCircuit, CodeSquare, 
  Rocket, Receipt, Building2, GitMerge 
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive websites and web applications built with modern tech like React, Next.js, and Node.",
      icon: <MonitorSmartphone size={28} strokeWidth={1.5} />
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      icon: <Smartphone size={28} strokeWidth={1.5} />
    },
    {
      title: "AI & Machine Learning",
      description: "Smart AI solutions, chatbots, and predictive models to automate and optimize your business.",
      icon: <BrainCircuit size={28} strokeWidth={1.5} />
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions built specifically for your unique operational needs.",
      icon: <CodeSquare size={28} strokeWidth={1.5} />
    },
    {
      title: "MVP Development",
      description: "Rapidly build and launch your minimum viable product to test the market quickly and efficiently.",
      icon: <Rocket size={28} strokeWidth={1.5} />
    },
    {
      title: "Billing Software",
      description: "Automated billing, invoicing, and payment tracking systems for modern businesses.",
      icon: <Receipt size={28} strokeWidth={1.5} />
    },
    {
      title: "Business Management",
      description: "Complete ERP and management solutions for enterprises to track resources and workflows.",
      icon: <Building2 size={28} strokeWidth={1.5} />
    },
    {
      title: "Automation Solutions",
      description: "Automate repetitive tasks and workflows with smart API integrations and scripting.",
      icon: <GitMerge size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital engineering for startups and enterprises. We build tools that make you faster, smarter, and more profitable.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
