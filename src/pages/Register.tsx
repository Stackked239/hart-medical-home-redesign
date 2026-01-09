import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Truck, Users, Percent, Building, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";

const benefits = [
  { icon: CreditCard, title: "Flexible Payment Terms", description: "Net 30/60/90 available for qualified accounts" },
  { icon: Truck, title: "Free Shipping", description: "On orders over $500" },
  { icon: Users, title: "Dedicated Support", description: "Personal account representative" },
  { icon: Percent, title: "Volume Discounts", description: "Better pricing for larger orders" },
];

const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <PageHeader title="Open a Business Account" subtitle="Join thousands of healthcare providers who trust Hart Medical for their supply needs" />

      {/* Benefits Bar */}
      <section className="bg-secondary py-4">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{b.title}</p>
                  <p className="text-xs text-muted-foreground">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${step >= s ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && <div className={`w-16 h-0.5 ${step > s ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              {step === 1 && "Company Info"}
              {step === 2 && "Contact & Address"}
              {step === 3 && "Review & Submit"}
            </p>
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card rounded-xl p-8">
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-6 h-6 text-primary" />
                  <div>
                    <h2 className="font-heading text-xl font-medium">Company Information</h2>
                    <p className="text-sm text-muted-foreground">Tell us about your business</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">Company Name *</label><Input placeholder="Your Company Name" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Legal Business Name</label><Input placeholder="Legal name (if different)" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">Tax ID / EIN</label><Input placeholder="XX-XXXXXXX" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Industry *</label>
                    <Select><SelectTrigger><SelectValue placeholder="Select your industry" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hospital">Acute Care / Hospital</SelectItem>
                        <SelectItem value="physician">Physician Office</SelectItem>
                        <SelectItem value="ltc">Long-Term Care / Nursing Home</SelectItem>
                        <SelectItem value="home">Home Health</SelectItem>
                        <SelectItem value="ems">Emergency Medical Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div><label className="text-sm font-medium mb-1 block">Website</label><Input placeholder="https://www.yourcompany.com" /></div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-heading text-xl font-medium mb-6">Contact & Address</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">First Name *</label><Input placeholder="John" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Last Name *</label><Input placeholder="Smith" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">Email *</label><Input type="email" placeholder="john@company.com" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Phone *</label><Input placeholder="(555) 123-4567" /></div>
                </div>
                <div><label className="text-sm font-medium mb-1 block">Street Address *</label><Input placeholder="123 Main Street" /></div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">City *</label><Input placeholder="City" /></div>
                  <div><label className="text-sm font-medium mb-1 block">State *</label><Input placeholder="State" /></div>
                  <div><label className="text-sm font-medium mb-1 block">ZIP *</label><Input placeholder="12345" /></div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="text-center py-8">
                <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="font-heading text-xl font-medium mb-2">Ready to Submit</h2>
                <p className="text-muted-foreground">Review your information and submit your application. Our team will review and respond within 1-2 business days.</p>
              </div>
            )}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button> : <div />}
              <Button onClick={() => step < 3 ? setStep(step + 1) : null} className="bg-primary hover:bg-primary/90 gap-2">
                {step < 3 ? "Continue" : "Submit Application"} <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Register;
