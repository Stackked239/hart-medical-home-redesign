import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Truck, CreditCard, Check, Package, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const shippingMethods = [
  { id: "ground", name: "Ground Shipping", time: "5-7 business days", date: "Jan 16-18, 2026", price: 0 },
  { id: "express", name: "Express Shipping", time: "2-3 business days", date: "Jan 13-14, 2026", price: 15.99 },
  { id: "overnight", name: "Overnight Shipping", time: "Next business day", date: "Jan 10, 2026", price: 34.99 },
];

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState("ground");
  const { items, subtotal } = useCart();

  const selectedShipping = shippingMethods.find((m) => m.id === shippingMethod)!;
  const shipping = selectedShipping.price;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const steps = [
    { num: 1, label: "Shipping" },
    { num: 2, label: "Payment" },
    { num: 3, label: "Review" },
  ];

  return (
    <main className="min-h-screen bg-secondary flex flex-col">
      <Header />

      <section className="flex-1 py-8">
        <div className="container-wide">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/cart" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </Link>
            <h1 className="font-heading text-2xl md:text-3xl font-medium text-foreground">Checkout</h1>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                  step >= s.num ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border border-border"
                }`}>
                  {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                </div>
                <span className={`hidden sm:block text-sm ${step >= s.num ? "text-foreground" : "text-muted-foreground"}`}>
                  {s.label}
                </span>
                {i < steps.length - 1 && <div className={`w-12 sm:w-20 h-0.5 ${step > s.num ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-background rounded-xl p-6"
              >
                {step === 1 && (
                  <div className="space-y-8">
                    {/* Shipping Address */}
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <Truck className="w-5 h-5 text-primary" />
                        <h2 className="font-heading text-lg font-medium">Shipping Address</h2>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label className="text-sm font-medium mb-1 block">First Name *</label><Input placeholder="John" /></div>
                        <div><label className="text-sm font-medium mb-1 block">Last Name *</label><Input placeholder="Smith" /></div>
                      </div>
                      <div className="mt-4"><label className="text-sm font-medium mb-1 block">Company Name</label><Input placeholder="Company (optional)" /></div>
                      <div className="mt-4"><label className="text-sm font-medium mb-1 block">Street Address *</label><Input placeholder="123 Main Street" /></div>
                      <div className="mt-4"><label className="text-sm font-medium mb-1 block">Apt, Suite, etc. (optional)</label><Input placeholder="Suite 100" /></div>
                      <div className="grid sm:grid-cols-3 gap-4 mt-4">
                        <div><label className="text-sm font-medium mb-1 block">City *</label><Input placeholder="City" /></div>
                        <div><label className="text-sm font-medium mb-1 block">State *</label>
                          <Select><SelectTrigger><SelectValue placeholder="State" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ny">New York</SelectItem>
                              <SelectItem value="ca">California</SelectItem>
                              <SelectItem value="tx">Texas</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div><label className="text-sm font-medium mb-1 block">ZIP Code *</label><Input placeholder="10001" /></div>
                      </div>
                      <div className="mt-4"><label className="text-sm font-medium mb-1 block">Phone Number *</label><Input placeholder="(555) 123-4567" /></div>
                    </div>

                    {/* Shipping Method */}
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <Package className="w-5 h-5 text-primary" />
                        <div>
                          <h2 className="font-heading text-lg font-medium">Shipping Method</h2>
                          <p className="text-sm text-muted-foreground">Select your preferred shipping speed</p>
                        </div>
                      </div>
                      <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="space-y-3">
                        {shippingMethods.map((method) => (
                          <label
                            key={method.id}
                            className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                              shippingMethod === method.id ? "border-primary bg-primary/5" : "border-border hover:bg-secondary"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value={method.id} />
                              <div>
                                <p className="font-medium text-foreground">{method.name}</p>
                                <p className="text-sm text-muted-foreground">{method.time}</p>
                                <p className="text-xs text-primary">Est. delivery: {method.date}</p>
                              </div>
                            </div>
                            <span className={`font-medium ${method.price === 0 ? "text-green-600" : "text-foreground"}`}>
                              {method.price === 0 ? "FREE" : `$${method.price.toFixed(2)}`}
                            </span>
                          </label>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <h2 className="font-heading text-lg font-medium">Payment Method</h2>
                    </div>
                    <div className="space-y-4">
                      <div><label className="text-sm font-medium mb-1 block">Card Number *</label><Input placeholder="1234 5678 9012 3456" /></div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label className="text-sm font-medium mb-1 block">Expiration Date *</label><Input placeholder="MM/YY" /></div>
                        <div><label className="text-sm font-medium mb-1 block">CVV *</label><Input placeholder="123" /></div>
                      </div>
                      <div><label className="text-sm font-medium mb-1 block">Name on Card *</label><Input placeholder="John Smith" /></div>
                    </div>
                    <div className="flex items-center gap-2 mt-6 p-4 bg-secondary rounded-lg">
                      <Shield className="w-5 h-5 text-green-600" />
                      <p className="text-sm text-muted-foreground">Your payment information is encrypted and secure</p>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Check className="w-5 h-5 text-primary" />
                      <h2 className="font-heading text-lg font-medium">Review Your Order</h2>
                    </div>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.product.id} className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                          <div className="w-12 h-12 bg-background rounded-lg flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{item.product.name}</p>
                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      By placing your order, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  {step > 1 ? (
                    <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
                  ) : <div />}
                  <Button
                    onClick={() => step < 3 ? setStep(step + 1) : null}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {step < 3 ? "Continue to " + steps[step].label : "Place Order"}
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-background rounded-xl p-6 sticky top-24">
                <h2 className="font-heading text-lg font-medium mb-6">Order Summary</h2>
                <div className="space-y-3 text-sm max-h-48 overflow-y-auto mb-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <span className="text-muted-foreground truncate max-w-[180px]">
                        {item.product.name} x {item.quantity}
                      </span>
                      <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={`font-medium ${shipping === 0 ? "text-green-600" : ""}`}>
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-heading font-medium text-lg">Total</span>
                      <span className="font-heading font-semibold text-xl">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Checkout;
