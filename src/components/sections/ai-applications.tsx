import Link from "next/link";
import Image from "next/image";

const AIApplications = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="bg-mission-orange bg-opacity-10 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-mission-orange bg-opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-mission-navy mb-4">Unmistakably <br />Generative AI Applications</h3>
                <Image
                  src="https://ext.same-assets.com/825999966/3973646205.svg+xml"
                  alt="AI Icon"
                  width={60}
                  height={60}
                  className="mb-4"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-mission-navy mb-6">
              Validated expertise for{" "}
              <span className="bg-mission-orange text-white px-2 py-1 rounded">
                AI Applications
              </span>
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you're scaling models for production or shifting from bootstrapped AI solutions to enterprise ready applications, our team has deep expertise and proven experience to get your solution launched. Learn more about our generative AI solutions.
            </p>
            <Link
              href="#"
              className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              Learn more about our generative AI solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIApplications;
