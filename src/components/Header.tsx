import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import TopBar from "./layout/TopBar";
import hartLogo from "@/assets/hart-logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "About Us", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <TopBar />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 bg-background border-b border-border",
          isScrolled && "shadow-hart-md"
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src={hartLogo} alt="Hart Medical" className="h-7" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full flex items-center gap-1",
                    isActive(link.href)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <button
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <Link
                to="/cart"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors relative"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </Link>

              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </Link>

              <Button
                asChild
                variant="default"
                className="hidden md:flex rounded-full px-5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                <Link to="/register">Register</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <nav className="container-wide py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={cn(
                      "py-3 px-4 rounded-lg font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-2 mt-4">
                  <Button asChild variant="outline" className="flex-1 rounded-full">
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button asChild className="flex-1 rounded-full bg-primary hover:bg-primary/90">
                    <Link to="/register">Register</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
