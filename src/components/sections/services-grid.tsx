import Link from "next/link";
import Image from "next/image";
//import { CloudIcon, ShieldCheckIcon, CurrencyDollarIcon, CubeIcon, ServerIcon, BackupIcon } from "@heroicons/react/outline";


const ServicesGrid = () => {
  const services = [
    {
      title: "Cloud Landing Zone",
      icon: "https://ext.same-assets.com/3396239064/2286122983.svg+xml",
      href: "#"
    },
    {
      title: "Cloud Migration",
      icon: "https://ext.same-assets.com/3396239064/2286122983.svg+xml",
      href: "#"
    },
    {
      title: "Cloud Security & Compliance",
      icon: "https://ext.same-assets.com/3396239064/2286122983.svg+xml",
      href: "#"
    },
    {
      title: "Cost & Architecture Optimization",
      icon: "https://ext.same-assets.com/825999966/3973646205.svg+xml",
      href: "#"
    },
    {
      title: "Cloud Platform Accelerator & Containerization",
      icon: "https://ext.same-assets.com/2600985523/1747417680.svg+xml",
      href: "#"
    },
    {
      title: "Managed Cloud Operations",
      icon: "https://ext.same-assets.com/2572778066/3403518403.svg+xml",
      href: "#"
    },
    {
      title: "Cloud Backup Solutions",
      icon: "https://ext.same-assets.com/825999966/3973646205.svg+xml",
      href: "#"
    },
    // {
    //   title: "Billing Management & Optimization Service (BMOS)",
    //   icon: "https://ext.same-assets.com/2600985523/1747417680.svg+xml",
    //   href: "#"
    // },
    // {
    //   title: "Cloud Management & Optimization Service (CMOS)",
    //   icon: "https://ext.same-assets.com/2572778066/3403518403.svg+xml",
    //   href: "#"
    // }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-mission-navy mb-12">
          What do you need help with?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-mission-orange bg-opacity-20 hover:bg-opacity-30 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-200"
            >
              <div className="h-16 w-16 mb-4 flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <h3 className="text-lg font-semibold text-mission-navy">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
