import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage, useTranslation } from "@/contexts/LanguageContext";

const LanguageSupport = () => {
  const { toast } = useToast();
  const { currentLanguage, setLanguage } = useLanguage();
  const { t } = useTranslation();
  
  const languages = [
    { name: "English", code: "EN" },
    { name: "हिंदी", code: "HI" },
    { name: "മലയാളം", code: "ML" },
    { name: "తెలుగు", code: "TE" },
    { name: "தமிழ்", code: "TA" },
    { name: "ಕನ್ನಡ", code: "KN" },
    { name: "मराठी", code: "MR" },
    { name: "বাংলা", code: "BN" },
  ];

  const handleLanguageSelect = (language: { name: string; code: string }) => {
    setLanguage(language);
    toast({
      title: "Language Changed",
      description: `Interface language switched to ${language.name}. Voice support is now active in ${language.name}.`,
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-5xl mx-auto bg-gradient-card shadow-feature border-0 backdrop-blur-sm">
          <CardHeader className="text-center py-12">
            <div className="mx-auto w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 shadow-accent">
              <Languages className="h-10 w-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                {t("Multi-Language Support")}
              </span>
            </CardTitle>
            <div className="w-20 h-1 bg-gradient-hero mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("Access farming support in your preferred language for better understanding and communication")}
            </p>
          </CardHeader>
          <CardContent className="pb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {languages.map((language) => (
                <Badge 
                  key={language.code}
                  variant={currentLanguage.code === language.code ? "default" : "outline"}
                  className={`px-6 py-3 text-base font-medium cursor-pointer transition-all duration-300 hover:scale-105 ${
                    currentLanguage.code === language.code 
                      ? "bg-gradient-hero text-primary-foreground border-primary shadow-accent" 
                      : "border-primary/30 hover:bg-gradient-glow hover:border-primary/50 hover:shadow-soft bg-white/80 backdrop-blur-sm"
                  }`}
                  onClick={() => handleLanguageSelect(language)}
                >
                  {language.name}
                </Badge>
              ))}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <p className="text-sm font-medium text-primary">
                  {t("Voice support and text assistance available in all listed languages")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LanguageSupport;