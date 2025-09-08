import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LanguageSupport from "@/components/LanguageSupport";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LanguageSupport />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
