import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "default" | "hero" | "agriculture" | "outline";
  className?: string;
  onClick?: () => void;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  buttonVariant = "default",
  className = "",
  onClick
}: FeatureCardProps) => {
  return (
    <Card className={`group hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50 ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Button variant={buttonVariant} className="w-full" onClick={onClick}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;