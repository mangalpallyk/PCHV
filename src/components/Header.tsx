import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDiagnosticServicesOpen, setIsDiagnosticServicesOpen] = useState(false);
  const [isPatientResourcesOpen, setIsPatientResourcesOpen] = useState(false);
  const [isCardiacConditionsOpen, setIsCardiacConditionsOpen] = useState(false);
  const [isGeneralResourcesOpen, setIsGeneralResourcesOpen] = useState(false);

  const generalResourcesContent = [
    { title: "New Patient Forms", link: "/patient-forms" },
    { title: "Insurance Information", link: "/insurance-info" },
    { title: "Patient Education", link: "/patient-education" },
    { title: "FAQs", link: "/faqs" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-2xl font-bold text-blue-600">
              <img 
                src="/lovable-uploads/logo.jpg" 
                alt="Dr. Kiran Kumar Mangalpally Logo"
                className="h-auto w-40 mr-2"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                to="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors"
              >
                Contact
              </Link>
              <div 
                className="relative"
                onMouseEnter={() => setIsDiagnosticServicesOpen(true)}
                onMouseLeave={() => setIsDiagnosticServicesOpen(false)}
              >
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors"
                  onClick={() => setIsDiagnosticServicesOpen(!isDiagnosticServicesOpen)}
                >
                  Services 
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDiagnosticServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDiagnosticServicesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                    <Link 
                      to="/electrocardiogram-ekg-ecg"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      onClick={() => setIsDiagnosticServicesOpen(false)}
                    >
                      Electrocardiogram (EKG/ECG)
                    </Link>
                    <Link 
                      to="/echocardiogram"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      onClick={() => setIsDiagnosticServicesOpen(false)}
                    >
                      Echocardiogram
                    </Link>
                    <Link 
                      to="/cardiac-catheterization"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      onClick={() => setIsDiagnosticServicesOpen(false)}
                    >
                      Cardiac Catheterization
                    </Link>
                    <Link 
                      to="/ct-coronary-angiogram"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      onClick={() => setIsDiagnosticServicesOpen(false)}
                    >
                      CT Coronary Angiogram
                    </Link>
                    <Link 
                      to="/cardiac-mri"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      onClick={() => setIsDiagnosticServicesOpen(false)}
                    >
                      Cardiac MRI
                    </Link>
                    <Link 
                      to="/coronary-calcium-score"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors border-b-0"
                      onClick={() => setIsDiagnosticServicesOpen(false)}
                    >
                      Coronary Calcium Score
                    </Link>
                    <Link 
                      to="/holter-monitor-test"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors border-b-0"
                      onClick={() => setIsDiagnosticServicesOpen(false)}
                    >
                      Holter Monitor Test
                    </Link>
                    <Link 
                      to="/mobile-cardiac-telemetry"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors border-b-0"
                      onClick={() => setIsDiagnosticServicesOpen(false)}
                    >
                      Mobile Cardiac Telemetry
                    </Link>
                    <Link 
                      to="/stress-test"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors border-b-0"
                      onClick={() => setIsDiagnosticServicesOpen(false)}
                    >
                      Stress Test
                    </Link>
                  </div>
                )}
              </div>
              
              

              <div 
                className="relative"
                onMouseEnter={() => setIsPatientResourcesOpen(true)}
                onMouseLeave={() => setIsPatientResourcesOpen(false)}
              >
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors"
                  onClick={() => setIsPatientResourcesOpen(!isPatientResourcesOpen)}
                >
                  Patient Resources
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isPatientResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isPatientResourcesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                    <div className="py-2">
                      <Link
                        to="/patient-resources"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors font-medium"
                        onClick={() => setIsPatientResourcesOpen(false)}
                      >
                        Insurance Accepted
                      </Link>
                    </div>

                    <div className="py-2">
                      <Link
                        to="/testimonials"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors font-medium"
                        onClick={() => setIsPatientResourcesOpen(false)}
                      >
                        Patient Testimonials
                      </Link>
                    </div>
                    
                    <div className="border-t border-gray-200">
                      <button
                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors font-medium"
                        onClick={() => setIsCardiacConditionsOpen(!isCardiacConditionsOpen)}
                      >
                        Common Cardiac Conditions
                        <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${isCardiacConditionsOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {isCardiacConditionsOpen && (
                        <div className="bg-gray-50 py-1">
                          <Link 
                            to="/coronary-artery-disease-treatment"
                            className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                            onClick={() => {
                              setIsPatientResourcesOpen(false);
                              setIsCardiacConditionsOpen(false);
                            }}
                          >
                            Coronary Artery Disease
                          </Link>
                          <Link 
                            to="/hypertension-treatment"
                            className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                            onClick={() => {
                              setIsPatientResourcesOpen(false);
                              setIsCardiacConditionsOpen(false);
                            }}
                          >
                            Hypertension Treatment
                          </Link>
                          <Link 
                            to="/arrhythmia-treatment"
                            className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                            onClick={() => {
                              setIsPatientResourcesOpen(false);
                              setIsCardiacConditionsOpen(false);
                            }}
                          >
                            Arrhythmia Treatment
                          </Link>
                          <Link 
                            to="/vascular-disease-treatment"
                            className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                            onClick={() => {
                              setIsPatientResourcesOpen(false);
                              setIsCardiacConditionsOpen(false);
                            }}
                          >
                            Vascular Disease Treatment
                          </Link>
                          <Link 
                            to="/heart-failure-management"
                            className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                            onClick={() => {
                              setIsPatientResourcesOpen(false);
                              setIsCardiacConditionsOpen(false);
                            }}
                          >
                            Heart Failure Management
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                    to="https://checkout.square.site/merchant/MLDHW1SP9YEAH/checkout/VDQBX5MICP6N2A2A7B3Q5OQA"
                    target="_blank"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors"
                  >
                    Pay your bill
              </Link>

              <Link
                to="https://portal.kareo.com/pp-webapp/app/new/login"
                target="_blank"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors"
              >
                Patient Portal
              </Link>

              <div className="w-fit h-fit bg-blue-500 text-white font-bold flex items-center justify-center rounded-full py-4 px-6">
                  <Link
                    to="https://practice.kareo.com/pulsecarehv"
                    target="_blank"
                    className="text-white  px-2 py-1 text-md font-medium transition-colors"
                  >
                    Schedule an appointment
                  </Link>
              </div>
              
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t shadow-lg">
              <div className="space-y-1">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700"
                  onClick={() => setIsDiagnosticServicesOpen(!isDiagnosticServicesOpen)}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDiagnosticServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDiagnosticServicesOpen && (
                  <div className="pl-3">
                    <Link 
                      to="/electrocardiogram-ekg-ecg"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Electrocardiogram (EKG/ECG)
                    </Link>
                    <Link 
                      to="/echocardiogram"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Echocardiogram
                    </Link>
                    <Link 
                      to="/cardiac-catheterization"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Cardiac Catheterization
                    </Link>
                    <Link 
                      to="/ct-coronary-angiogram"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      CT Coronary Angiogram
                    </Link>
                    <Link 
                      to="/heart-mri"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Heart MRI
                    </Link>
                    <Link 
                      to="/coronary-calcium-score"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Coronary Calcium Score
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/about"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="space-y-1">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700"
                  onClick={() => setIsPatientResourcesOpen(!isPatientResourcesOpen)}
                >
                  Patient Resources
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isPatientResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isPatientResourcesOpen && (
                  <div className="pl-3 space-y-2">
                    <Link
                      to="/patient-resources"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Insurance Accepted
                    </Link>

                    <div>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600"
                        onClick={() => setIsCardiacConditionsOpen(!isCardiacConditionsOpen)}
                      >
                        Common Cardiac Conditions
                        <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${isCardiacConditionsOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {isCardiacConditionsOpen && (
                        <div className="pl-4">
                          <Link 
                            to="/coronary-artery-disease-treatment"
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Coronary Artery Disease
                          </Link>
                          <Link 
                            to="/hypertension-treatment"
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Hypertension Treatment
                          </Link>
                          <Link 
                            to="/arrhythmia-treatment"
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Arrhythmia Treatment
                          </Link>
                          <Link 
                            to="/vascular-disease-treatment"
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Vascular Disease Treatment
                          </Link>
                          <Link 
                            to="/heart-failure-management"
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Heart Failure Management
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="https://checkout.square.site/merchant/MLDHW1SP9YEAH/checkout/VDQBX5MICP6N2A2A7B3Q5OQA"
                target="_blank"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pay your bill
              </Link>
              <Link
                to="https://portal.kareo.com/pp-webapp/app/new/login"
                target="_blank"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Patient Portal
              </Link>
              <div className="w-fit h-fit bg-blue-500 text-white font-bold flex items-center justify-center rounded-full py-1 px-2">
                  <Link
                    to="https://practice.kareo.com/pulsecarehv"
                    target="_blank"
                    className="text-white  px-2 py-1 text-md font-medium transition-colors"
                  >
                    Schedule an appointment
                  </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
