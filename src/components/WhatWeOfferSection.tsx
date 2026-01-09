import { motion } from "framer-motion";
import { Stethoscope, Shirt, Wrench, Building2 } from "lucide-react";
import HeartbeatIcon from "./HeartbeatIcon";

const offerings = [
  {
    icon: Stethoscope,
    title: "Diagnostic Equipment",
    description: "Accurate, dependable tools for everyday use",
  },
  {
    icon: Shirt,
    title: "Exam Room Supplies",
    description: "From gloves to gowns, ready when you are",
  },
  {
    icon: Wrench,
    title: "Medical Instruments",
    description: "Trusted brands, durable builds, professional grade",
  },
  {
    icon: Building2,
    title: "Physician Office Essentials",
    description: "Stock your space with confidence",
  },
];

const WhatWeOfferSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <HeartbeatIcon className="w-24 h-10 text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4"
          >
            What We Offer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground uppercase tracking-[0.2em] text-sm font-medium"
          >
            Medical supplies that work as hard as you do
          </motion.p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated p-8 text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <offering.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                {offering.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
