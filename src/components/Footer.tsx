import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import hartLogo from "@/assets/hart-logo.svg";

const Footer = () => {
  const productLinks = [
    { label: "Diagnostic Equipment", href: "/products?category=diagnostic" },
    { label: "Exam Room Supplies", href: "/products?category=exam-room" },
    { label: "Medical Instruments", href: "/products?category=instruments" },
    { label: "Needles & Syringes", href: "/products?category=needles-syringes" },
    { label: "Extended Care", href: "/products?category=extended-care" },
    { label: "All Products", href: "/products" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
    { label: "News & Updates", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "/resources" },
    { label: "Shipping Information", href: "/resources#shipping" },
    { label: "Returns & Exchanges", href: "/resources#returns" },
    { label: "Track Your Order", href: "/account/orders" },
    { label: "Request a Quote", href: "/contact" },
  ];

  const accountLinks = [
    { label: "Sign In", href: "/login" },
    { label: "Register", href: "/register" },
    { label: "My Account", href: "/account" },
    { label: "Order History", href: "/account/orders" },
    { label: "Shopping Lists", href: "/account/lists" },
  ];

  const industries = [
    "Acute Care",
    "Physician Office",
    "Long-Term Care",
    "Federal & State",
    "Emergency Medical",
    "Home Health",
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-foreground pt-16 pb-8"
    >
      <div className="container-wide">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-background/10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <span className="text-background font-heading font-bold text-lg">H</span>
              </div>
              <div>
                <span className="font-heading text-lg font-semibold text-background">Hart Medical</span>
                <p className="text-background/60 text-xs">Essential Supplies. Exceptional Service.</p>
              </div>
            </div>
            <p className="text-background/60 text-sm mb-6 max-w-xs">
              Family-owned medical supply company serving healthcare providers nationwide with quality products and exceptional customer service since 1985.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>1-800-HART-MED (1-800-427-8633)</span>
              </div>
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>orders@hart-medical.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Nationwide Distribution</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-background font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/60 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-background font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/60 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-background font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/60 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-background font-heading font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/60 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Industries */}
        <div className="py-8 border-b border-background/10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-background font-heading font-semibold">Industries We Serve</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-3 py-1.5 bg-background/10 text-background/70 text-sm rounded-full"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Hart Medical Supply. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-background/60 text-sm hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/60 text-sm hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-background/60 text-sm hover:text-background transition-colors">
              Accessibility
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
