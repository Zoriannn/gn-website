import Image from "next/image";

const BenefitsGrid = () => {
  const benefits = [
    {
      title: "Automated account setup with security guardrails",
      description: "Securely chat in platform with your Cloud Advisor team who you regularly talk to, through chat where you see the issues at hand.",
      icon: "https://ext.same-assets.com/2527565895/2927682447.svg+xml"
    },
    {
      title: "Centralized logging and monitoring",
      description: "Our engineers understand the nuances of your environment and can see the Recommendations we're acting on in the background with CloudOps teams.",
      icon: "https://ext.same-assets.com/1681914100/966668158.svg+xml"
    },
    {
      title: "Role-based access control and IAM policies",
      description: "As our teams make and protective the impact of your architecture leverages over time.",
      icon: "https://ext.same-assets.com/2479817344/1931841821.svg+xml"
    },
    {
      title: "Scalable, multi-account structure",
      description: "Every part of Mission Control was designed for AWS cloud environments and supports AWS best practices and programs.",
      icon: "https://ext.same-assets.com/1590783257/3368796943.svg+xml"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-mission-peach bg-opacity-10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-mission-orange bg-opacity-10 rounded-lg p-8 transition-transform hover:scale-[1.01]"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-mission-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
