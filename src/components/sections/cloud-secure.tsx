import Link from "next/link";
import Image from "next/image";

const CloudSecure = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-mission-navy mb-6">
              Secure your cloud with{" "}
              <span className="bg-mission-orange text-white px-2 py-1 rounded">
                Mission Cloud Secure
              </span>
            </h2>
            <p className="text-gray-600 mb-6">
              Protect your cloud environment with next-generation threat detection, automated incident response, and continuous compliance and operational excellence with Mission Cloud Secure, our new SaaS application that delivers 24/7 monitoring and response through a seamless combination of CrowdStrike&apos;s world-class security platform with Mission&apos;s AWS expertise.
            </p>
            <Link
              href="#"
              className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              Protect your cloud with Cloud Secure
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3756533236/3424024819.png"
                alt="SI Security Partner of the Year"
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSecure;
