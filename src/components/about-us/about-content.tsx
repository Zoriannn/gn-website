"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import gnpic2 from "@/assets/images/gn-fam2.jpeg";

export default function AboutContent() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <div className="bg-white">
      <section className="py-16 lg:py-8">
        <div className="container-custom">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700">
            Galactic Network is a trusted business technology transformation partner dedicated to enabling organizations to thrive in the digital world. With over 40 years of combined cloud expertise, our team designs, builds, and manages secure, scalable, and high-performing cloud native environments that power innovation and resilience.
Founded with a vision to simplify complex technology challenges, we specialize in helping businesses evolve into technology-native enterprises. Whether it’s migrating legacy systems, modernizing architecture, or ensuring cost efficiency and security, we bring a business-first approach to everything we do.
            </p>
          </motion.div>

          <div
            ref={ref1}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
              className="relative h-96 lg:h-auto lg:aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={gnpic2}
                alt="Galactic Network Office"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                Building Solutions That Matter
              </h3>
              <p className="text-gray-700">
                Our team is built from experienced professionals who have led product and engineering
                teams at companies of all sizes. We understand the challenges faced by both startups
                and large enterprises.
              </p>
              <p className="text-gray-700">
                By combining product strategy, design expertise, and engineering excellence, we
                deliver complete solutions that address real business challenges. Our flexible
                development approach allows us to adapt to your specific needs, whether you need a
                complete product team or specialized expertise to augment your existing team.
              </p>
            </motion.div>
          </div>

          <div
            ref={ref2}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:mt-32"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 order-2 lg:order-1"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-700">
              To empower businesses through innovative cloud native technology and expert services, enabling them to solve real-world challenges and grow as digital-native organizations.
              </p>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-96 lg:h-auto lg:aspect-[4/3] overflow-hidden rounded-xl shadow-lg order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-blue-600 bg-opacity-90 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
                  <p className="text-lg mb-4">
                  To become the leading global technology transformation partner, known for enabling sustainable digital growth and operational excellence.
                  </p>
                  {/* <ul className="space-y-4 text-left">
                    <li className="flex items-start">
                      <span className="mr-2 text-xl">•</span>
                      <span>
                        <strong className="font-semibold">Client Partnership</strong> - We succeed when our clients succeed
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-xl">•</span>
                      <span>
                        <strong className="font-semibold">Technical Excellence</strong> - Crafting high-quality, scalable solutions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-xl">•</span>
                      <span>
                        <strong className="font-semibold">Transparent Communication</strong> - Clear, honest dialogue at every step
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-xl">•</span>
                      <span>
                        <strong className="font-semibold">Continuous Innovation</strong> - Always exploring new technologies and approaches
                      </span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
