import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Healthcare professionals in a modern hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hart-dark/80 via-hart-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-20 flex items-center min-h-screen">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6"
          >
            Essential Supplies.
            <br />
            Exceptional Service.
            <br />
            Nationwide.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl"
          >
            From diagnostic tools to everyday exam room essentials, Hart Medical
            delivers the quality products your practice depends on—backed by the
            personalized service only a family-owned business can offer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-hart-lg hover:shadow-hart-xl transition-all duration-300"
            >
              Shop Now
            </Button>
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
