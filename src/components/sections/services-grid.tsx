'use client'

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cloud1 from "../../assets/images/cloud_1.png";
import cloud2 from "../../assets/images/cloud_2.png";
import cloud3 from "../../assets/images/cloud_3.png";
import cloud4 from "../../assets/images/cloud_4.png";
import cloud5 from "../../assets/images/cloud_5.png";
import cloud6 from "../../assets/images/cloud_6.png";
import cloud7 from "../../assets/images/cloud_7.png";

const ServicesGrid = () => {
  const services = [
    {
      title: "Cloud Landing Zone",
      icon: cloud1,
      href: "#",
    },
    {
      title: "Cloud Migration",
      icon: cloud2,
      href: "#",
    },
    {
      title: "Cloud Security & Compliance",
      icon: cloud7,
      href: "#",
    },
    {
      title: "Cost & Architecture Optimization",
      icon: cloud6,
      href: "#",
    },
    {
      title: "Cloud Platform Accelerator & Containerization",
      icon: cloud5,
      href: "#",
    },
    {
      title: "Managed Cloud Operations",
      icon: cloud4,
      href: "#",
    },
    {
      title: "Cloud Backup Solutions",
      icon: cloud3,
      href: "#",
    },
  ];

  const ref = useRef(null);
  const isInView1 = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1.5 }}
          className="text-2xl font-bold text-center text-mission-navy mb-12"
        >
          What do you need help with?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1.5}}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        > 
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group bg-mission-orange bg-opacity-20 hover:bg-opacity-30 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-200 ${
                index === services.length - 1 && services.length % 3 !== 0
                  ? "md:col-span-1 md:col-start-2"
                  : ""
              }`}
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
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;