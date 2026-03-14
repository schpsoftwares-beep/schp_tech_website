import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <img
                src="/images/schp-logo.png"
                alt="SCHP Technologies"
                className="h-14 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 8px rgba(139,92,246,0.7))" }}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Leveraging AI to build smarter Web, App, and Custom Software solutions that drive business growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Web Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">App Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">AI & ML Solutions</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Custom Software</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors text-sm">Client Reviews</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li><Link href="/admin" className="text-muted-foreground hover:text-primary transition-colors text-sm">Admin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:9380978759" className="block hover:text-white transition-colors">+91 93809 78759</a>
                  <a href="tel:9019596221" className="block hover:text-white transition-colors">+91 90195 96221</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:schpsoftwares@gmail.com" className="hover:text-white transition-colors">schpsoftwares@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Global Digital Operations<br/>HQ in India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SCHP Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
