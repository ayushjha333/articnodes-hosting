import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-display font-bold glow-text text-primary">
          ArticNodes
        </a>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
            Home
          </a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
            Shop
          </a>
          <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
            Servers <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
            Policies <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-5 py-2 rounded-lg text-sm font-medium border border-border text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-all">
            Billing
          </button>
          <button className="px-5 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground glow-box hover:glow-box-strong transition-all hover:scale-105">
            Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
