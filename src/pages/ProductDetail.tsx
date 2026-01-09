import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { 
  ShoppingCart, Heart, Share2, Check, Truck, Shield, Clock, FileText,
  Minus, Plus, ChevronRight, Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { sampleProducts } from "@/types/store";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = sampleProducts.find((p) => p.id === id) || sampleProducts[0];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const benefits = [
    { icon: Truck, title: "Free Shipping", description: "On orders over $500" },
    { icon: Shield, title: "Quality Guaranteed", description: "FDA approved products" },
    { icon: Clock, title: "Same-Day Shipping", description: "Order by 2PM EST" },
    { icon: FileText, title: "Net Terms Available", description: "For qualified accounts" },
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-background py-4 border-b border-border">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="flex-1 py-8">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center">
                <Package className="w-32 h-32 text-muted-foreground/30" />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm text-primary font-medium mb-2">{product.vendor}</p>
                <h1 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {product.name}
                </h1>
                <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
              </div>

              <div>
                <p className="text-3xl font-heading font-semibold text-primary">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Volume pricing available for orders of 10+ units
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? "bg-green-100 text-green-700" 
                    : "bg-red-100 text-red-700"
                }`}>
                  <Check className="w-4 h-4" />
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
                <span className="text-sm text-muted-foreground">
                  Usually ships within 24 hours
                </span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium mr-2">Quantity:</span>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg gap-2 h-12"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-12 p-0 rounded-lg"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-12 p-0 rounded-lg"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="p-2 bg-secondary rounded-lg">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{benefit.title}</p>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Shipping & Returns
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="py-6">
                <div className="max-w-3xl">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.name} from {product.vendor}. High-quality medical supply for healthcare professionals. 
                    Contact us for more detailed product information.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="py-6">
                <div className="max-w-3xl">
                  <dl className="space-y-4">
                    <div className="flex gap-4">
                      <dt className="w-32 text-muted-foreground">SKU</dt>
                      <dd className="font-medium">{product.sku}</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-32 text-muted-foreground">Vendor</dt>
                      <dd className="font-medium">{product.vendor}</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-32 text-muted-foreground">Category</dt>
                      <dd className="font-medium capitalize">{product.category.replace("-", " ")}</dd>
                    </div>
                  </dl>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="py-6">
                <div className="max-w-3xl space-y-4">
                  <p className="text-muted-foreground">
                    We offer same-day shipping on orders placed before 2PM EST. Free shipping is available on orders over $500.
                  </p>
                  <p className="text-muted-foreground">
                    Returns are accepted within 30 days of purchase. Items must be in original packaging and unused condition.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;
