import React from "react";
import { Shield, Stethoscope, Clock, Calendar, Calendar1 } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const ContactUs: React.FC = () => {
  const stats = [
    { percentage: "66%", title: "Medical Center", description: "We work closely with each patient to develop healthcare plans." },
    { percentage: "93%", title: "Success Case", description: "We work closely with each patient to develop healthcare plans." },
    { percentage: "82%", title: "Happy Patients", description: "We work closely with each patient to develop healthcare plans." },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Safe & Trusted",
      description: "Ortly have suffered alteration in some randomised words which don't look even slightly believable.",
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "NDIS Provider Specialists",
      description: "Ortly have suffered alteration in some randomised words which don't look even slightly believable.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 take care staff",
      description: "Ortly have suffered alteration in some randomised words which don't look even slightly believable.",
    },
  ];

  return (
    <section className="relative py-24 mt-20 overflow-hidden rounded-3xl">
      {/* Background with Pattern */}
      <div
        className="absolute inset-0 bg-[#644B9F]"
        style={{
          backgroundImage: 'url(/pattern-02.png)',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          clipPath: 'inset(0% 5% round 30px)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">


        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Amazing Treatment
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Get fast, reliable support for NDIS registration, compliance, and provider guidance every step of the way.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <FeatureCard
            accents={[{ position: "top-right", color: "#644B9F" }]}
            overlayIcons={[
              {
                content: (
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar1 className="text-black"/>
                  </div>
                ),
                position: "top-right",
                className: "!top-0 !right-0",
              },
            ]}
            className="shadow-2xl"
          >
            <div className="text-left">
              <p className="text-[#644B9F] font-semibold text-sm uppercase tracking-wider mb-2">
                GET IN TOUCH
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Make an Appointment
              </h3>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#644B9F] focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#644B9F] focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#644B9F] focus:border-transparent">
                    <option>Select Department</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                  </select>
                  <select className="w-full px-4 py-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#644B9F] focus:border-transparent">
                    <option>Select Doctor</option>
                    <option>Dr. Smith</option>
                    <option>Dr. Johnson</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#644B9F] focus:border-transparent"
                  />
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    className="w-full px-4 py-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#644B9F] focus:border-transparent"
                  />
                  <input
                    type="time"
                    placeholder="09:00AM"
                    className="w-full px-4 py-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#644B9F] focus:border-transparent"
                  />
                </div>

                <textarea
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#644B9F] focus:border-transparent resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#644B9F] text-white font-bold py-4 rounded-full hover:bg-[#7557b3] transition-colors duration-300 uppercase tracking-wider"
                >
                  BOOK AN APPOINTMENT
                </button>
              </form>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
