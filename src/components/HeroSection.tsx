import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Truck, CreditCard, Headphones } from "lucide-react";
import heroMedical from "@/assets/hero-medical.jpg";

const features = [
  { icon: Package, title: "60,000+ Products", description: "Comprehensive catalog of medical supplies from trusted manufacturers" },
  { icon: Truck, title: "Fast Nationwide Shipping", description: "Same-day shipping on orders placed before 2PM EST" },
  { icon: CreditCard, title: "Flexible Payment Terms", description: "Net 30/60/90 terms available for qualified accounts" },
  { icon: Headphones, title: "Dedicated Support", description: "Personal account representatives for your business" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroMedical}
          alt="Hart Medical healthcare professional with medical supplies"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-background leading-tight mb-6 italic"
            >
              Essential Supplies.
              <br />
              <span className="text-background/90">Exceptional Service.</span>
              <br />
              <span className="text-background/80">Nationwide.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-background/80 leading-relaxed mb-8 max-w-xl"
            >
              From diagnostic tools to everyday exam room essentials, Hart Medical
              delivers the quality products your practice depends on—backed by the
              personalized service only a family-owned business can offer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-lg px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-hart-lg hover:shadow-hart-xl transition-all duration-300"
              >
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg px-8 py-6 text-base font-medium border-background/30 text-background hover:bg-background/10 transition-all duration-300"
              >
                <Link to="/register">Open an Account</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="bg-foreground/80 backdrop-blur-sm rounded-xl p-6 border border-background/10"
              >
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading font-medium text-background mb-1">{feature.title}</h3>
                <p className="text-sm text-background/60">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
};

export default HeroSection;
