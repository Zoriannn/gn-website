import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-mission-orange bg-opacity-20 to-mission-peach bg-opacity-10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-mission-navy mb-6 bg-mission-orange inline-block px-3 py-1 rounded">
            Cloud Landing Zone
          </h1>

          <p className="text-gray-700 text-lg mb-8">
          Lay the right foundation for your cloud journey with a secure, governed, and scalable environment. Our Cloud Landing Zone solution gives you a production-ready environment aligned with best practices from day one.
          </p>

          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors"
          >
            Request A Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
