'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import cloudImage from "@/assets/images/9.png";
import cloudImage1 from "@/assets/images/7.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 pt-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-mission-red text-sm font-medium uppercase tracking-wide mb-3">
                AWS PREMIER SERVICE & SOFTWARE PARTNER
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-4.5xl font-bold text-mission-navy leading-tight mb-4">
                WE ARE YOUR TRUSTED BUSINESS {" "}
                <span className="bg-mission-blue bg-opacity-20 px-2 py-1 rounded">
                  TECHNOLOGY TRANSFORMATION PARTNER.
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link
                href="#"
                className="mt-5 inline-flex items-center rounded-full bg-mission-navy px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                View our Services
              </Link>
            </motion.div>
          </div>
          <div className="md:col-span-1 md:ml-14">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={cloudImage}
                alt="Cloud Management Illustration"
                width={500}
                height={400}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trusted by logos section */}
      {/* <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600 font-medium mb-6">
          Trusted by 500+ companies for AWS cloud and AI success
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          <Image
            src="https://ext.same-assets.com/1186114827/1479953984.png"
            alt="Playbill"
            width={120}
            height={40}
            className="object-contain"
          />
          <Image
            src="https://ext.same-assets.com/3705394987/327052039.png"
            alt="MagellanTV"
            width={120}
            height={40}
            className="object-contain"
          />
          <Image
            src="https://ext.same-assets.com/4107478024/1681853516.png"
            alt="Thrive Market"
            width={120}
            height={40}
            className="object-contain"
          />
          <Image
            src="https://ext.same-assets.com/95436065/1738849253.png"
            alt="Good Food Holdings"
            width={120}
            height={40}
            className="object-contain"
          />
          <Image
            src="https://ext.same-assets.com/746843919/2042411084.png"
            alt="Employ"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div> */}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
