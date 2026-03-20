import { motion } from "framer-motion";

interface PricingCardProps {
  name: string;
  cpu: string;
  ram: string;
  storage: string;
  price: string;
  popular?: boolean;
  index: number;
}

const PricingCard = ({ name, cpu, ram, storage, price, popular, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative glass rounded-2xl p-6 transition-all duration-300 hover:glow-box-strong group ${
        popular ? "border-primary/50 glow-box" : "glow-border"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
          Most Popular
        </div>
      )}
      <h3 className="font-display font-bold text-lg mb-4 text-foreground group-hover:text-primary transition-colors">
        {name}
      </h3>
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">CPU</span>
          <span className="text-foreground/90 font-medium">{cpu}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">RAM</span>
          <span className="text-foreground/90 font-medium">{ram}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Storage</span>
          <span className="text-foreground/90 font-medium">{storage}</span>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <span className="text-3xl font-display font-bold gradient-text">{price}</span>
        <span className="text-muted-foreground text-sm">/mo</span>
      </div>
      <button className="w-full mt-4 py-2.5 rounded-lg text-sm font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
        Order Now
      </button>
    </motion.div>
  );
};

export default PricingCard;
