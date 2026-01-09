import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <section className="flex-1 py-20 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="font-heading text-2xl font-medium text-foreground mb-4">Sign In Required</h1>
          <p className="text-muted-foreground mb-8">Please sign in to access your account dashboard.</p>
          <Button asChild className="bg-primary hover:bg-primary/90 rounded-lg">
            <Link to="/login">Sign In</Link>
          </Button>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
};

export default Login;
