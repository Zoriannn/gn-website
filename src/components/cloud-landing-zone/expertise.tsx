import Image from "next/image";

const ExpertiseSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-sm text-gray-500 uppercase tracking-wide mb-3">
            WHY MISSION CONTROL
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-mission-navy mb-6">
            The Expertise to Interpret Data - Not Just Visualize It
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="text-gray-700 mb-6">
              Mission Control helps you monitor and analyze your environment, similar to a cloud management platform. But Mission Control also leverages our teams as they build their knowledge of your business, industry, objectives, and the critical concerns and metrics of your architecture.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                <p className="text-gray-700">Real-time access to Mission AWS experts in the platform</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                <p className="text-gray-700">Always-on monitoring and alerting</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                <p className="text-gray-700">Benchmark your AWS environment against best practices</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                <p className="text-gray-700">Monitor cost and usage trends</p>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1218210989/3851516892.png"
                alt="Mission Control Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
