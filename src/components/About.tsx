import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Patients Treated"
    },
    {
      icon: Clock,
      number: "24+",
      label: "Years Experience"
    },
    {
      icon: Award,
      number: "5",
      label: "Board Certifications"
    },
    {
      icon: Heart,
      number: "99%",
      label: "Patient Satisfaction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">About Dr. Kiran Kumar Mangalpally</h2>
              <p className="text-xl text-blue-600 font-medium">Board-Certified Interventional Cardiologist</p>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With over 24 years of dedicated service in cardiovascular medicine, Dr. Kiran Kumar Mangalpally 
                is committed to providing exceptional cardiac care that combines clinical expertise with genuine 
                compassion for every patient.
              </p>
              <p>
                Dr. Mangalpally's practice focuses on evidence-based cardiovascular medicine, personalized treatment 
                plans, and building long-term relationships with patients to ensure optimal heart health outcomes and quality of life.
              </p>
              <p>
                He believes in treating not just the cardiac condition, but the whole person, taking into account 
                your unique circumstances, concerns, and cardiovascular health goals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Education & Certifications</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Board-Certified in Internal Medicine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Board-Certified in Cardiovascular Disease</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Board-Certified in Interventional Cardiology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Board-Certified in Nuclear Cardiology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Board-Certified in Echocardiography</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/e11de330-58f7-4de9-93e5-400e2cd99ec9.png" 
                alt="Dr. Kiran Kumar Mangalpally - Interventional Cardiologist"
                className="w-full h-96 object-cover rounded-2xl shadow-lg object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="space-y-3 p-0">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
