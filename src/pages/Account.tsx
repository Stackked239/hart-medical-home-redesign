import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, Heart, FileText, CreditCard, Package, ArrowRight, 
  Settings, Building, MapPin, User, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quickActions = [
  { icon: ShoppingCart, title: "Quick Reorder", description: "Reorder from past orders", href: "/account/orders" },
  { icon: Heart, title: "Shopping Lists", description: "Manage saved lists", href: "/account/lists" },
  { icon: FileText, title: "Request Quote", description: "Get custom pricing", href: "/contact" },
  { icon: CreditCard, title: "Invoices", description: "View & pay invoices", href: "/account/invoices" },
];

const recentOrders = [
  { id: "HM-2026-001234", date: "Jan 5, 2026", items: 3, status: "Shipped", statusColor: "bg-green-100 text-green-700", total: 245.67 },
  { id: "HM-2026-001198", date: "Dec 28, 2025", items: 12, status: "Delivered", statusColor: "bg-blue-100 text-blue-700", total: 1234.50 },
  { id: "HM-2025-001156", date: "Dec 15, 2025", items: 5, status: "Delivered", statusColor: "bg-blue-100 text-blue-700", total: 567.89 },
];

const shoppingLists = [
  { name: "Monthly Supplies", items: 24, updated: "Updated Jan 3, 2026" },
  { name: "Emergency Stock", items: 15, updated: "Updated Dec 20, 2025" },
  { name: "Exam Room Essentials", items: 32, updated: "Updated Dec 10, 2025" },
];

const Account = () => {
  const user = {
    name: "Austin Warren",
    email: "austin@stackked.tech",
    accountType: "Business Account",
    company: "Sample Healthcare Inc.",
    accountStatus: "Active",
    paymentTerms: "Net 30",
    address: {
      label: "Primary Shipping",
      street: "123 Medical Center Dr",
      suite: "Suite 100",
      city: "New York, NY 10001",
    },
  };

  return (
    <main className="min-h-screen bg-secondary flex flex-col">
      <Header />

      {/* Welcome Header */}
      <section className="bg-background py-8 border-b border-border">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-heading text-2xl md:text-3xl font-medium text-foreground italic">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-muted-foreground">
                Manage your account, orders, and preferences
              </p>
            </motion.div>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" className="rounded-lg">
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-lg">
                <Link to="/account/orders">Quick Reorder</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-background pb-8">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-4">
            {quickActions.map((action, i) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={action.href}
                  className="block bg-card rounded-xl p-6 text-center hover:shadow-hart-md transition-shadow border border-border group"
                >
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                    <action.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-medium text-foreground mb-1">{action.title}</h3>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-8">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Orders & Lists */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Orders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <h2 className="font-heading font-medium text-foreground">Recent Orders</h2>
                      <p className="text-xs text-muted-foreground">Your latest order activity</p>
                    </div>
                  </div>
                  <Link to="/account/orders" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
                    View All <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-secondary rounded-lg p-4 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-foreground">{order.id}</p>
                        <p className="text-xs text-muted-foreground">
                          {order.date} • {order.items} items
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${order.statusColor}`}>
                          {order.status}
                        </span>
                        <p className="font-heading font-semibold text-foreground mt-1">
                          ${order.total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Shopping Lists */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <h2 className="font-heading font-medium text-foreground">Shopping Lists</h2>
                      <p className="text-xs text-muted-foreground">Your saved product lists</p>
                    </div>
                  </div>
                  <Link to="/account/lists" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
                    Manage Lists <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {shoppingLists.map((list) => (
                    <div
                      key={list.name}
                      className="bg-secondary rounded-lg p-4 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-foreground">{list.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {list.items} items • {list.updated}
                        </p>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-lg text-xs">
                        Add All to Cart
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Account Info */}
            <div className="space-y-6">
              {/* Account Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-card rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-muted-foreground" />
                  <h2 className="font-heading font-medium text-foreground">Account Information</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Name</p>
                    <p className="font-medium text-foreground">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Account Type</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-secondary rounded text-xs font-medium text-foreground">
                      {user.accountType}
                    </span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6 rounded-lg gap-2">
                  <Settings className="w-4 h-4" />
                  Account Settings
                </Button>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Building className="w-5 h-5 text-muted-foreground" />
                  <h2 className="font-heading font-medium text-foreground">Company</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Company Name</p>
                    <p className="font-medium text-foreground">{user.company}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Account Status</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                      {user.accountStatus}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Payment Terms</p>
                    <p className="font-medium text-foreground">{user.paymentTerms}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6 rounded-lg gap-2">
                  <User className="w-4 h-4" />
                  Manage Company
                </Button>
              </motion.div>

              {/* Addresses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-card rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <h2 className="font-heading font-medium text-foreground">Addresses</h2>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground">{user.address.label}</p>
                    <span className="text-xs bg-background px-2 py-0.5 rounded border border-border">
                      Default
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{user.address.street}</p>
                  <p className="text-sm text-muted-foreground">{user.address.suite}</p>
                  <p className="text-sm text-muted-foreground">{user.address.city}</p>
                </div>
                <Button variant="outline" className="w-full mt-4 rounded-lg">
                  Manage Addresses
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Account;
