import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, text, rating }: TestimonialProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4 italic">&quot;{text}&quot;</p>
    <p className="text-gray-800 font-semibold">{name}</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Triplett",
      text: "The Doctor is great! Very thorough and personable. Great Doctor I have major health problems and when I go to a visit he knows all of my issues and is ready to address each of them and how it affects my heart. I am a patient of his for life.",
      rating: 5,
    },
    {
      name: "Danya Raykar",
      text: "I am extremely grateful to have come across Dr. Mangalpally and I admire his dedication to patient care. His ability to communicate complex medical information in a clear and compassionate manner truly sets him apart. I highly recommend Dr. Mangalpally to anyone seeking a knowledgeable and caring cardiologist.",
      rating: 5,
    },
    {
      name: "Omayra Escogido",
      text: "Evertime I've gone in for my appointment they are always so attentive and helpful great customer service for sure. Diana made me feel so comfortable and was very informative with every question I had thank you! You have amazing employees!",
      rating: 5,
    },
    {
      name: "Betse Lanier",
      text: "Dr. Mangalpally is very nice and easy to speak with. His advice is simple and clear but he is also interested in what I think. I would give him 10 stars if they were available.",
      rating: 5,
    },
    {
      name: "April Valadez",
      text: "Everyone was very nice, professional, and knowledgeable. Dr. Mangaloally was able to suggest habits that would better my situation, and I appreciated that very much. I would highly recommend visiting his practice.",
      rating: 5,
    },
    {
      name: "Krupali Kandachia",
      text: "Dr. Mangalpally has been a true blessing in my healthcare journey. I have known him for almost a year. He is a very knowledgeable Cardiologist, and what I really appreciate about him is that he takes enough time with his patients, making an effort to understand their needs and provide personalized treatment. His staff is also very helpful, making every visit as smooth as possible. I would highly recommend him to everyone!",
      rating: 5,
    }
  ];

  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read genuine testimonials from our patients about their experience with Dr. Mangalpally and our cardiovascular care services.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-20">
          <div className="text-center">
            <a
              href="https://g.page/r/CVAOgiaH64VIEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Share Your Experience At Carrolton
            </a>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?q=pulse+care+heart+and+vascular+frisco&oq=PULSE+&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIOCAAQRRgnGDsYgAQYigUyBggBECMYJzIKCAIQLhixAxiABDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzNTY4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x864c3d68ad97dafb:0x28f69b3cf39e2ab7,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Share Your Experience At Frisco 
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials; 