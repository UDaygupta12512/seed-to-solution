import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-farming.jpg";
import { useTranslation } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-10 bg-gradient-hero text-primary-foreground rounded-full text-sm font-semibold shadow-accent">
            <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3 animate-pulse"></div>
            {t("AI-Powered Agricultural Support for Indian Farmers")}
          </div>
          
          {/* Enhanced heading with better typography */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">{t("Empowering Indian Farmers with")}</span><br />
            <span className="bg-gradient-text bg-clip-text text-transparent animate-pulse">Krishi Jyoti</span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            {t("Get government scheme information, MSP rates, subsidies, climate predictions, disease detection, and voice-based support—all in one comprehensive platform designed for Indian agriculture.")}
          </p>
          
          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
            <Link to="/schemes">
              <Button variant="hero" size="lg" className="text-xl px-10 py-6 shadow-hero hover:shadow-accent transition-all duration-300 hover:scale-105">
                {t("Get Started")} →
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-primary/70 rounded-full border-2 border-background"></div>
              </div>
              <span className="text-sm font-medium">Trusted by 10,000+ farmers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;