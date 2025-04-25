"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const teamMembers = [
  {
    name: "Li Sheng Chong",
    title: "CEO",
    image: "/images/todd.jpg",
    linkedin: "#",
  },
  {
    name: "David Oi",
    title: "CTO",
    image: "/images/ben.jpg",
    linkedin: "#",
  },
  {
    name: "Yi Wooi Chong",
    title: "Product Director",
    image: "/images/mike_b.jpg",
    linkedin: "#",
  },
  {
    name: "Yssane Chai",
    title: "Senior Engineer",
    image: "/images/daniel.jpg",
    linkedin: "#",
  },
  {
    name: "Jason Lim",
    title: "Head of Operations",
    image: "/images/renee.jpg",
    linkedin: "#",
  },
  {
    name: "Hakim Hairon",
    title: "Design Lead",
    image: "/images/step.jpg",
    linkedin: "#",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
          <p className="text-lg text-gray-700">
            Meet the experienced professionals who lead Galactic Network. Our leadership team
            brings decades of expertise in product development, engineering, and building successful
            software businesses.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-72 w-full bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.title}</p>
                <Link
                  href={member.linkedin}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
