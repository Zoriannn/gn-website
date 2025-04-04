import Link from "next/link";

const WhyMission = () => {
  const reasons = [
    {
      title: "Capitalize on every cost and performance opportunity",
      description: "Manage your cloud spend and identify architecture, operational, and financial opportunities to drive efficiency.",
      cta: "See how",
      href: "#"
    },
    {
      title: "Free yourself of operations and compliance headaches",
      description: "Eliminate the distractions and difficulties of operations, maintenance, monitoring, and security.",
      cta: "Learn More",
      href: "#"
    },
    {
      title: "Accelerate your growth",
      description: "Bring your high-growth organization to market faster with transformation mechanisms and a proven team from our best of experts.",
      cta: "Get Started",
      href: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-mission-orange mb-8">
          Why Galactic Network
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-mission-navy mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {reason.description}
              </p>
              <Link
                href={reason.href}
                className="text-mission-navy font-medium text-sm inline-flex items-center border border-mission-navy px-4 py-2 rounded-full hover:bg-mission-navy hover:text-white transition-colors"
              >
                {reason.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-xl font-bold text-mission-navy mb-2">82</div>
            <p className="text-sm text-gray-600">Net Promoter Score</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-xl font-bold text-mission-navy mb-2">4.8</div>
            <p className="text-sm text-gray-600">Customer Satisfaction Score</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-xl font-bold text-mission-navy mb-2">250+</div>
            <p className="text-sm text-gray-600">AWS Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMission;
