import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeOverview from "@/components/PracticeOverview";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dr. Kiran Kumar Mangalpally, MD</title>
        <meta name="description" content="Dr. Kiran Kumar Mangalpally, MD - Board-Certified Interventional Cardiologist providing evidence-based cardiovascular care in Frisco, Texas." />
      </Helmet>
      
      <Header />
      <Hero />
      {/* <PracticeOverview /> */}
      {/* <Services /> */}
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
