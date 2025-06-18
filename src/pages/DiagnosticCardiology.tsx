import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Activity, Stethoscope, Monitor, MapPin, Phone, FileSearch, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import CommonCTA from "@/components/CommonCTA";
const DiagnosticCardiology = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const echocardiogramInsights = [
    "Heart size and shape",
    "Wall motion and thickness", 
    "Pumping efficiency (ejection fraction)",
    "Valve structure and function",
    "Presence of pericardial fluid",
    "Detection of blood clots or masses",
    "Identification of septal defects (holes between chambers)",
    "Condition of the heart's outer lining"
  ];

  const stressTestMonitoring = [
    "Heart rate",
    "Blood pressure",
    "Respiratory rate", 
    "Electrical activity (via ECG)"
  ];

  const stressTestUses = [
    "Diagnose coronary artery disease",
    "Evaluate the effectiveness of existing treatment plans",
    "Establish a safe level of physical activity",
    "Identify causes of unexplained chest discomfort",
    "Detect exercise-induced arrhythmias",
    "Determine the need for further cardiac imaging"
  ];

  const symptoms = [
    "Chest pain or discomfort",
    "Shortness of breath, especially during activity",
    "Irregular heartbeats or palpitations",
    "Fatigue during exertion",
    "Family history of heart disease",
    "High blood pressure, diabetes, or elevated cholesterol levels"
  ];

  const locations = [
    "Frisco", "Carrollton", "Allen", "McKinney", "Princeton", "Wylie",
    "The Colony", "Anna", "Celina", "Addison", "Lewisville", "Grapevine", "Flower Mound"
  ];

  return (
    <>
      <Helmet>
        <title>Diagnostic Cardiology | Dr. Kiran Mangalpally | Serving Frisco, Carrollton, McKinney & Nearby Areas</title>
        <meta 
          name="description" 
          content="Diagnostic cardiology services by Dr. Kiran Mangalpally, Interventional Cardiologist. Serving Frisco, Carrollton, McKinney, and nearby areas. Schedule a diagnostic evaluation today." 
        />
        <link rel="canonical" href="/diagnostic-cardiology" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-16 bg-gradient-to-b from-blue-50 via-white to-backround py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <FileSearch className="h-6 w-6" />
                <span className="text-lg font-medium">Diagnostic Cardiology Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Diagnostic Cardiology Services
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

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Dr. Kiran Mangalpally provides comprehensive diagnostic cardiology services at his clinic, supporting patients with timely evaluation and clinical decision-making. If you experience symptoms such as chest discomfort, shortness of breath, or irregular heartbeat, these tests provide essential data for accurate diagnosis and treatment planning.
              </p>

              <Button 
                onClick={() => window.open('https://practice.kareo.com/pulsecarehv', '_blank', 'noopener,noreferrer')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Schedule a Diagnostic Evaluation
              </Button>
            </div>
          </div>
        </section>

        {/* Understanding Diagnostic Cardiology Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                <Activity className="h-6 w-6" />
                <span className="text-lg font-medium">Understanding the Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Understanding Diagnostic Cardiology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Non-invasive and minimally invasive procedures to evaluate heart function
              </p>
            </div>

            <div className="grid lg:grid-cols-1 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Diagnostic cardiology involves the use of non-invasive and minimally invasive procedures to evaluate heart function and detect early signs of cardiovascular disease. If you experience symptoms such as chest discomfort, shortness of breath, or irregular heartbeat, these tests provide essential data for accurate diagnosis and treatment planning.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dr. Kiran Mangalpally provides comprehensive diagnostic cardiology services at his clinic, supporting patients with timely evaluation and clinical decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Echocardiogram Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Echocardiogram: What It Shows
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed imaging of heart structure and function using ultrasound technology
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Echocardiography uses high-frequency sound waves (ultrasound) to generate detailed images of the heart's chambers, valves, and surrounding structures. It provides information critical to assessing the structural and functional health of the heart.
                </p>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Key Diagnostic Insights</CardTitle>
                  <CardDescription>What an echocardiogram can reveal</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {echocardiogramInsights.map((insight, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Types of Echocardiograms */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Transthoracic Echocardiogram (TTE)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The most common and non-invasive method. A transducer is placed on the chest to record images through the chest wall using ultrasound.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Transesophageal Echocardiogram (TEE)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A flexible probe with a transducer is inserted through the esophagus for enhanced imaging of the heart's posterior structures, upper chambers, and valves.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Doppler Echocardiogram</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This variation assesses the direction and speed of blood flow through the heart and its valves, helping to identify issues such as regurgitation or stenosis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cardiac Stress Testing Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                <Zap className="h-6 w-6" />
                <span className="text-lg font-medium">Advanced Testing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cardiac Stress Testing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Evaluating heart function under increased workload
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  A cardiac stress test evaluates how well the heart functions when it is required to work harder, either through exercise or pharmacological agents. It helps assess the heart's ability to respond to physical stress and uncovers issues not visible under resting conditions.
                </p>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Parameters Monitored</CardTitle>
                  <CardDescription>What we track during the test</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {stressTestMonitoring.map((parameter, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Monitor className="h-4 w-4 text-blue-500" />
                        <span className="text-gray-700">{parameter}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600">Common Uses of Stress Testing</CardTitle>
                <CardDescription>How stress testing helps in diagnosis and treatment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {stressTestUses.map((use, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* When to Consider Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-red-600 mb-4">
                <Stethoscope className="h-6 w-6" />
                <span className="text-lg font-medium">When to Seek Evaluation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                When to Consider Diagnostic Cardiology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Signs and symptoms that warrant cardiac evaluation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-red-600">Consult Dr. Mangalpally if you experience:</CardTitle>
                  <CardDescription>Symptoms that may indicate cardiovascular concerns</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Early detection and diagnosis are crucial for effective cardiovascular treatment. Dr. Mangalpally uses state-of-the-art diagnostic equipment to provide accurate assessments and develop personalized treatment plans.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  If you have risk factors for heart disease or are experiencing concerning symptoms, diagnostic testing can provide peace of mind and guide appropriate treatment decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CommonCTA
              serviceName="Diagnostic Cardiology Services"
              subtitle="If you're experiencing symptoms of cardiovascular concerns, it's essential to seek professional care."
              description="Dr. Kiran Mangalpally offers specialized diagnostic cardiology services in Frisco, Carrollton, Allen, McKinney, and surrounding cities. Don't wait to address any heart concerns — schedule an appointment with Dr. Mangalpally today."
            />
          </div>
        </section>

        <ServicesOverview />
        <Footer />
      </div>
    </>
  );
};

export default DiagnosticCardiology; 