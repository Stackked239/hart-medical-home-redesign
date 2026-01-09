import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Grid, List, ShoppingCart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { sampleProducts, categories, vendors, Product } from "@/types/store";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const selectedCategory = searchParams.get("category") || "all";
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = sampleProducts.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (inStockOnly && !product.inStock) return false;
    if (minPrice && product.price < parseFloat(minPrice)) return false;
    if (maxPrice && product.price > parseFloat(maxPrice)) return false;
    return true;
  });

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary py-12 pt-8">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-2">
              Products
            </h1>
            <p className="text-muted-foreground">
              Browse our catalog of 62,077+ medical supplies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-background py-4 border-b border-border">
        <div className="container-wide">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-8">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-heading text-lg font-medium mb-4">Categories</h3>
                  <ul className="space-y-1">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => handleCategoryChange(category.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-xs opacity-70">{category.count.toLocaleString()}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vendors */}
                <div>
                  <h3 className="font-heading text-lg font-medium mb-4">Vendors</h3>
                  <div className="space-y-2">
                    {vendors.map((vendor) => (
                      <label key={vendor.id} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={selectedVendors.includes(vendor.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedVendors([...selectedVendors, vendor.id]);
                            } else {
                              setSelectedVendors(selectedVendors.filter((v) => v !== vendor.id));
                            }
                          }}
                        />
                        <span className="text-sm text-muted-foreground">{vendor.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-heading text-lg font-medium mb-4">Price Range</h3>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="h-9"
                    />
                    <span className="text-muted-foreground">-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="h-9"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    Apply
                  </Button>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="font-heading text-lg font-medium mb-4">Availability</h3>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={inStockOnly}
                      onCheckedChange={(checked) => setInStockOnly(!!checked)}
                    />
                    <span className="text-sm text-muted-foreground">In Stock Only</span>
                  </label>
                </div>

                <Button variant="ghost" size="sm" className="w-full text-primary">
                  Clear All Filters
                </Button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">1-{filteredProducts.length}</span> of{" "}
                  <span className="font-medium text-foreground">62,077</span> products
                </p>
                <div className="flex items-center gap-4">
                  <select className="text-sm border border-border rounded-lg px-3 py-2 bg-background">
                    <option>Name: A to Z</option>
                    <option>Name: Z to A</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${viewMode === "grid" ? "bg-secondary" : "hover:bg-secondary"}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${viewMode === "list" ? "bg-secondary" : "hover:bg-secondary"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4" : "grid-cols-1"}`}>
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} addToCart={addToCart} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const ProductCard = ({ product, index, addToCart }: { product: Product; index: number; addToCart: (p: Product) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card-elevated overflow-hidden group"
    >
      {/* Product Image Placeholder */}
      <div className="aspect-square bg-secondary flex items-center justify-center">
        <Package className="w-16 h-16 text-muted-foreground/30" />
      </div>

      <div className="p-4">
        <p className="text-xs text-primary font-medium mb-1">{product.vendor}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xl font-heading font-semibold text-primary mb-1">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-xs text-muted-foreground mb-4">SKU: {product.sku}</p>
        <Button
          onClick={() => addToCart(product)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default Products;
