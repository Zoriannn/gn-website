'use client';

import { MapPin, Pin, Phone, Clock9 } from "lucide-react";
import { motion } from "framer-motion";

const LocateUs = () => {
  return (
    <section className="relative pt-20 pb-8 lg:pb-24 overflow-hidden bg-white">
      {/* Background element */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-600 to-blue-800"
        aria-hidden="true"
      />

      <div className="container-custom pt-2 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-96 lg:h-auto lg:aspect-[4/3] overflow-hidden rounded-xl shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9105708828224!2d101.67376519999999!3d3.1183560999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc494e871cad37%3A0xffbc98735beccc5c!2sMercu%20Aspire%20Corporate%20Tower%20%40%20KL%20Eco%20City!5e0!3m2!1sen!2smy!4v1745760862020!5m2!1sen!2smy"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Right Section: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-black"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Where We Work
            </h2>
            <div className="space-y-8">
              {/* Malaysia Office */}
              <div>
                <div className="flex justify-center items-center font-semibold text-lg">
                  <Pin className="mr-2" strokeWidth={2.5} size={"20px"} />
                  MALAYSIA OFFICE (HQ)
                </div>
                <p className="text-sm text-gray-900 mt-2">
                  02 & 03, Level 8, <br />
                  Mercu Aspire, No.3, Jalan Bangsar, <br />
                  KL Eco City 59200 Kuala Lumpur
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex justify-center items-center font-semibold text-lg">
                  <Phone className="mr-2" strokeWidth={2.5} size={"20px"} />
                  CONTACT INFORMATION
                </div>
                <p className="text-sm text-gray-900 mt-2">
                  Email: info.my@galactic-n.com <br />
                  Phone: +6016-411 6021
                </p>
              </div>

              {/* Business Hours */}
              <div>
                <div className="flex justify-center items-center font-semibold text-lg">
                  <Clock9 className="mr-2" strokeWidth={2.5} size={"20px"} />
                  BUSINESS HOURS
                </div>
                <p className="text-sm text-gray-900 mt-2">
                  Monday - Friday <br />
                  9:00 am - 6:00 pm
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0">
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
      </div> */}
    </section>
  );
};

export default LocateUs;