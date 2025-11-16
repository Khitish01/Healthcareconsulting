"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, Heart, Users, Home, HandHeart, Accessibility, Shield } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const AboutUsOverview: React.FC = () => {
  const [patientsCount, setPatientsCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate patients count to 275
          let patients = 0;
          const patientsInterval = setInterval(() => {
            patients += 50;
            if (patients >= 4052) {
              setPatientsCount(4052);
              clearInterval(patientsInterval);
            } else {
              setPatientsCount(patients);
            }
          }, 20);

          // Animate satisfaction rate to 96
          let satisfaction = 0;
          const satisfactionInterval = setInterval(() => {
            satisfaction += 2;
            if (satisfaction >= 100) {
              setSatisfactionRate(100);
              clearInterval(satisfactionInterval);
            } else {
              setSatisfactionRate(satisfaction);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Primary Color Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0ecf7] via-[#e5ddf2] to-[#ddd2ed]" />
      
      {/* Top Curve */}
      <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path fill="#f4f7ff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
      </svg>
      
      {/* Bottom Curve */}
      <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ transform: 'rotate(180deg)' }}>
        <path fill="#f4f7ff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
      </svg>
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23644B9F" fill-opacity="0.3"%3E%3Cpath d="M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      {/* Medical Floating Elements */}
      <div className="absolute top-32 right-24 opacity-12 animate-float">
        <Accessibility className="w-20 h-20 text-[#644B9F]" strokeWidth={1.5} />
      </div>
      <div className="absolute top-1/4 left-20 opacity-10 animate-float-delayed">
        <Users className="w-18 h-18 text-[#644B9F]" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-1/3 right-32 opacity-10 animate-float">
        <Home className="w-16 h-16 text-[#7557b3]" strokeWidth={1.5} />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-10 animate-float-delayed">
        <HandHeart className="w-14 h-14 text-[#644B9F]" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-40 left-32 opacity-10 animate-float">
        <Shield className="w-16 h-16 text-[#644B9F]" strokeWidth={1.5} />
      </div>
      <div className="absolute top-2/3 left-1/4 opacity-8 animate-float-delayed">
        <Heart className="w-12 h-12 text-[#7557b3]" strokeWidth={1.5} />
      </div>
      <div className="absolute top-40 right-1/3 w-40 h-40 rounded-full bg-[#644B9F]/6 blur-3xl animate-float" />
      <div className="absolute bottom-32 left-20 w-56 h-56 rounded-full bg-[#7557b3]/6 blur-3xl animate-float-delayed" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#644B9F] font-semibold text-sm uppercase tracking-wider mb-3">
              WELCOME TO OUR MEDICAL
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Journey to Better Health Starts Here
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We are dedicated to providing the highest quality healthcare services to our community.
            </p>
            <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#644B9F] to-[#7557b3] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#644B9F]/40 hover:scale-105 transition-all duration-300 uppercase text-sm">
              LEARN MORE
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Large Team Image */}
            <div className="mt-12 relative">
              <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/team.png"
                  alt="Medical Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Small Team Image with Play Button */}
            <FeatureCard
              accents={[{ position: "bottom-left", color: "#e3dbf0" }]}
              className="p-0!"
              overlayIcons={[
                {
                  content: <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-10">
                    <Play className="h-6 w-6 text-[#644B9F] ml-1" fill="currentColor" />
                  </button>,
                  position: "bottom-left",
                  className: "!bottom-0 !left-0",
                },
              ]}
            >
              <div className="relative h-[320px] rounded-3xl overflow-hidden">
                <img
                  src="/Frank-1.png"
                  alt="Healthcare Professionals"
                  className="w-full h-full object-cover"
                />
                {/* Play Button */}

              </div>
            </FeatureCard>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md">
                <div className="text-5xl font-bold text-[#644B9F] mb-2">
                  {patientsCount}
                  {/* <span className="text-5xl">K</span> */}
                </div>
                <p className="text-gray-700 font-semibold">Happy clients</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md">
                <div className="text-5xl font-bold text-[#644B9F] mb-2">
                  {satisfactionRate}<span className="text-5xl">%</span>
                </div>
                <p className="text-gray-700 font-semibold">Pass rate to date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOverview;
