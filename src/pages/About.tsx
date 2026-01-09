import { motion } from "framer-motion";
import { Target, Heart, Users, Handshake, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";
import teamMeeting from "@/assets/team-meeting.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const stats = [
  { value: "35+", label: "Years of Experience" },
  { value: "60K+", label: "Products Available" },
  { value: "10K+", label: "Happy Customers" },
  { value: "99%", label: "Order Accuracy" },
];

const values = [
  { icon: Heart, title: "Customer First", description: "Every decision we make starts with how it will benefit our customers and their patients." },
  { icon: Award, title: "Quality Assurance", description: "We partner only with trusted manufacturers and rigorously verify every product we sell." },
  { icon: Handshake, title: "Integrity", description: "Honest pricing, transparent policies, and doing what's right—even when no one is watching." },
  { icon: Users, title: "Partnership", description: "We view our customers as partners, working together to improve healthcare delivery." },
];

const timeline = [
  { year: "1985", title: "Founded", description: "Hart Medical was established as a small family business" },
  { year: "1995", title: "Expansion", description: "Opened our first distribution center" },
  { year: "2005", title: "Digital Growth", description: "Launched our online ordering platform" },
  { year: "2015", title: "National Reach", description: "Expanded to serve all 50 states" },
  { year: "2024", title: "60K+ Products", description: "Reached milestone of 60,000+ products" },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <PageHeader 
        title="About Hart Medical" 
        subtitle="For over 35 years, Hart Medical has been a trusted partner to healthcare providers across the nation. As a family-owned business, we understand that behind every order is a patient who deserves the best care possible."
      />

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 text-primary mb-4">
                <Target className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
                Empowering Healthcare Through Reliable Supply
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our mission is simple: to provide healthcare providers with the essential supplies they need, when they need them, at fair prices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every day, we work to simplify the procurement process for our customers, allowing them to focus on what matters most—caring for their patients.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-secondary rounded-xl p-6">
                  <p className="text-3xl font-heading font-semibold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-0">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img 
              src={teamMeeting} 
              alt="Hart Medical team collaborating in a modern healthcare office" 
              className="w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-4">Our Core Values</h2>
          <p className="text-muted-foreground mb-12">These principles guide everything we do at Hart Medical</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-background rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-4 text-center">Our Journey</h2>
          <p className="text-muted-foreground text-center mb-12">From a small family business to a nationwide medical supply partner</p>
          <div className="flex flex-wrap justify-center gap-4">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 w-full sm:w-48 text-center shadow-hart-sm">
                <p className="text-2xl font-heading font-semibold text-primary mb-1">{item.year}</p>
                <p className="font-medium text-foreground mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Quote Section */}
      <section className="py-20 bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img 
                src={doctorPortrait} 
                alt="Healthcare professional" 
                className="w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <blockquote className="text-2xl font-heading text-foreground italic mb-6">
                "Hart Medical has been our trusted supplier for over 10 years. Their reliability and customer service are unmatched in the industry."
              </blockquote>
              <p className="font-medium text-foreground">Dr. Sarah Mitchell</p>
              <p className="text-sm text-muted-foreground">Chief Medical Officer, Regional Health Partners</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
