import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, Clock, MapPin, Mail, Printer } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "945-222-4111",
      subtext: "Call for appointments",
      link: "tel:945-222-4111"
    },
    {
      icon: Printer,
      title: "Fax",
      details: "945-218-5475",
      subtext: "For faxing"
    },
    {
      icon: MapPin,
      title: "Frisco",
      details: "5350 Independence Pkwy, Ste # 100",
      subtext: "Frisco, TX – 75035",
      mapLink: "https://www.google.com/maps?sca_esv=ba2fc44af14fa769&sxsrf=AE3TifOoktJL26Kx_xyQOhD_mESMhAg23Q:1749538696578&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiJHB1bHNlIGNhcmUgaGVhcnQgYW5kIHZhc2N1bGFyIEZSSVNDTzIFECEYoAEyBRAhGKABMgUQIRifBUjtHlDHAliRHHACeACQAQCYAfQBoAG6DqoBBTAuNC41uAEDyAEA-AEBmAIKoALNDcICBxAjGLADGCfCAgoQABiwAxjWBBhHwgIEECMYJ8ICBhAAGBYYHsICCxAAGIAEGIYDGIoFwgIFEAAY7wXCAggQABiABBiiBMICBBAhGBXCAgcQIRigARgKmAMAiAYBkAYIkgcFMi4yLjagB5wqsgcFMC4yLja4B8UNwgcFMC45LjHIBxY&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kfval61oPUyGMbcqnvM8m_Yo&daddr=5350+Independence+Pkwy+STE+100,+Frisco,+TX+75035,+United+States"
    },
    {
      icon: MapPin,
      title: "Carrollton",
      details: "4333 N. Josey Ln, Plaza 2, Ste # 204",
      subtext: "Carrollton, TX – 75010",
      mapLink: "https://www.google.com/maps/dir//4333+N+Josey+Ln+II+Ste+204,+Carrollton,+TX+75010,+United+States/@33.0539429,-96.8899675,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864c25688659cd59:0x4885eb8726820e50!2m2!1d-96.8863588!2d33.0282838?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D"
    },
  ];

  const renderCard = (info: any, index: number) => {
    const cardContentElement = (
      <div className="p-6 text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
          <info.icon className="h-8 w-8 text-blue-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
          <p className="text-lg text-gray-700 group-hover:text-blue-600">{info.details}</p>
          <p className="text-sm text-gray-500 group-hover:text-blue-500">{info.subtext}</p>
        </div>
      </div>
    );

    if (info.mapLink) {
      return (
        <a 
          key={index}
          href={info.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:no-underline"
        >
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md h-full">
            <CardContent>{cardContentElement}</CardContent>
          </Card>
        </a>
      );
    }

    if (info.link) {
      return (
        <a 
          key={index}
          href={info.link}
          className="block hover:no-underline"
        >
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md h-full">
            <CardContent>{cardContentElement}</CardContent>
          </Card>
        </a>
      );
    }

    return (
      <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md h-full">
        <CardContent>{cardContentElement}</CardContent>
      </Card>
    );
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step in your healthcare journey? Contact us today to schedule an appointment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => renderCard(info, index))}
          </div>

          <div className="mt-8">
            <Card className="border-0 shadow-lg">
              <a href="mailto:contact@pulsecarehv.com" className="flex flex-col items-center justify-center space-x-4 hover:opacity-80 transition-opacity">
              <CardHeader>
                <CardTitle className="text-center text-xl font-semibold text-gray-900">
                Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-gray-600">contact@pulsecarehv.com</p>
                  <p className="text-sm text-gray-500">For general inquiries</p>
                </CardContent>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
