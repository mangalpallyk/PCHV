import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CardiacCatheterizationPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center mt-24">
          {/* Text Content */}
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-700">Cardiac Catheterization at Pulse Care Heart and Vascular</h1>
            <p className="text-xl mb-4 text-gray-700">By Dr. Kiran Mangalpally, MD</p>
            <p className="text-lg text-gray-500 mb-12">General and Interventional Cardiology | Peripheral Arterial Disease | Varicose Veins</p>
          </div>

          {/* Image Section */}
          <div className="w-full mb-12">
            <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
              <img 
                src="/lovable-uploads/cardiac-catheterization.jpg" 
                alt="Cardiac Catheterization Procedure"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 pt-0 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Pulse Care Heart and Vascular, we offer cardiac catheterization to evaluate and treat heart-related conditions. This procedure helps us study blood flow, identify blockages, and make decisions about treatment options. It is performed by Dr. Kiran Mangalpally, an experienced interventional cardiologist who provides personalized care for people living with heart disease, vascular conditions, and symptoms linked to poor circulation.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Is Cardiac Catheterization?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Cardiac catheterization is a medical procedure used to diagnose and sometimes treat heart and blood vessel problems. It involves inserting a thin, flexible tube (called a catheter) into a blood vessel—usually in the wrist or groin—and guiding it to the heart.
            </p>
            <p className="text-lg text-gray-700 mb-3 font-medium">Once in place, the catheter allows the cardiologist to:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Measure blood pressure inside the heart</li>
              <li>Examine how well the heart is pumping</li>
              <li>Check for narrowed or blocked arteries</li>
              <li>Inject contrast dye to take X-ray images (angiography)</li>
              <li>Perform treatments such as angioplasty or stent placement if needed</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              This test is often recommended for people with ongoing chest pain, shortness of breath, or other signs of heart disease.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">When Is Cardiac Catheterization Needed?</h2>
            <p className="text-lg text-gray-700 mb-3 font-medium">Cardiac catheterization is usually suggested when:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>A person has symptoms that may be linked to coronary artery disease</li>
              <li>Other tests such as echocardiograms or stress tests show signs of heart problems</li>
              <li>There is a need to evaluate heart valve conditions or heart muscle function</li>
              <li>A person is living with peripheral arterial disease (PAD) and may have coexisting coronary artery narrowing</li>
              <li>A patient is preparing for certain treatments or surgeries that require a clear view of heart arteries</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              This procedure is often used to decide the next steps in care—whether medical management is enough or if interventional procedures such as angioplasty or stenting are needed.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">How the Procedure Works</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Pulse Care Heart and Vascular, the cardiac catheterization process is done in a controlled setting using specialized imaging equipment. Here is what to expect:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>You may be given a sedative to help you relax</li>
              <li>A local anesthetic is applied where the catheter will be inserted</li>
              <li>The catheter is guided through blood vessels toward the heart using real-time imaging</li>
              <li>Once positioned, contrast dye is released to capture images of the coronary arteries</li>
              <li>If blockages are found, treatment may be performed during the same procedure</li>
              <li>Most people can go home the same day, depending on the procedure type</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Cardiac Catheterization and Vascular Conditions</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              People with PAD or varicose veins may undergo cardiac catheterization if symptoms suggest that the heart is involved or if there's a need to assess overall vascular function. Since these conditions affect blood circulation, a complete evaluation including the heart can help ensure that the full picture of cardiovascular health is understood.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Benefits of Cardiac Catheterization at Pulse Care Heart and Vascular</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Expert care from Dr. Kiran Mangalpally, an experienced interventional cardiologist</li>
              <li>State-of-the-art cardiac catheterization facilities</li>
              <li>Comprehensive evaluation of heart and vascular conditions</li>
              <li>Integration with PAD and varicose vein treatment plans</li>
              <li>Clear communication about procedure and results</li>
              <li>Personalized follow-up care and treatment planning</li>
            </ul>
          </div>

          <div className="bg-blue-600 shadow-xl rounded-lg p-8 text-white transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">Schedule Your Consultation Today</h2>
            <p className="text-lg mb-4 leading-relaxed text-center">
              If you've been referred for cardiac catheterization, or if you are experiencing heart or vascular symptoms that require evaluation, contact Pulse Care Heart and Vascular to schedule your consultation.
            </p>
            <p className="text-lg leading-relaxed text-center">
              We serve patients seeking expert care in cardiology, peripheral arterial disease, and vein-related conditions, with procedures performed under the care of Dr. Kiran Mangalpally, MD.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardiacCatheterizationPage; 