import React from "react";

const ClientLogos: React.FC = () => {
  const logos = [
    "/client-logo/logo-1.png",
    "/client-logo/logo-2.png",
    "/client-logo/logo-3.png",
    "/client-logo/logo-4.png",
    "/client-logo/logo-5.png",
    "/client-logo/logo-6.png",
    "/client-logo/logo-7.png",
    "/client-logo/logo-8.png",
  ];

  return (
    <section className="py-12 pb-8">
      <div className="mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-">
          <p className="text-[#644B9F] font-semibold text-sm uppercase tracking-wider mb-2">
            Join the family
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Some Of Our <span className="text-[#644B9F]">Happy Clients</span>
          </h2>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden py-8">
          <div className="flex gap-16 animate-scroll hover:[animation-play-state:paused]">
            {/* First set */}
            {logos.map((logo, idx) => (
              <div
                key={`first-${idx}`}
                className="shrink-0 w-48 h-24 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="max-w-full max-h-full object-contain hover:scale-110"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, idx) => (
              <div
                key={`second-${idx}`}
                className="shrink-0 w-48 h-24 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="max-w-full max-h-full object-contain hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
