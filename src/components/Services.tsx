import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Eye, Pill, Users, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and preventive care for cardiovascular conditions.",
      features: ["ECG Testing", "Heart Disease Treatment", "Preventive Care"]
    },
    {
      icon: Eye,
      title: "General Medicine",
      description: "Complete primary healthcare services for patients of all ages with personalized treatment plans.",
      features: ["Health Checkups", "Chronic Disease Management", "Preventive Medicine"]
    },
    {
      icon: Pill,
      title: "Specialized Treatment",
      description: "Advanced medical treatments using state-of-the-art technology and evidence-based practices.",
      features: ["Diagnostic Services", "Treatment Planning", "Follow-up Care"]
    },
    {
      icon: Users,
      title: "Family Healthcare",
      description: "Comprehensive healthcare services for the entire family, from pediatrics to geriatrics.",
      features: ["Family Medicine", "Pediatric Care", "Elder Care"]
    },
    {
      icon: Clock,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response and expert critical care.",
      features: ["24/7 Availability", "Emergency Response", "Critical Care"]
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Focus on preventing illness through regular screenings, vaccinations, and health education.",
      features: ["Health Screenings", "Vaccinations", "Health Education"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered with expertise, compassion, and the latest medical technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-500 flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
