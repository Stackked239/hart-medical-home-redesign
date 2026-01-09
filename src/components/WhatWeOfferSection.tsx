import { motion } from "framer-motion";
import { Stethoscope, Shirt, Wrench, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeartbeatIcon from "./HeartbeatIcon";
import diagnosticEquipment from "@/assets/diagnostic-equipment.jpg";
import examRoom from "@/assets/exam-room.jpg";
import medicalSupplies from "@/assets/medical-supplies.jpg";
import heroWarehouse from "@/assets/hero-warehouse.jpg";

const offerings = [
  {
    icon: Stethoscope,
    title: "Diagnostic Equipment",
    count: "2,500+",
    description: "Stethoscopes, BP monitors, and diagnostic tools",
    image: diagnosticEquipment,
    category: "diagnostic",
  },
  {
    icon: Shirt,
    title: "Exam Room Supplies",
    count: "8,000+",
    description: "Tables, paper, gowns, and exam essentials",
    image: examRoom,
    category: "exam-room",
  },
  {
    icon: Wrench,
    title: "Medical Instruments",
    count: "5,000+",
    description: "Surgical instruments and precision tools",
    image: medicalSupplies,
    category: "instruments",
  },
  {
    icon: Building2,
    title: "Needles & Syringes",
    count: "3,000+",
    description: "Hypodermic needles and injection supplies",
    image: heroWarehouse,
    category: "needles-syringes",
  },
];

const WhatWeOfferSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4"
          >
            What We Offer
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4"
          >
            Medical Supplies That Work As Hard As You Do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We offer an expansive selection of high-quality products to meet the needs of modern care facilities
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
            >
              <Link
                to={`/products?category=${offering.category}`}
                className="block card-elevated overflow-hidden group cursor-pointer h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={offering.image} 
                    alt={offering.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                      {offering.count}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                    <offering.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {offering.description}
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Shop Now <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
