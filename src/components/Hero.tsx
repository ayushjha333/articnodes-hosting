import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blob" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-glow-blue blob" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-glow-purple blob" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trustpilot badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 glow-border"
            >
              <span className="text-xs font-semibold text-primary">EXCELLENT</span>
              <span className="font-bold text-sm text-foreground">5.0/5</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">15+ Reviews Trustpilot</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Host & Manage{" "}
              <span className="gradient-text">Minecraft</span>{" "}
              Servers
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Deploy your Minecraft server in seconds with premium hardware, DDoS protection, and an intuitive control panel. Built for performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-lg glass border border-border bg-card/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:glow-border transition-all"
              />
              <button className="px-8 py-3.5 rounded-lg font-semibold bg-primary text-primary-foreground glow-box hover:glow-box-strong transition-all hover:scale-105 whitespace-nowrap">
                Get Started
              </button>
            </div>

            <p className="text-xs text-muted-foreground">
              Get started for free, no credit card required
            </p>
          </motion.div>

          {/* Right - Floating blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            {/* Minecraft-inspired floating cubes */}
            <div className="float-animation absolute top-10 right-20">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-emerald-700/20 border border-emerald-500/30 backdrop-blur-sm shadow-lg shadow-emerald-500/10" />
            </div>
            <div className="float-animation-delayed absolute top-32 left-10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-glow-blue/20 border border-primary/30 backdrop-blur-sm shadow-lg shadow-primary/10" />
            </div>
            <div className="float-animation-slow absolute bottom-20 right-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/30 to-amber-700/20 border border-amber-500/30 backdrop-blur-sm shadow-lg shadow-amber-500/10" />
            </div>
            <div className="float-animation absolute bottom-40 left-20">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-glow-purple/30 to-glow-blue/20 border border-glow-purple/30 backdrop-blur-sm shadow-lg shadow-glow-purple/10" />
            </div>
            <div className="float-animation-delayed absolute top-1/2 right-1/3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400/30 to-primary/20 border border-sky-400/30 backdrop-blur-sm shadow-lg shadow-sky-400/10" />
            </div>

            {/* Update banner card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 left-0 glass rounded-xl px-5 py-4 glow-border max-w-[260px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-primary">Latest Update</span>
              </div>
              <p className="text-xs text-muted-foreground">Panel v3.2 released — faster deploys, new modpack support</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
