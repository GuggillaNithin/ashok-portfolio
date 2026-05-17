import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Signature from "./Signature";

export default function Navbar() {
  const navLinks = [
    { name: "SERVICE", href: "#services" },
    { name: "WORKS", href: "#works" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "NOTES", href: "#notes" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-cream/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Signature */}
          <div className="flex items-center">
            <Signature
              className="text-4xl text-slate-900"
              layoutId="navbar-logo"
            />
          </div>

          {/* Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-slate-500 hover:text-slate-900 transition-colors uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </a>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            className="flex items-center space-x-2"
          >
            <a
              href="tel:+918008015106"
              className="flex items-center text-sm font-semibold text-slate-900 group"
            >
              <span className="mr-2">+91 8008015106</span>
              <div className="p-2 border border-slate-200 rounded-full group-hover:border-slate-900 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
