import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hypertension from "./pages/Hypertension";
import Arrhythmia from "./pages/Arrhythmia";
import VascularDisease from "./pages/VascularDisease";
import HeartFailure from "./pages/HeartFailure";
import DiagnosticCardiology from "./pages/DiagnosticCardiology";
import CoronaryArteryDisease from "./pages/CoronaryArteryDisease";
import NotFound from "./pages/NotFound";
import PatientResourcesPage from "./pages/PatientResources";
import ElectrocardiogramPage from "./pages/ElectrocardiogramPage";
import EchocardiogramPage from "./pages/EchocardiogramPage";
import CardiacCatheterizationPage from "./pages/CardiacCatheterizationPage";
import CTCoronaryAngiogramPage from "./pages/CTCoronaryAngiogramPage";
import HeartMRIPage from "./pages/HeartMRIPage";
import CoronaryCalciumScorePage from "./pages/CoronaryCalciumScorePage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HolterMonitorPage from "./pages/HolterMonitorPage";
import MobileCardiacTelemetryPage from "./pages/MobileCardiacTelemetryPage";
import StressTestPage from "./pages/StressTestPage";
import TestimonialsPage from "./pages/TestimonialsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/hypertension-treatment" element={<Hypertension />} />
            <Route path="/arrhythmia-treatment" element={<Arrhythmia />} />
            <Route path="/vascular-disease-treatment" element={<VascularDisease />} />
            <Route path="/heart-failure-management" element={<HeartFailure />} />
            <Route path="/diagnostic-cardiology" element={<DiagnosticCardiology />} />
            <Route path="/coronary-artery-disease-treatment" element={<CoronaryArteryDisease />} />
            <Route path="/holter-monitor-test" element={<HolterMonitorPage />} />
            <Route path="/mobile-cardiac-telemetry" element={<MobileCardiacTelemetryPage />} />
            <Route path="/stress-test" element={<StressTestPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/patient-resources" element={<PatientResourcesPage />} />
            <Route path="/electrocardiogram-ekg-ecg" element={<ElectrocardiogramPage />} />
            <Route path="/echocardiogram" element={<EchocardiogramPage />} />
            <Route path="/cardiac-catheterization" element={<CardiacCatheterizationPage />} />
            <Route path="/ct-coronary-angiogram" element={<CTCoronaryAngiogramPage />} />
            <Route path="/cardiac-mri" element={<HeartMRIPage />} />
            <Route path="/coronary-calcium-score" element={<CoronaryCalciumScorePage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
