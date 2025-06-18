import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, AlertTriangle, Stethoscope, MapPin, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import CommonCTA from "@/components/CommonCTA";

const Hypertension = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const riskFactors = [
    "High salt intake",
    "Low potassium levels in the diet", 
    "Sedentary lifestyle",
    "Being overweight",
    "Ongoing stress",
    "Smoking",
    "Excessive alcohol use"
  ];

  const complications = [
    "Heart attack",
    "Stroke", 
    "Kidney disease",
    "Vision problems",
    "Chest pain",
    "Vascular issues",
    "Peripheral artery disease"
  ];

  const medications = [
    "Diuretics",
    "Beta blockers",
    "ACE inhibitors", 
    "Calcium channel blockers"
  ];

  const locations = [
    "Frisco", "Carrollton", "Allen", "McKinney", "Princeton", "Wylie",
    "The Colony", "Anna", "Celina", "Addison", "Lewisville", "Grapevine", "Flower Mound"
  ];

  return (
    <>
      <Helmet>
        <title>Hypertension Treatment by Dr. Kiran Mangalpally | Interventional Cardiologist in Frisco & Surrounding Areas</title>
        <meta 
          name="description" 
          content="Learn how Dr. Kiran Mangalpally, an Interventional Cardiologist serving Frisco, Carrollton, Allen, McKinney, and nearby cities, helps patients manage and treat hypertension. Schedule a checkup today." 
        />
        <link rel="canonical" href="/hypertension-treatment" />
      </Helmet>

      <div className="min-h-screen bg-background">
      <Header />
        
        {/* Hero Section */}
        <section className="pt-16 bg-gradient-to-b from-blue-50 via-white to-backround py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-medium">Hypertension Treatment and Management</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Hypertension Treatment
              </h1>
              
              <p className="text-xl text-blue-600 font-medium">
                Dr. Kiran Mangalpally - Interventional Cardiologist
              </p>

              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-lg">
                  Serving {locations.slice(0, 4).join(", ")} and surrounding areas
                </span>
              </div>

              {/* Image Section */}
              <div className="w-full mb-12">
                <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
                  <img 
                    src="/lovable-uploads/hypertension.jpg" 
                    alt="Hypertension Blood Pressure Monitoring"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </div>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Many adults live with high blood pressure and may not know it. Hypertension often does not cause symptoms, 
                which makes regular heart checkups important. Dr. Kiran Mangalpally recommends routine monitoring and early 
                screening to help prevent long-term complications.
              </p>

              

              <Button 
                onClick={() => window.open('https://practice.kareo.com/pulsecarehv', '_blank', 'noopener,noreferrer')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Schedule a Heart Checkup
              </Button>
            </div>
          </div>
        </section>

        {/* What Makes Hypertension Risky Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-red-600 mb-4">
                <AlertTriangle className="h-6 w-6" />
                <span className="text-lg font-medium">Understanding the Risks</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes Hypertension Risky?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the Effects on the Heart and Body
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Blood pressure refers to the force of blood pushing through your blood vessels as your heart pumps. 
                  Several factors impact this force — including heart rate, blood volume, and vessel resistance. Over time, 
                  elevated pressure can damage vessel walls and lead to cholesterol buildup.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This buildup can narrow your arteries and reduce blood flow, increasing the risk of serious health complications.
                </p>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-red-600">Potential Complications</CardTitle>
                  <CardDescription>Long-term risks of untreated hypertension</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {complications.map((complication, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{complication}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk Factors Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Increases the Risk of Hypertension?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common Factors That Can Be Managed
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Manageable Risk Factors</CardTitle>
                  <CardDescription>Factors within your control</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 max-h-80 overflow-y-auto">
                    {riskFactors.map((factor, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  While genetics play a role in high blood pressure, many contributing factors are related to daily habits 
                  and overall health. The good news is that most of these factors can be managed through lifestyle changes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Hypertension may also be linked to other health conditions such as sleep apnea or thyroid disorders. 
                  In most cases, however, it develops gradually due to lifestyle and environmental factors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Approach Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                <Stethoscope className="h-6 w-6" />
                <span className="text-lg font-medium">Professional Treatment</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Dr. Kiran Mangalpally Treats Hypertension
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A Step-by-Step Approach for Lasting Results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Lifestyle Modifications</CardTitle>
                  <CardDescription>First-line treatment approach</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Reducing salt in your meals</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Increasing physical activity</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Following a heart-healthy eating plan</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Losing weight if needed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Medication Options</CardTitle>
                  <CardDescription>When lifestyle changes need additional support</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {medications.map((medication, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{medication}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-600 mb-6">
                Dr. Kiran Mangalpally uses a personalized treatment plan that includes lifestyle changes, medication, 
                and attention to any underlying health concerns. The goal is to bring blood pressure levels to a safe 
                range and maintain long-term heart health.
              </p>
              <p className="text-md text-gray-500">
                Each treatment plan is designed based on your health history and response to changes.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CommonCTA 
              serviceName="Hypertension Treatment"
              subtitle="If you haven't had your blood pressure checked recently, or if you're concerned about managing it, schedule a visit with Dr. Kiran Mangalpally."
              description="Take control of your heart health with comprehensive hypertension management. Dr. Mangalpally provides expert cardiovascular care with personalized treatment plans."
            />
          </div>
        </section>

        {/* Services Overview Section */}
        <ServicesOverview />

        <Footer />
      </div>
    </>
  );
};

export default Hypertension;
