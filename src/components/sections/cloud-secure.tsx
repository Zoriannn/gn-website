'use client'

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import advanced from "../../assets/images/advanced.png";
import public_img from "../../assets/images/public-sector.png";
import mdec from "../../assets/images/mdec.png";
import well from "../../assets/images/well-architect.png";

const images = [
  {
    src: advanced.src,
    alt: "SI Security Partner of the Year",
    caption: "AWS Advanced Tier Services"
  },
  {
    src: public_img.src,
    alt: "Another Security Award",
    caption: "AWS Public Sector"
  },
  {
    src: well.src,
    alt: "Final Security Award",
    caption: "AWS Well-Architected Partner Program"
  },
  {
    src: mdec.src,
    alt: "Yet Another Security Award",
    caption: "Malaysia Digital Status"
  }
];

const CloudSecure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-mission-navy mb-6">
              Secure your cloud with{" "}
              <br></br>
              <span className="bg-mission-orange text-white px-2 py-1 rounded">
                Galactic Network
              </span>
            </h2>
            <p className="text-gray-600 mb-6">
              (Need a description here)Protect your cloud environment with next-generation threat detection, automated incident response, and continuous compliance and operational excellence with Mission Cloud Secure, our new SaaS application that delivers 24/7 monitoring and response through a seamless combination of CrowdStrike&apos;s world-class security platform with Mission&apos;s AWS expertise.
            </p>
            <Link
              href="#"
              className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              Protect your cloud with Cloud Secure
            </Link>
          </motion.div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm text-gray-700">{image.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CloudSecure;