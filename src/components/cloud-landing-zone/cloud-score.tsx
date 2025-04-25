import Image from "next/image";

const CloudScore = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="relative">
            <div className="w-24 h-24 absolute -right-6 -top-6 z-10">
              <Image
                src="https://ext.same-assets.com/1554441626/196895298.svg+xml"
                alt="Stars"
                width={80}
                height={80}
              />
            </div>
            <div className="relative bg-gradient-to-br from-mission-peach/10 to-mission-orange/5 rounded-lg p-6 lg:p-10 shadow-sm max-w-xl">
              <h2 className="text-lg font-semibold text-mission-navy mb-4">
                Mission Cloud Score
              </h2>
              <div className="flex items-center gap-6">
                <div className="relative w-28 h-28">
                  {/* Circular gauge */}
                  <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 border-r-green-500 border-b-yellow-500 border-l-red-500"
                    style={{ transform: "rotate(-45deg)" }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-mission-navy">6.7</div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Your AWS environment can be optimized</span><br />
                    Improve your score by addressing the recommendations in Mission Control
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudScore;
