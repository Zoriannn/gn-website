import Link from "next/link";
import Image from "next/image";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-md text-mission-navy font-medium mb-8">
          Features
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-mission-navy mb-6">
            Visualize, Collaborate, Learn, Act
          </h2>
          <p className="text-gray-700 text-lg mb-4 max-w-3xl">
            For every insight, alert, or data point we visualize, you'll have access to an expert to help you understand what it means, why it matters, and how to act on it.
          </p>
        </div>

        {/* Cloud Score Feature */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-mission-navy mb-6">
                Mission Cloud Score
              </h3>
              <p className="text-gray-700 mb-6">
                Improve your environment by measuring your alignment to best practices across cost, operations, security, reliability and performance. All delivered through a unified dashboard accessible to everyone.
              </p>
              <Link
                href="#"
                className="inline-flex items-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <div className="absolute right-0 bottom-0 z-10">
                  <Image
                    src="https://ext.same-assets.com/1554441626/196895298.svg+xml"
                    alt="Stars"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="bg-mission-blue bg-opacity-5 rounded-lg p-6 relative">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Circular gauge similar to hero section */}
                    <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 border-r-green-500 border-b-yellow-500 border-l-red-500"
                      style={{ transform: "rotate(-45deg)" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-mission-navy">6.7</div>
                        <div className="text-xs text-gray-500">AWS environment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Management Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mission-navy mb-4">
              User Management
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              Manage your team's permissions to access critical information
            </p>

            <div className="mt-6 space-y-4">
              {/* Sample user management UI */}
              <div className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">A</div>
                  <div>
                    <p className="text-sm font-medium">Andrew Dixon</p>
                    <p className="text-xs text-gray-500">admin@company.com</p>
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Admin</div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-3">K</div>
                  <div>
                    <p className="text-sm font-medium">Karen Wu</p>
                    <p className="text-xs text-gray-500">karen@company.com</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Member</div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mr-3">E</div>
                  <div>
                    <p className="text-sm font-medium">Eric Andersson</p>
                    <p className="text-xs text-gray-500">eric@company.com</p>
                  </div>
                </div>
                <div className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">Viewer</div>
              </div>
            </div>
          </div>

          {/* Recommendations Feature */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mission-navy mb-4">
              Recommendations
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              Identify opportunities to improve your environment with recommendations that are tailored to your specific business goals.
            </p>

            <div className="mt-6 relative h-[200px] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/877506892/2978946211.jpeg"
                alt="Recommendations Interface"
                width={400}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Resources Feature */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-mission-navy mb-4">
            Resources
          </h3>
          <p className="text-gray-700 mb-6">
            Monitor your most critical AWS resources in a single view. Evaluate resource-specific recommendations and monitor any resource-specific alerts.
          </p>

          <div className="relative h-[300px] rounded-lg overflow-hidden bg-gray-50">
            <Image
              src="https://ext.same-assets.com/2109917547/2149192518.jpeg"
              alt="Resources Dashboard"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
