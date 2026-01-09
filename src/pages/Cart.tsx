import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, subtotal, itemCount } = useCart();

  const shipping = subtotal >= 500 ? 0 : 15.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <section className="flex-1 py-20">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-md mx-auto"
            >
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-heading text-2xl font-medium text-foreground mb-4">
                Your cart is empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-lg gap-2">
                <Link to="/products">
                  Browse Products
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="flex-1 py-8">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-heading text-2xl md:text-3xl font-medium text-foreground">
                Shopping Cart ({itemCount} items)
              </h1>
              <Link
                to="/products"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-card rounded-xl p-4 flex gap-4"
                  >
                    <div className="w-20 h-20 bg-secondary rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-primary font-medium">{item.product.vendor}</p>
                      <Link
                        to={`/products/${item.product.id}`}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1">SKU: {item.product.sku}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <p className="font-heading font-semibold text-lg text-foreground">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-secondary"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-secondary"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="w-8 h-8 rounded flex items-center justify-center text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-card rounded-xl p-6 sticky top-24">
                  <h2 className="font-heading text-lg font-medium mb-6">Order Summary</h2>
                  <div className="space-y-3 text-sm">
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
                  <Button
                    asChild
                    className="w-full mt-6 bg-primary hover:bg-primary/90 rounded-lg h-12"
                  >
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </Button>
                  {subtotal < 500 && (
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Add ${(500 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Cart;
