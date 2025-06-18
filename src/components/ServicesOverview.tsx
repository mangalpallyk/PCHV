import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Activity, Stethoscope, CircuitBoard, FileSearch } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      title: "Diagnostic Cardiology",
      description: "Non-invasive cardiac testing and evaluation services",
      icon: FileSearch,
      link: "/diagnostic-cardiology"
    },
    {
      title: "Coronary Artery Disease",
      description: "Comprehensive CAD diagnosis and treatment",
      icon: Heart,
      link: "/coronary-artery-disease-treatment"
    },
    {
      title: "Hypertension",
      description: "Comprehensive blood pressure management and treatment",
      icon: Activity,
      link: "/hypertension-treatment"
    },
    {
      title: "Arrhythmia",
      description: "Heart rhythm disorder diagnosis and treatment",
      icon: Stethoscope,
      link: "/arrhythmia-treatment"
    },
    {
      title: "Heart Failure Management",
      description: "Comprehensive care for heart failure patients",
      icon: CircuitBoard,
      link: "/heart-failure-management"
    },
    {
      title: "Vascular Disease",
      description: "Peripheral artery disease diagnosis and treatment",
      icon: CircuitBoard,
      link: "/vascular-disease-treatment"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cardiac care services provided by Dr. Kiran Kumar Mangalpally
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white flex flex-col h-full"
            >
              <CardHeader className="text-center pb-4 flex-shrink-0">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors min-h-[3rem] flex items-center justify-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 flex-1 flex flex-col justify-between px-6 pb-6">
                <p className="text-gray-600 leading-relaxed text-sm flex-1 flex items-center justify-center min-h-[3rem]">
                  {service.description}
                </p>
                <Button 
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors mt-4"
                >
                  <Link 
                    to={service.link}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    more info →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
