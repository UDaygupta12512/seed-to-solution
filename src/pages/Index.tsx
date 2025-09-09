import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LanguageSupport from "@/components/LanguageSupport";
import Footer from "@/components/Footer";
import { useTranslation } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="about" className="py-20 bg-gradient-feature relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-hero"></div>
          <div className="absolute top-10 right-20 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-text bg-clip-text text-transparent">{t("About Krishi Jyoti")}</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                {t("Krishi Jyoti is a comprehensive AI-powered platform designed specifically for Indian farmers, providing access to government schemes, market intelligence, and modern farming solutions.")}
              </p>
            </div>
          </div>
        </section>
        <LanguageSupport />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
