import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BudgetPlans from "@/components/BudgetPlans";
import PremiumPlans from "@/components/PremiumPlans";
import VPSSection from "@/components/VPSSection";
import DomainSection from "@/components/DomainSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Features />
    <BudgetPlans />
    <PremiumPlans />
    <VPSSection />
    <DomainSection />
    <Footer />
  </div>
);

export default Index;
