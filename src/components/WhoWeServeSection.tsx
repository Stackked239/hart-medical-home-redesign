import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const industries = [
  "Acute Care",
  "Clinical Laboratory",
  "Consumer Products",
  "Emergency Medical Services",
  "Health Plans",
  "Home Medical Equipment",
  "Home Health & Hospice",
  "Long-Term Care",
  "Physician Office",
  "Surgery Center",
  "Federal & State Agencies",
];

const WhoWeServeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-center mb-12"
        >
          Who We Serve
        </motion.h2>

        {/* Industry Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {industries.map((industry, index) => (
            <button
              key={industry}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeIndex === index
                  ? "bg-primary text-primary-foreground shadow-hart-md"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              )}
            >
              {industry}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
