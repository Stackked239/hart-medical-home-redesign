import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, FileText, Truck, CreditCard, RotateCcw, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";

const contactInfo = [
  { icon: Phone, title: "Phone", lines: ["1-800-HART-MED (1-800-427-8633)", "Mon-Fri: 8AM - 6PM EST"] },
  { icon: Mail, title: "Email", lines: ["orders@hart-medical.com", "support@hart-medical.com"] },
  { icon: MapPin, title: "Headquarters", lines: ["Hart Medical Supply", "Nationwide Distribution"] },
  { icon: Clock, title: "Business Hours", lines: ["Monday - Friday: 8AM - 6PM EST", "Saturday: 9AM - 1PM EST"] },
];

const faqs = [
  { q: "How do I open a business account?", a: "Click the \"Register\" button in the top navigation and complete the business registration form. Our team will review your application within 1-2 business days." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, ACH bank transfers, and purchase orders. Qualified accounts may also apply for Net 30/60/90 payment terms." },
  { q: "What are your shipping options?", a: "We offer same-day shipping on orders placed before 2PM EST. Free shipping is available on orders over $500. Expedited options are also available." },
  { q: "Can I request a product quote?", a: "Yes! Use our Request for Quote (RFQ) feature for large orders or special pricing requests. Our sales team will respond within 24 hours." },
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <PageHeader title="Contact Us" subtitle="Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible." />

      {/* Contact Cards */}
      <section className="py-12 bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {contactInfo.map((info, i) => (
              <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 text-center shadow-hart-md">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-medium mb-2">{info.title}</h3>
                {info.lines.map((line) => <p key={line} className="text-sm text-muted-foreground">{line}</p>)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & FAQ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-medium mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">Fill out the form below and we'll respond within 24 business hours.</p>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">Full Name *</label><Input placeholder="John Smith" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Email Address *</label><Input type="email" placeholder="john@company.com" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">Phone Number</label><Input placeholder="(555) 123-4567" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Company Name</label><Input placeholder="Your Company" /></div>
                </div>
                <div><label className="text-sm font-medium mb-1 block">Department *</label>
                  <Select><SelectTrigger><SelectValue placeholder="Select a department" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales & New Accounts</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="orders">Order Inquiries</SelectItem>
                      <SelectItem value="returns">Returns & Exchanges</SelectItem>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div><label className="text-sm font-medium mb-1 block">Message *</label><Textarea rows={4} placeholder="How can we help you?" /></div>
                <Button className="bg-primary hover:bg-primary/90 rounded-lg">Send Message</Button>
              </form>
            </motion.div>

            {/* FAQs */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-medium mb-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mb-6">Quick answers to common questions</p>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl px-4 border-none">
                    <AccordionTrigger className="hover:no-underline text-left font-medium">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
