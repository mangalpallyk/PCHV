import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Award, Stethoscope, Users, BookOpen, Globe } from "lucide-react";

const PracticeOverview = () => {
  const qualifications = [
    "General Cardiology",
    "Interventional Cardiology", 
    "Internal Medicine",
    "Echocardiography",
    "Nuclear Cardiology"
  ];

  const fellowships = [
    {
      specialty: "Clinical Pharmacology",
      institution: "Baylor College of Medicine, Houston, TX"
    },
    {
      specialty: "Clinical Cardiac Electrophysiology", 
      institution: "Sparrow Hospital, Michigan State University, Lansing, MI"
    },
    {
      specialty: "Cardiovascular Disease",
      institution: "Oakwood Hospital and Medical Center, Dearborn, MI"
    },
    {
      specialty: "Interventional Cardiology",
      institution: "Mount Sinai Hospital, New York, NY"
    }
  ];

  const serviceAreas = [
    "Frisco", "Carrollton", "Allen", "McKinney", "Princeton", "Wylie",
    "The Colony", "Anna", "Celina", "Addison", "Lewisville", "Grapevine", "Flower Mound"
  ];

  const focusAreas = [
    "Non-invasive and interventional cardiology",
    "Management of chronic cardiovascular conditions", 
    "Preventive cardiology",
    "Cardiovascular imaging and diagnostics",
    "Peripheral vascular evaluations"
  ];

  return (
    <section className="py-20 bg-background"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Pulse Care Heart and Vascular</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A cardiovascular practice focused on evidence-based care for heart and vascular conditions, 
            committed to providing individualized diagnosis and therapeutic interventions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Board Certifications</h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{qual}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Our Focus Areas</h3>
                </div>
                <div className="space-y-2">
                  {focusAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Fellowship Training</h3>
                </div>
                <div className="space-y-3">
                  {fellowships.map((fellowship, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <h4 className="font-medium text-gray-900">{fellowship.specialty}</h4>
                      <p className="text-sm text-gray-600">{fellowship.institution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Research & Publications</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Mangalpally is actively involved in clinical research and has published multiple 
                  peer-reviewed articles in cardiology. His work is regularly presented at national 
                  and international cardiology conferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="p-8 shadow-lg">
          <CardContent className="p-0">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Service Areas</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We welcome patients from Frisco and the surrounding areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-center text-sm font-medium">
                  {area}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our clinical protocols emphasize evidence-based medicine, continuous monitoring, and timely interventions. 
            We aim to support every patient through their cardiac care journey with clarity, consistency, and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PracticeOverview;
