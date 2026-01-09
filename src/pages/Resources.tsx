import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Video, Download, Shield, Search, ArrowRight, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";
import examRoom from "@/assets/exam-room.jpg";
import diagnosticEquipment from "@/assets/diagnostic-equipment.jpg";
import medicalSupplies from "@/assets/medical-supplies.jpg";

const categories = [
  { icon: FileText, title: "Product Guides", count: 45, description: "Detailed specifications and usage guides for our products", image: diagnosticEquipment },
  { icon: Video, title: "Training Videos", count: 28, description: "Educational videos on product usage and best practices", image: examRoom },
  { icon: Download, title: "Downloadable Forms", count: 12, description: "Order forms, credit applications, and more", image: null },
  { icon: Shield, title: "Compliance & Safety", count: 150, description: "Safety data sheets and compliance documentation", image: medicalSupplies },
];

const articles = [
  { category: "Best Practices", time: "8 min read", title: "Understanding Medical Supply Chain Best Practices", excerpt: "Learn how to optimize your medical supply ordering process and reduce costs while maintaining quality.", date: "Dec 15, 2024", image: examRoom },
  { category: "Compliance", time: "12 min read", title: "New FDA Guidelines for Medical Device Procurement", excerpt: "Stay compliant with the latest FDA regulations affecting medical device purchasing and storage.", date: "Dec 10, 2024", image: diagnosticEquipment },
  { category: "Sustainability", time: "6 min read", title: "Reducing Waste in Healthcare: Sustainable Supply Practices", excerpt: "Discover eco-friendly approaches to medical supply management without compromising patient care.", date: "Dec 5, 2024", image: medicalSupplies },
];

const Resources = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <PageHeader title="Resources & Support" subtitle="Everything you need to make the most of your Hart Medical partnership">
        <div className="relative max-w-xl mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-background/50" />
          <Input placeholder="Search resources, guides, and documentation..." className="pl-12 h-12 bg-background/10 border-background/20 text-background placeholder:text-background/50" />
        </div>
      </PageHeader>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="font-heading text-2xl md:text-3xl font-medium text-center mb-4">Browse by Category</h2>
          <p className="text-muted-foreground text-center mb-12">Find the resources you need organized by topic</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-elevated overflow-hidden group cursor-pointer">
                {cat.image && (
                  <div className="h-32 overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <cat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-lg font-medium">{cat.title}</h3>
                    <span className="text-xs bg-secondary px-2 py-1 rounded-full">{cat.count}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Browse <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-medium">Featured Articles</h2>
              <p className="text-muted-foreground">Latest insights and industry updates</p>
            </div>
            <Link to="/resources/articles" className="text-primary font-medium hover:underline">View All Articles</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.article key={article.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-background rounded-xl overflow-hidden group cursor-pointer shadow-hart-sm hover:shadow-hart-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="bg-secondary px-2 py-1 rounded">{article.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.time}</span>
                  </div>
                  <h3 className="font-heading text-lg font-medium mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{article.date}</span>
                    <span className="text-primary font-medium">Read More</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Resources;
