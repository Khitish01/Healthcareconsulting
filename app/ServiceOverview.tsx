import React, { useState } from "react";
import { Check } from "lucide-react";

const ServiceOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Patient Care",
    "Consulting",
    "Imaging Services",
    "Specialized Clinic",
  ];

  const services = [
    {
      title: "NDIS Registration Assistance",
      description:
        "We offer complete start-to-finish support to help you become a fully registered NDIS provider with one of the fastest registration turnaround times in Australia. Our specialist team manages all complexities so you can focus on delivering quality care.",
      image: "/services/cardiology.png",
      features: [
        "End-to-end guidance",
        "Compliance review",
        "Fast processing",
        "Gap analysis",
        "Policy drafting",
        "Audit prep",
        "Ongoing support",
        "Expert assistance"
      ]
      ,
    },
  ];

  return (
    <section className="relative py-32 pt-10 overflow-hidden">
      {/* Custom Background with Curved Borders */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-[#E8E9FF] via-[#e8ecf7] to-[#E8E9FF]" /> */}

      {/* Top Curve */}
      <svg className="absolute top-0 left-0 w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,80 Q360,20 720,80 T1440,80 L1440,0 L0,0 Z" fill="#f4f7ff" />
      </svg>

      {/* Bottom Curve */}
      <svg className="absolute bottom-0 left-0 w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,0 Q360,60 720,0 T1440,0 L1440,80 L0,80 Z" fill="#f4f7ff" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#644B9F] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-[#644B9F]">Healthcare Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering exceptional medical care across multiple specialties with state-of-the-art facilities and expert healthcare professionals
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center items-center">
          <div className="flex w-fit flex-wrap gap-4 pb-6 justify-center bg-white rounded-3xl rounded-b-none p-6 px-10">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === idx
                  ? "bg-[#644B9F] text-white shadow-lg"
                  : "bg-[#f4f7ff] text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {services[0].title}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {services[0].description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                {services[0].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="shrink-0 mt-1">
                      <Check className="h-5 w-5 text-[#17A2B8]" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
