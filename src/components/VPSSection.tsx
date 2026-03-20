import { motion } from "framer-motion";
import { Server } from "lucide-react";

const plans = [
  { name: "Starter Platinum", cpu: "2 vCore", ram: "8GB", storage: "30GB SSD", price: "₹600" },
  { name: "Bronze Platinum", cpu: "3 vCore", ram: "12GB", storage: "60GB NVMe", price: "₹750" },
  { name: "Silver Lite", cpu: "4 vCore", ram: "16GB", storage: "75GB NVMe", price: "₹900" },
  { name: "Silver Pro", cpu: "4–6 vCore", ram: "20GB", storage: "85GB NVMe", price: "₹1100" },
  { name: "Gold Lite", cpu: "6 vCore", ram: "24GB", storage: "100GB NVMe", price: "₹1300" },
  { name: "Gold Pro", cpu: "6–8 vCore", ram: "32GB", storage: "120GB NVMe", price: "₹1500" },
  { name: "Diamond Lite", cpu: "8 vCore", ram: "40GB", storage: "150GB NVMe", price: "₹1800" },
  { name: "Diamond Pro", cpu: "8–10 vCore", ram: "48GB", storage: "190GB NVMe", price: "₹2000" },
  { name: "Platinum Base", cpu: "10 vCore", ram: "56GB", storage: "200GB NVMe", price: "₹2200" },
  { name: "Platinum Pro", cpu: "12 vCore", ram: "64GB", storage: "220GB NVMe", price: "₹2500" },
  { name: "Platinum Ultra", cpu: "14 vCore", ram: "72GB", storage: "260GB NVMe", price: "₹2800" },
  { name: "Platinum Extreme", cpu: "16 vCore", ram: "96GB", storage: "300GB NVMe", price: "₹3000" },
];

const VPSSection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-glow-purple blob" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-glow-purple border border-glow-purple/20 mb-4">
          🟣 VPS Hosting
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Virtual Private <span className="gradient-text">Servers</span>
        </h2>
        <p className="text-muted-foreground">Dedicated resources for maximum control.</p>
      </motion.div>

      <div className="space-y-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{ scale: 1.01, x: 4 }}
            className="glass rounded-xl px-6 py-4 glow-border hover:glow-box transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Server className="w-5 h-5 text-primary shrink-0" />
              <h3 className="font-display font-bold text-foreground">{plan.name}</h3>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <span className="text-muted-foreground">CPU: <span className="text-foreground/90 font-medium">{plan.cpu}</span></span>
              <span className="text-muted-foreground">RAM: <span className="text-foreground/90 font-medium">{plan.ram}</span></span>
              <span className="text-muted-foreground">Storage: <span className="text-foreground/90 font-medium">{plan.storage}</span></span>
              <span className="text-2xl font-display font-bold gradient-text">{plan.price}</span>
              <span className="text-xs text-muted-foreground">/mo</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VPSSection;
