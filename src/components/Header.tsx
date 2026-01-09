import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Find a product", href: "#products" },
    { label: "Sign In", href: "#signin" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-hart-md"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-105"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 8 L20 32" strokeLinecap="round" />
                <path d="M12 16 L20 24 L28 16" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="20" r="18" strokeOpacity="0.3" />
              </svg>
            </div>
            <span className={cn(
              "font-heading text-xl font-semibold tracking-wide transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-foreground"
            )}>
              HART MEDICAL
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary",
                  isScrolled ? "text-foreground" : "text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="default"
              className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Register
            </Button>
            <button
              className={cn(
                "p-2 transition-colors duration-200 hover:text-primary",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={cn(
                "p-2 transition-colors duration-200 hover:text-primary",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="default"
                className="rounded-full w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Register
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
