import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const domains = [
  { ext: ".online", price: "₹250/year" },
  { ext: ".tech", price: "₹200–₹300/year" },
  { ext: ".site", price: "₹175–₹300/year" },
  { ext: ".store", price: "₹175–₹300/year" },
  { ext: ".fun", price: "₹175–₹300/year" },
  { ext: ".xyz", price: "₹100–₹200/year" },
  { ext: ".org", price: "₹800–₹1200/year" },
  { ext: ".net", price: "₹1000–₹1300/year" },
  { ext: ".com", price: "₹200–₹400/year" },
  { ext: ".ai", price: "₹3000–₹6000+/year" },
  { ext: ".co", price: "₹1000–₹2000+/year" },
];

const DomainSection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary blob" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Register Your <span className="gradient-text">Domain</span>
        </h2>
        <p className="text-muted-foreground">Claim the perfect domain for your brand.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        {domains.map((d, i) => (
          <motion.div
            key={d.ext}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.08, y: -4 }}
            className="glass rounded-xl px-6 py-4 glow-border hover:glow-box-strong transition-all duration-300 cursor-default text-center"
          >
            <span className="text-xl font-display font-bold text-primary">{d.ext}</span>
            <p className="text-xs text-muted-foreground mt-1">{d.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DomainSection;
