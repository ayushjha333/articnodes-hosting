import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const plans = [
  { name: "GRASS PLAN", cpu: "100%", ram: "2GB", storage: "5GB SSD", price: "₹40" },
  { name: "STONE PLAN", cpu: "150%", ram: "3GB", storage: "8GB SSD", price: "₹60" },
  { name: "IRON PLAN", cpu: "180%", ram: "4GB", storage: "10GB SSD", price: "₹95" },
  { name: "SNOW PLAN", cpu: "250%", ram: "10GB", storage: "28GB SSD", price: "₹195" },
  { name: "GLASS PLAN", cpu: "400%", ram: "25GB", storage: "30GB SSD", price: "₹375" },
  { name: "DIAMOND PLAN", cpu: "500%", ram: "40GB", storage: "50GB SSD", price: "₹540" },
  { name: "NETHERITE PLAN", cpu: "800%", ram: "55GB", storage: "75GB SSD", price: "₹670" },
];

const BudgetPlans = () => (
  <section id="pricing" className="relative py-32 overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500 blob" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-emerald-400 border border-emerald-400/20 mb-4">
          💰 Budget Plans
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Affordable <span className="gradient-text">Minecraft Hosting</span>
        </h2>
        <p className="text-muted-foreground">Premium quality at budget-friendly prices.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {plans.map((plan, i) => (
          <PricingCard key={plan.name} {...plan} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default BudgetPlans;
