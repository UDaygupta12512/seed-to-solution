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
        <section id="about" className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t("About Krishi Jyoti")}</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t("Krishi Jyoti is a comprehensive AI-powered platform designed specifically for Indian farmers, providing access to government schemes, market intelligence, and modern farming solutions.")}
            </p>
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
