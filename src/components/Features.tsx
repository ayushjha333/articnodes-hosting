import { motion } from "framer-motion";
import { BarChart3, Cpu, Package } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

const Features = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-primary blob" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The way game hosting{" "}
            <span className="gradient-text">was meant to be</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Premium hardware, instant deployment, and tools that actually work.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Comparison */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 glow-border hover:glow-box transition-all duration-500 group"
          >
            <BarChart3 className="w-10 h-10 text-primary mb-5" />
            <h3 className="text-xl font-display font-bold mb-3">Better bang for your buck</h3>
            <p className="text-sm text-muted-foreground mb-6">Outperform hosts that charge 3× more.</p>
            <div className="space-y-4">
              {[
                { label: "ArticNodes", value: 95, color: "bg-primary" },
                { label: "Other Hosts", value: 45, color: "bg-muted-foreground/30" },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground/80">{bar.label}</span>
                    <span className="text-muted-foreground">{bar.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${bar.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2 - Info */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 glow-border hover:glow-box transition-all duration-500 group"
          >
            <Cpu className="w-10 h-10 text-primary mb-5" />
            <h3 className="text-xl font-display font-bold mb-3">Where Skill Outshines Specs</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our infrastructure is fine-tuned specifically for Minecraft workloads. Custom JVM flags, optimized tick rates, and intelligent resource allocation ensure your server runs at peak performance — even under heavy load.
            </p>
          </motion.div>

          {/* Card 3 - Modpacks */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 glow-border hover:glow-box transition-all duration-500 group"
          >
            <Package className="w-10 h-10 text-primary mb-5" />
            <h3 className="text-xl font-display font-bold mb-3">Any modpack, anytime</h3>
            <p className="text-sm text-muted-foreground mb-6">One-click install for 500+ modpacks.</p>
            <div className="flex flex-wrap gap-2">
              {["Forge", "Fabric", "Paper", "Spigot", "Bukkit", "Vanilla", "Bedrock"].map((mod) => (
                <span
                  key={mod}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium glass border border-primary/20 text-primary/80 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                >
                  {mod}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
