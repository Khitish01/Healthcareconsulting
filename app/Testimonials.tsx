"use client";
import React, { useState } from "react";
import { Star, Quote } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "Patient",
      rating: 5,
      text: "I received a top-class service from Dr. Glue and his team. My overall was a turned. If not more so, to the company I joined. I honestly feel I've not done it nearly a worth.",
      fullText: "Dr. Glue and his team provided exceptional care throughout my treatment. The attention to detail and personalized approach made all the difference in my recovery. I'm grateful for their expertise and compassion.",
      cardStyle: "bg-gradient-to-br from-[#644B9F] to-[#7557b3] text-white",
    },
    {
      id: 2,
      name: "Jennifer Adams",
      role: "Patient",
      rating: 5,
      text: "The team provided exceptional support and kept me informed every step.",
      fullText: "From my first consultation to post-treatment follow-ups, the entire team demonstrated professionalism and genuine care for my wellbeing.",
      cardStyle: "bg-gray-800! text-white",
    },
    {
      id: 3,
      name: "Alex Brown",
      role: "Patient",
      rating: 5,
      text: "This was a life-changing experience. Highly recommend!",
      fullText: "After years of struggling with my condition, I finally found a healthcare team that truly understood my needs and provided effective treatment.",
      cardStyle: "bg-blue-400! text-white",
    },
    {
      id: 4,
      name: "Jennifer Moreno",
      role: "Patient",
      rating: 5,
      text: "An overall wonderful and regarding experience.",
      fullText: "Thank you for the wonderful experience! I was blown away by the level of care I received. The staff was friendly, knowledgeable, and truly cared about my wellbeing.",
      cardStyle: "bg-red-400! text-white",
    },
    {
      id: 5,
      name: "Marcia Simone",
      role: "Patient",
      rating: 5,
      text: "Awesome teaching support from! The info did the focusview themselves. Delicious guidance from their self serve buffet breakfast.",
      fullText: "The staff were genuinely interested about my progress which I honestly loved. They helped guide me through the process and made sure I understood every step of my treatment plan.",
      cardStyle: "bg-gray-800! text-white",
    },
  ];

  return (
    <section className="relative py-32 mt-10 overflow-hidden">
      {/* Primary Color Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#f0ecf7] via-[#e5ddf2] to-[#ddd2ed]" />

      {/* Top Curve */}
      <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path fill="#f4f7ff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
      </svg>

      {/* Bottom Curve */}
      {/* <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ transform: 'rotate(180deg)' }}>
        <path fill="#f4f7ff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
      </svg> */}

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23644B9F" fill-opacity="0.3"%3E%3Cpath d="M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      {/* Floating Elements */}
      <div className="absolute top-40 right-1/3 w-40 h-40 rounded-full bg-[#644B9F]/6 blur-3xl animate-float" />
      <div className="absolute bottom-32 left-20 w-56 h-56 rounded-full bg-[#7557b3]/6 blur-3xl animate-float-delayed" />


      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Testimonial Cards with Absolute Positioning */}
          <div className="relative h-[500px]">
            {/* Card 1 - Top Left - Centered with Avatar Top */}
            <div className="absolute top-0 left-0 w-[48%] bg-white rounded-2xl p-6 shadow-md">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-pink-500 to-red-500 flex items-center justify-center text-white text-lg font-bold mx-auto mb-3">
                  J
                </div>
                <p className="text-gray-600 text-xs mb-3 text-center leading-relaxed">
                  You might be raised on a farm. Sometimes languages are difficult and difficult to find the right the adjective to go with noun.
                </p>
                <div className="flex gap-0.5 justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h4 className="font-bold text-gray-900 text-sm text-center">Jhon Smith</h4>
                <p className="text-pink-500 text-xs text-center">UI/ UX Designer</p>
              </div>
            </div>

            {/* Card 2 - Top Right - Rating Card */}
            <div className="absolute -top-10 right-0 w-[48%] bg-white rounded-2xl p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="flex gap-0.5 justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-xs">
                <span className="font-bold text-gray-900">2000+</span> Satisfied<br />Students
              </p>
            </div>

            {/* Card 3 - Bottom Left - Quote Card */}
            <div className="absolute bottom-25 left-0 w-[48%] bg-linear-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 shadow-md overflow-hidden">
              {/* <Quote className="absolute -bottom-2 -right-2 w-20 h-20 text-cyan-200/40" /> */}
              <p className="text-gray-900 font-medium text-sm relative z-10 leading-relaxed">
                " You own your data and gain complete control over your business."
              </p>
            </div>

            {/* Card 4 - Bottom Right - Avatar Left */}
            <div className="absolute bottom-25 right-0 w-[48%] bg-white rounded-2xl p-6 shadow-md">
              <div className="flex flex-col items-center  gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-base font-bold shrink-0">
                  J
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-xs mb-2 leading-relaxed">
                    You might be raised on a farm. Sometimes some languages and difficult for difficult to find.
                  </p>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h4 className="font-bold text-gray-900 text-sm">Jhon Smith</h4>
                <p className="text-pink-500 text-xs">UI/ UX Designer</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonial
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Says Our{" "}
              <span className="text-pink-500">Students</span> About Us
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
            </p>
            <button className="px-8 py-4 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
