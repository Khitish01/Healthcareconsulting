// FeaturesSection.tsx
import React from "react";
import { ArrowLeft, Stethoscope, HeartPulse, Pill } from "lucide-react";
import { FeatureCard, AccentConfig, OverlayIconConfig } from "./FeatureCard";

interface Feature {
  number: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    number: "01",
    title: "Health Check",
    description: "We providing quality healthcare services to our community",
  },
  {
    number: "02",
    title: "Personalized Care",
    description: "We providing quality healthcare services to our community",
  },
  {
    number: "03",
    title: "24/7 Medicines",
    description: "We providing quality healthcare services to our community",
  },
];

const iconMap = [
  <Stethoscope key="s" className="h-12 w-12 text-blue-600" />,
  <HeartPulse key="h" className="h-12 w-12 text-rose-500" />,
  <Pill key="p" className="h-12 w-12 text-emerald-500" />,
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-15 bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, index) => {
            const accents: AccentConfig[] = [
              {
                position: "top-right",
                color: "#000000",
              },
              // {
              //   position: "bottom-left",
              //   color: "#000000",
              //   // className: "w-20 h-20 opacity-70",
              // },
              // {
              //   position: "top-left",
              //   color: "#000000",
              //   // className: "w-16 h-16 opacity-60",
              // },
            ];

            const overlayIcons: OverlayIconConfig[] = [
              {
                position: "top-right",
                content: (
                  <button className="bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-sm">
                    <ArrowLeft className="h-4 w-4 text-blue-600" />
                  </button>
                ),
              },
              // {
              //   position: "bottom-left",
              //   content: (
              //     <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 shadow-sm">
              //       New
              //     </span>
              //   ),
              //   className: "translate-y-2",
              // },
            ];

            return (
              <FeatureCard
                key={index}
                accents={accents}
                overlayIcons={overlayIcons}
                className="min-h-[320px]"
              >
                {/* Number circle */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full text-lg font-bold mb-5">
                  <span>{feature.number}</span>
                </div>

                {/* Main icon */}
                <div className="mb-6 flex items-center justify-center">
                  {iconMap[index % iconMap.length]}
                </div>

                {/* Text content */}
                <div className="mt-auto">
                  <h4 className="text-2xl text-slate-800 mb-4 font-semibold">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}</p>
                </div>
              </FeatureCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
