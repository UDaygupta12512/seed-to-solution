import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-farming.jpg";
import { useTranslation } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-hero opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/5 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-10 bg-gradient-hero text-primary-foreground rounded-full text-sm font-semibold shadow-accent">
            <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3 animate-pulse"></div>
            {t("AI-Powered Agricultural Support for Indian Farmers")}
          </div>
          
          {/* Enhanced heading with improved typography */}
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-center">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                {t("Empowering Indian Farmers with Krishi Jyoti")}
              </span>
            </h1>
          </div>
          
          {/* Enhanced description with better spacing */}
          <p className="text-xl md:text-2xl mb-16 text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light text-center">
            {t("Get government scheme information, MSP rates, subsidies, climate predictions, disease detection, and voice-based support—all in one comprehensive platform designed for Indian agriculture.")}
          </p>
          
          {/* Enhanced CTA section with better visual hierarchy */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-24">
            <Link to="/schemes">
              <Button variant="hero" size="lg" className="text-xl px-12 py-7 shadow-hero hover:shadow-accent transition-all duration-300 hover:scale-105 font-semibold">
                {t("Get Started")} →
              </Button>
            </Link>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-full border-3 border-background shadow-lg"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent/80 rounded-full border-3 border-background shadow-lg"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-primary/70 to-primary/50 rounded-full border-3 border-background shadow-lg"></div>
              </div>
              <span className="text-base font-medium">Trusted by 10,000+ farmers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;