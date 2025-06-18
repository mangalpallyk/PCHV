import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CoronaryCalciumScorePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center mt-24">
          {/* Text Content */}
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-700">Coronary Calcium Score at Pulse Care Heart and Vascular</h1>
            <p className="text-xl mb-4 text-gray-700">By Dr. Kiran Mangalpally, MD</p>
            <p className="text-lg text-gray-500 mb-12">General and Interventional Cardiology | Peripheral Arterial Disease | Varicose Veins</p>
          </div>

          {/* Image Section */}
          <div className="w-full mb-12">
            <div className="aspect-w-16 aspect-h-9 w-full md:w-[70%] mx-auto bg-gray-100 rounded-lg">
              <img 
                src="/lovable-uploads/coronary-calcium-score.jpg" 
                alt="Coronary Calcium Score Test"
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
              At Pulse Care Heart and Vascular, we offer the Coronary Calcium Score test as a tool to help assess your risk of heart disease. This test is a non-invasive CT scan that measures the amount of calcium in the walls of the coronary arteries. Calcium buildup can be a sign of coronary artery disease (CAD), even before symptoms appear.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This screening helps patients and doctors understand the likelihood of future heart problems and take steps to prevent them.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What Is a Coronary Calcium Score?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              A Coronary Calcium Score, also known as a heart scan or cardiac CT for calcium scoring, measures the presence of calcium deposits in the coronary arteries. These arteries supply blood to the heart muscle. Calcium buildup is often a marker of atherosclerosis, a condition where the arteries become narrowed or blocked due to plaque formation.
            </p>
            <p className="text-lg text-gray-700 mb-3 font-medium">The score helps determine your risk of:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Heart attack</li>
              <li>Coronary artery disease</li>
              <li>Future cardiac events</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              The test is quick, uses a low dose of radiation, and does not require any injections or dyes.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Who Should Consider a Coronary Calcium Score?</h2>
            <p className="text-lg text-gray-700 mb-3 font-medium">This test may be recommended for people who:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Are between the ages of 40 and 70</li>
              <li>Have no current symptoms of heart disease but may be at moderate risk</li>
              <li>Have risk factors such as high blood pressure, high cholesterol, smoking, diabetes, or a family history of heart disease</li>
              <li>Want a more accurate picture of their heart health beyond blood tests and standard check-ups</li>
              <li>Are managing peripheral arterial disease (PAD) or varicose veins and need a better understanding of their overall vascular health</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              This test is often used to support decision-making about starting medications such as statins or other therapies aimed at lowering cardiovascular risk.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">What to Expect During the Test</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The Coronary Calcium Score test is simple and does not require much preparation. Here's what typically happens:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Arrival and Check-In: You will be guided to the imaging area and asked to lie on the CT scanner table.</li>
              <li>Scanning: Small electrodes will be placed on your chest to monitor your heart rate. The scanner will take images of your heart during a few seconds of breath-holding.</li>
              <li>No Contrast: No contrast dye or injection is needed.</li>
              <li>Duration: The test usually takes about 10 to 15 minutes.</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              After the scan, the system calculates a calcium score, which Dr. Mangalpally will review and explain to you.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Understanding the Results</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The results of the Coronary Calcium Score are presented as a numerical value:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>Zero: No calcium is detected. Risk of coronary artery disease is low.</li>
              <li>1–99: Small amount of calcium. Risk is low to moderate.</li>
              <li>100–399: Moderate calcium. Increased risk of heart disease.</li>
              <li>400 and above: Extensive calcium. High risk of future heart events.</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              A higher score means more calcium is present, and the likelihood of narrowed or blocked coronary arteries is greater. This information helps Dr. Mangalpally create a plan to reduce risk, whether through lifestyle changes, medications, or further tests.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Why Coronary Calcium Score Matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Coronary Calcium Score test provides information that may not show up in regular physical exams or blood work. It helps detect early signs of heart disease, even in people who feel healthy. For those managing PAD, varicose veins, or other vascular concerns, it offers a way to evaluate how blood flow to the heart is affected and whether additional interventions are needed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              It can also help avoid unnecessary treatments if the score is low.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">How It Fits into Cardiovascular Care</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Pulse Care Heart and Vascular, this test is often used alongside other services:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4 pl-4 space-y-2">
              <li>EKG to measure heart rhythm</li>
              <li>Echocardiogram to look at heart structure</li>
              <li>Cardiac catheterization or CT coronary angiogram to assess blockages</li>
              <li>Heart MRI for deeper evaluation of muscle and blood flow</li>
              <li>Peripheral arterial disease assessments for circulation in the limbs</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Coronary Calcium Score helps identify patients who may benefit from preventive strategies before more serious symptoms develop.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Schedule a Coronary Calcium Score with Dr. Mangalpally</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              If you're concerned about your heart health, or if you have a family history of heart disease, the Coronary Calcium Score can provide early and useful insights. This test is one of many tools we use at Pulse Care Heart and Vascular to help detect cardiovascular disease in its early stages.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Kiran Mangalpally will work with you to interpret your results and guide you through next steps tailored to your unique risk profile.
            </p>
          </div>

          <div className="bg-blue-600 shadow-xl rounded-lg p-8 text-white transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">Book Your Consultation Today</h2>
            <p className="text-lg mb-4 leading-relaxed text-center">
              To learn more about your heart health or to schedule a Coronary Calcium Score test, contact Pulse Care Heart and Vascular.
            </p>
            <p className="text-lg leading-relaxed text-center">
              Early detection is an important step toward preventing future heart problems.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoronaryCalciumScorePage; 