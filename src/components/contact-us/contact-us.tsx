"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import cloudbg from "@/assets/images/cloud_background.jpeg";

export default function ContactUs() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-32 relative"
        style={{
          gridTemplateColumns: "2fr 1fr",
          backgroundImage: `url(${cloudbg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent opacity-80" />
        <div className="relative z-10 text-4xl lg:text-4xl pt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="py-4 text-center text-white font-sans font-extrabold"
          >
            <p className="px-3">CONTACT US</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white py-10 mx-8 sm:px-16 lg:px-36 2xl:px-52"
      >
        {/* Decorative Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white text-slate-800 text-center"
        >
          <div className="text-slate-800 font-extrabold text-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 mb-8 px-2 italic rounded-lg shadow-md">
            Let us guide you! Share your needs, and we&apos;ll connect you to the right experts.
          </div>
        </motion.div>

        {/* Booking Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-10"
        >
          <main className="flex flex-col min-h-full items-center justify-center bg-white">
            <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="1000px"
                src="https://galacticnetwork.zohobookings.com/portal-embed#/4687946000000038006"
                frameBorder="0"
                allowFullScreen={true}
                className="rounded-lg"
              ></iframe>
            </div>
          </main>
        </motion.div>
      </motion.div>
    </div>
  );
}