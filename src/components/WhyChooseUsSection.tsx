import { motion } from "framer-motion";
import { Check, Shield, RotateCcw, Percent, Headphones } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const reasons = [
  "Decades of industry experience",
  "Carefully vetted product lines",
  "Competitive pricing",
  "Responsive, personalized service",
  "Fast, reliable nationwide shipping",
];

const benefits = [
  { icon: Shield, title: "Quality Guaranteed", description: "All products meet FDA and industry standards" },
  { icon: RotateCcw, title: "Quick Reorder", description: "Save shopping lists and reorder with one click" },
  { icon: Percent, title: "Volume Discounts", description: "Better pricing for larger orders" },
  { icon: Headphones, title: "Expert Assistance", description: "Knowledgeable staff ready to help" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-hart-xl">
              <img
                src={doctorPortrait}
                alt="Healthcare professional with stethoscope"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hart-dark/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4"
            >
              Why Choose Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6"
            >
              Serving Healthcare Providers Across All Industries
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground mb-8"
            >
              From small physician offices to large hospital systems, we understand the unique needs of every healthcare environment.
            </motion.p>

            <div className="space-y-4 mb-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {benefits.map((benefit, i) => (
            <div key={benefit.title} className="bg-background rounded-xl p-6 shadow-hart-sm">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-medium text-foreground mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
