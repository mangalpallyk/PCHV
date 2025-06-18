import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Activity, Stethoscope, Monitor, MapPin, AlertTriangle, Shield, Zap, CircuitBoard } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import CommonCTA from "@/components/CommonCTA";

const CoronaryArteryDisease = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const symptoms = [
    "Chest pain or discomfort (stable angina)",
    "Shortness of breath during physical activity",
    "Fatigue or weakness",
    "Heart attack as a first sign in some cases"
  ];

  const riskFactors = [
    "Age (45+ for men, 55+ for women)",
    "Family history of heart disease",
    "High blood pressure",
    "High LDL cholesterol, low HDL cholesterol",
    "Diabetes",
    "Smoking or tobacco use",
    "Poor diet and lack of physical activity",
    "Obesity or BMI over 25",
    "Sleep disorders such as sleep apnea",
    "Chronic conditions like kidney disease or autoimmune diseases"
  ];

  const diagnosticTests = [
    "Electrocardiogram (EKG/ECG)",
    "Echocardiogram",
    "Cardiac catheterization",
    "CT coronary angiogram",
    "Heart MRI",
    "Coronary calcium score",
  ];

  const lifestyleChanges = [
    "Stop smoking and avoid tobacco",
    "Follow a heart-healthy diet (e.g., Mediterranean diet)",
    "Exercise regularly",
    "Limit alcohol intake",
    "Manage stress and get adequate sleep"
  ];

  const medications = [
    "Blood pressure-lowering drugs",
    "Cholesterol-lowering medications",
    "Anti-anginal drugs such as nitroglycerin",
    "Blood thinners to prevent clot formation"
  ];

  const locations = [
    "Addison", "Allen", "Bartonville", "Carrollton", "Coppell", "Copper Canyon", "Corinth",
    "Dallas", "Double Oak", "Farmers Branch", "Flower Mound", "Frisco", "Grapevine", "Hackberry",
    "Hebron", "Hickory Creek", "Highland Park", "Highland Village", "Irving", "Krugerville",
    "Lake Dallas", "Lewisville", "Little Elm", "Lucas", "McKinney", "Plano", "Prosper",
    "Richardson", "Roanoke", "Sachse", "The Colony", "University Park", "Wylie"
  ];

  return (
    <>
      <Helmet>
        <title>Coronary Artery Disease: Causes, Symptoms, Diagnosis, and Treatments | Dr. Kiran Mangalpally</title>
        <meta 
          name="description" 
          content="Learn about coronary artery disease, its symptoms, causes, diagnosis, and treatments. Dr. Kiran Mangalpally, Interventional Cardiologist, provides expert care in Frisco, Carrollton, Allen, McKinney, and nearby areas." 
        />
        <link rel="canonical" href="/coronary-artery-disease-treatment-frisco-carrollton" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-16 bg-gradient-to-b from-blue-50 via-white to-backround py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-medium">Coronary Artery Disease Treatment</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Coronary Artery Disease Treatment
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
                    src="/lovable-uploads/coronary-artery-disease.jpg" 
                    alt="Coronary Artery Disease Illustration"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </div>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Coronary artery disease (CAD) occurs when the arteries that supply blood to the heart muscle become narrowed or blocked due to plaque buildup. This restricts the flow of oxygen-rich blood to the heart, which can lead to serious health issues such as chest pain, heart attack, or heart failure.
              </p>

             

              <Button 
                onClick={() => window.open('https://practice.kareo.com/pulsecarehv', '_blank', 'noopener,noreferrer')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* What is CAD Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                <Activity className="h-6 w-6" />
                <span className="text-lg font-medium">Understanding the Condition</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Coronary Artery Disease?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding how CAD affects your heart and overall health
              </p>
            </div>

            <div className="grid lg:grid-cols-1 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Coronary artery disease (CAD) occurs when the arteries that supply blood to the heart muscle become narrowed or blocked due to plaque buildup. This restricts the flow of oxygen-rich blood to the heart, which can lead to serious health issues such as chest pain, heart attack, or heart failure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of CAD Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Types of Coronary Artery Disease
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding different forms of CAD and their characteristics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Stable Ischemic Heart Disease</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    A chronic form that develops gradually. It causes reduced blood flow to the heart over time.
                  </p>
                  <p className="text-gray-600">
                    Symptoms may occur during physical exertion or stress.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Acute Coronary Syndrome</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    A sudden and severe form of CAD. Plaque rupture leads to a blood clot that blocks the artery.
                  </p>
                  <p className="text-gray-600">
                    This often causes a heart attack and requires emergency treatment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Symptoms & Risk Factors Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                <AlertTriangle className="h-6 w-6" />
                <span className="text-lg font-medium">Recognition & Prevention</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Symptoms and Risk Factors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Early recognition and understanding risk factors for better prevention
              </p>
            </div>

            {/* Symptoms Section */}
            <div className="mb-16">
              <Card className="shadow-xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-blue-600 mb-2">Symptoms of Coronary Artery Disease</CardTitle>
                  <CardDescription className="text-lg">
                    Many individuals may not show symptoms until the condition has advanced. Common signs include:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg shadow-md">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                        <span className="text-gray-800 font-medium">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Risk Factors Section */}
            <div>
              <Card className="shadow-xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-blue-600 mb-2">Causes and Risk Factors</CardTitle>
                  <CardDescription className="text-lg">
                    CAD is caused by atherosclerosis, where plaque builds up in the artery walls. Risk factors include:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {riskFactors.map((factor, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg shadow-md">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                        <span className="text-gray-800 font-medium text-sm">{factor}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call to Action */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-lg">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">
                        Take Control of Your Heart Health
                      </h4>
                      <p className="text-blue-700 mb-4">
                        The more risk factors you have, the higher your chance of developing CAD. 
                        Many risk factors can be controlled through lifestyle changes and medical management.
                      </p>
                      <Button 
                        onClick={() => window.open('https://practice.kareo.com/pulsecarehv', '_blank', 'noopener,noreferrer')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
                      >
                        Schedule Risk Assessment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                <Stethoscope className="h-6 w-6" />
                <span className="text-lg font-medium">Advanced Diagnostics</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Diagnosis of Coronary Artery Disease
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. Kiran Mangalpally uses comprehensive diagnostic methods to accurately assess coronary artery disease
              </p>
            </div>

            {/* Diagnostic Process Overview */}
            <div className="mb-16">
              <Card className="shadow-xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-blue-600 mb-2">Comprehensive Diagnostic Approach</CardTitle>
                  <CardDescription className="text-lg">
                    Dr. Mangalpally's systematic evaluation process for accurate CAD diagnosis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">Physical Examination</h4>
                      <p className="text-blue-700 leading-relaxed">
                        Comprehensive physical examination to assess overall cardiovascular health and identify potential signs of heart disease.
                      </p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">Blood Pressure Measurement</h4>
                      <p className="text-blue-700 leading-relaxed">
                        Accurate blood pressure assessment to evaluate cardiovascular risk and monitor treatment effectiveness.
                      </p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">Medical History Review</h4>
                      <p className="text-blue-700 leading-relaxed">
                        Thorough review of symptoms, medical history, and family history to identify risk factors and patterns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Diagnostic Tests */}
            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Diagnostic Tests
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {diagnosticTests.map((test, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <Activity className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg text-blue-600">{test}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                <Shield className="h-6 w-6" />
                <span className="text-lg font-medium">Comprehensive Care</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Treatment Options for Coronary Artery Disease
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                CAD treatment includes a combination of lifestyle changes, medications, and sometimes surgical procedures
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Lifestyle Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {lifestyleChanges.map((change, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{change}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Risk Factor Management</CardTitle>
                  <CardDescription>Dr. Mangalpally works with patients to manage:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">High blood pressure</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">High cholesterol</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Diabetes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Obesity</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Medications</CardTitle>
                  <CardDescription>Depending on the patient's condition, medications may include:</CardDescription>
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

            {/* Procedures and Surgery Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Procedures and Surgery
              </h3>
              <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                For patients with significant artery blockages, the following may be recommended:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">Percutaneous Coronary Intervention (PCI)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Also known as angioplasty. This minimally invasive procedure opens blocked arteries using a balloon and may include stent placement to keep the artery open.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">Coronary Artery Bypass Grafting (CABG)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      A surgical procedure that creates a new pathway for blood to reach the heart muscle by bypassing blocked arteries.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Locations Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                <MapPin className="h-6 w-6" />
                <span className="text-lg font-medium">Serving Locations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Areas We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. Kiran Mangalpally offers coronary artery disease diagnosis and treatment in:
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {locations.map((location, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg shadow-md text-center">
                  <span className="text-gray-800 font-medium">{location}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                To schedule a consultation or diagnostic test, please contact the office directly or submit a request online.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CommonCTA 
              serviceName="Coronary Artery Disease Treatment"
              subtitle="Expert coronary artery disease care in Frisco, Carrollton, Allen, McKinney, and surrounding areas."
              description="To schedule a consultation or diagnostic test, please contact the office directly or submit a request online. Dr. Mangalpally provides comprehensive treatment with personalized care for each patient."
            />
          </div>
        </section>

        <ServicesOverview />
        <Footer />
      </div>
    </>
  );
};

export default CoronaryArteryDisease; 