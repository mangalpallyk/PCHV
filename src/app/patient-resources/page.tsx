import { NextPage } from 'next';

const insurancePlans = [
  { name: "Aetna", plans: ["HMO/PPO – SPECs", "HMO/PPO – AWH SPECs", "Medicare"] },
  { name: "American Health Plan Of Texas", plans: ["Med Adv I-SNP"] },
  { name: "Amerivantage", plans: ["Medicare Advantage HMO", "SNP"] },
  { name: "Blue Cross Blue Shield", plans: ["EPO", "HMO", "PPO/POS", "Medicare Advantage HMO(Dallas, Rural, Tarrant)", "Medicare Advantage PPO(Dallas, Rural, Tarrant)"] },
  { name: "Care N Care", plans: ["Medicare Advantage HMO/PPO"] },
  { name: "CHAMPVA", plans: [] },
  { name: "ChoiceCare(Humana)", plans: ["Concentric(Humana Preferred)", "Medicare Advantage HMO and PFFS", "Medicare Choice PPO", "PPO"] },
  { name: "Cigna HealthCare", plans: ["HMO/POS/Network", "PPO/Choice Fund PPO", "IFP Connect Exchange Network", "Open Access Plus"] },
  { name: "Cigna-HealthSpring", plans: ["Medicare – Dallas, Rural, Tarrant"] },
  { name: "Evry Health", plans: ["EPBP – SPECs – Dallas, Rural, Tarrant"] },
  { name: "First Health/Coventry Network", plans: ["PPO"] },
  { name: "Galaxy Health Network", plans: ["PPO"] },
  { name: "HealthCare Highways", plans: ["PPO"] },
  { name: "HealthSmart Preferred Care", plans: ["ACCEL", "GEPO", "PPO"] },
  { name: "Imagine Health", plans: ["EPN"] },
  { name: "Imperial Insurance Company of Texas", plans: ["Exchange"] },
  { name: "Independent Medical Systems", plans: ["PPO"] },
  { name: "Medicare", plans: [] },
  { name: "Molina", plans: ["Marketplace SPEC -Dallas, Rural, Tarrant"] },
  { name: "Multiplan", plans: ["PPO", "Med Adv Wrap"] },
  { name: "National Preferred Provider Network", plans: ["PPO"] },
  { name: "Nexcaliber (AAGI)", plans: ["PPO"] },
  { name: "Oscar Insurance Company of Texas", plans: ["EPO Exchange"] },
  { name: "PlanVista", plans: ["PPO"] },
  { name: "Private HealthCare System PPO (MPI)", plans: ["PPO"] },
  { name: "Provider Partners Health Plan", plans: ["ISNP"] },
  { name: "Provider Select", plans: ["PPO"] },
  { name: "Scott and White Health Plan", plans: ["Commercial(No Exchange/ No Quality Alliance)", "Med Advantage HMO and PPO"] },
  { name: "Superior Ambetter", plans: ["Commercial Exchange"] },
  { name: "Texas Health Aetna", plans: ["SPECs"] },
  { name: "Three Rivers Provider Network", plans: ["PPO"] },
  { name: "Tricare (Humana Military Health Plans)", plans: [] },
  { name: "United Healthcare", plans: ["HMO", "PPO", "Secure Horizons/Evercore – Dallas, Rural, Tarrant"] },
  { name: "USA Managed Care Organization", plans: ["PPO"] },
  { name: "Wellcare", plans: ["Medicare Advantage HMO"] },
];

const PatientResourcesPage: NextPage = () => {
  return (
    <section id="patient-resources" className="pt-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Patient Resources
          </h1>
          <p className="mt-4 text-xl text-blue-600 font-medium">
            Accepted Insurance Plans
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8">
          <div className="space-y-8">
            {insurancePlans.map((carrier, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{carrier.name}</h2>
                {carrier.plans && carrier.plans.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                    {carrier.plans.map((plan, planIndex) => (
                      <li key={planIndex}>{plan}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 italic">All plans accepted. Please verify with our office.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientResourcesPage; 