"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const faqItems = [
    {
      question: "How do I get started on Mission Control?",
      answer: "Getting started with Mission Control is simple. Contact us for a demo, and our team will guide you through the onboarding process, configuring your account, and setting up your AWS environment connection."
    },
    {
      question: "Which services include Mission Control?",
      answer: "Mission Control is included with our Cloud One and Cloud Foundation services. It's the core platform that enables our teams to provide proactive support and guidance for your AWS environment."
    },
    {
      question: "How much does Mission Control cost?",
      answer: "Mission Control is included as part of our Cloud One and Cloud Foundation managed services. Contact our sales team for specific pricing based on your organization's needs and AWS environment size."
    },
    {
      question: "What resource types are supported by Mission Control?",
      answer: "Mission Control supports a wide range of AWS resources including EC2 instances, RDS databases, S3 buckets, Lambda functions, ECS/EKS clusters, and more. The platform is continuously updated to support new AWS services."
    },
    {
      question: "Will I see my resources across AWS Accounts?",
      answer: "Yes, Mission Control provides a unified view across multiple AWS accounts. This cross-account visibility helps you manage complex environments and ensure consistent best practices across your entire AWS footprint."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-mission-peach bg-opacity-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-mission-navy mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none bg-white"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-mission-navy">{item.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openItem === index ? (
                    <Minus className="h-5 w-5 text-mission-orange" />
                  ) : (
                    <Plus className="h-5 w-5 text-mission-navy" />
                  )}
                </span>
              </button>

              {openItem === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
