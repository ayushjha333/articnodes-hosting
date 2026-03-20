import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const plans = [
  { name: "GRASS PLAN", cpu: "100%", ram: "2GB", storage: "5GB SSD", price: "₹80" },
  { name: "STONE PLAN", cpu: "200%", ram: "4GB", storage: "10GB SSD", price: "₹160" },
  { name: "IRON PLAN", cpu: "300%", ram: "8GB", storage: "20GB SSD", price: "₹235" },
  { name: "SNOW PLAN", cpu: "400%", ram: "16GB", storage: "40GB SSD", price: "₹335", popular: true },
  { name: "GLASS PLAN", cpu: "500%", ram: "32GB", storage: "50GB SSD", price: "₹735" },
  { name: "DIAMOND PLAN", cpu: "600%", ram: "48GB", storage: "60GB SSD", price: "₹1035" },
  { name: "NETHERITE PLAN", cpu: "800%", ram: "64GB", storage: "80GB SSD", price: "₹1435" },
];

const PremiumPlans = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-glow-blue blob" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary border border-primary/20 mb-4">
          ⚡ Premium Plans
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Premium <span className="gradient-text">Performance</span>
        </h2>
        <p className="text-muted-foreground">Maximum power for serious servers.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {plans.map((plan, i) => (
          <PricingCard key={plan.name} {...plan} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default PremiumPlans;
