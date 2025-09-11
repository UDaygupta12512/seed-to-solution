import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const Climate = () => {
  const { t } = useTranslation();
  const weatherData = {
    current: {
      temperature: "28°C",
      humidity: "65%",
      windSpeed: "12 km/h",
      condition: "Partly Cloudy"
    },
    forecast: [
      { day: "Today", temp: "28°C - 35°C", condition: "Partly Cloudy", rain: "20%" },
      { day: "Tomorrow", temp: "26°C - 33°C", condition: "Cloudy", rain: "40%" },
      { day: "Day 3", temp: "24°C - 30°C", condition: "Rain", rain: "80%" },
      { day: "Day 4", temp: "25°C - 31°C", condition: "Partly Cloudy", rain: "30%" },
      { day: "Day 5", temp: "27°C - 34°C", condition: "Sunny", rain: "10%" },
      { day: "Day 6", temp: "29°C - 36°C", condition: "Sunny", rain: "5%" },
      { day: "Day 7", temp: "28°C - 35°C", condition: "Partly Cloudy", rain: "25%" }
    ]
  };

  const recommendations = [
    {
      title: "Irrigation Planning",
      description: "Based on 40% rain chance tomorrow, reduce irrigation by 30%",
      priority: "High",
      icon: Droplets
    },
    {
      title: "Crop Protection",
      description: "Expected rain on Day 3. Ensure proper drainage for your crops",
      priority: "Medium",
      icon: CloudRain
    },
    {
      title: "Harvest Timing",
      description: "Sunny conditions on Days 5-6 ideal for harvesting wheat crops",
      priority: "High",
      icon: Sun
    },
    {
      title: "Pest Management",
      description: "Humid conditions may increase pest activity. Monitor closely",
      priority: "Medium",
      icon: Wind
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Climate Predictions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get AI-powered weather forecasts and climate insights to plan your crops effectively 
              for better yields and optimal farming decisions.
            </p>
          </div>

          {/* Current Weather */}
          <Card className="max-w-4xl mx-auto mb-12 bg-gradient-card shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                <Cloud className="h-8 w-8" />
                Current Weather Conditions
              </CardTitle>
              <CardDescription>Real-time weather data for your location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <Thermometer className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-primary">{weatherData.current.temperature}</div>
                  <div className="text-sm text-muted-foreground">Temperature</div>
                </div>
                <div className="space-y-2">
                  <Droplets className="h-8 w-8 text-sky-blue mx-auto" />
                  <div className="text-2xl font-bold text-primary">{weatherData.current.humidity}</div>
                  <div className="text-sm text-muted-foreground">Humidity</div>
                </div>
                <div className="space-y-2">
                  <Wind className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-primary">{weatherData.current.windSpeed}</div>
                  <div className="text-sm text-muted-foreground">Wind Speed</div>
                </div>
                <div className="space-y-2">
                  <Cloud className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-lg font-bold text-primary">{weatherData.current.condition}</div>
                  <div className="text-sm text-muted-foreground">Condition</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 7-Day Forecast */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">7-Day Forecast</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {weatherData.forecast.map((day, index) => (
                <Card key={index} className="text-center bg-gradient-card hover:shadow-card transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary mb-2">{day.day}</div>
                    <div className="text-lg font-bold text-primary mb-1">{day.temp}</div>
                    <div className="text-sm text-muted-foreground mb-2">{day.condition}</div>
                    <div className="text-sm text-sky-blue font-medium">Rain: {day.rain}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">AI-Powered Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => (
                <Card key={index} className="bg-gradient-card hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                          <rec.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg text-primary">{rec.title}</CardTitle>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        rec.priority === 'High' ? 'bg-harvest-orange/20 text-harvest-orange' : 'bg-primary/20 text-primary'
                      }`}>
                        {rec.priority}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{rec.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Stay Updated</CardTitle>
                <CardDescription>
                  Get personalized weather alerts and farming recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    Enable Notifications
                  </Button>
                  <Button variant="outline" size="lg">
                    Download Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Climate;