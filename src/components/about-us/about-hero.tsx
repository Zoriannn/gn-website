"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import gnpic from "@/assets/images/gn-fam.jpeg";

export default function AboutHero() {
  return (
    <section className="relative pt-10 pb-8 lg:pb-24 overflow-hidden">
      {/* Background element */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-600 to-blue-800"
        aria-hidden="true"
      />

      <div className="container-custom pt-2 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              About Galactic Network
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl italic-text"
            >
              We build software that delivers real business value through visionary product leadership,
              top-tier engineering, and AI expertise.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-96 lg:h-auto lg:aspect-[4/3] overflow-hidden rounded-xl shadow-2xl"
          >
            <Image
              src={gnpic}
              alt="Galactic Network Team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,154.7C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
