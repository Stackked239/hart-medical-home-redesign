import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-center mb-12"
          >
            Contact Us
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-background border-border focus:border-primary focus:ring-primary rounded-lg h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Phone number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="bg-background border-border focus:border-primary focus:ring-primary rounded-lg h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-background border-border focus:border-primary focus:ring-primary rounded-lg h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment" className="text-foreground font-medium">
                Comment
              </Label>
              <Textarea
                id="comment"
                placeholder="How can we help you?"
                rows={5}
                className="bg-background border-border focus:border-primary focus:ring-primary rounded-lg resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-hart-md hover:shadow-hart-lg transition-all duration-300"
            >
              Send
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
