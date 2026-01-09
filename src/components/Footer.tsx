import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-foreground py-12"
    >
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 40 40"
              className="w-8 h-8 text-background"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 8 L20 32" strokeLinecap="round" />
              <path d="M12 16 L20 24 L28 16" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="20" r="18" strokeOpacity="0.3" />
            </svg>
            <span className="font-heading text-lg font-semibold text-background tracking-wide">
              HART MEDICAL
            </span>
          </div>

          {/* Copyright */}
          <p className="text-background/60 text-sm text-center">
            © {new Date().getFullYear()} Hart Medical. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-background/60 text-sm hover:text-background transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-background/60 text-sm hover:text-background transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
