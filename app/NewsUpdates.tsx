import React from "react";
import { Calendar, ArrowRight, Heart, Users, Home, HandHeart, Accessibility, Shield } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const NewsUpdates: React.FC = () => {
  const news = [
  {
    id: 1,
    date: "15",
    month: "Jan",
    title: "NDIS Commission Sets 2025–26 Priorities",
    excerpt:
      "Regulatory focus for 2025–26 includes reducing restrictive practices, stronger worker safeguards, and oversight on unregistered providers.",
    color: "#4CAF50",
  },
  {
    id: 2,
    date: "22",
    month: "Feb",
    title: "New Action Plan for Disability Inclusion",
    excerpt:
      "The NDIS Commission released its Disability Action Plan 2025–2030, strengthening inclusion, leadership, and workplace accessibility.",
    color: "#FF9800",
  },
  {
    id: 3,
    date: "05",
    month: "Mar",
    title: "Stronger Data & Systems for Safety",
    excerpt:
      "The 2024–25 Annual Report highlights major enforcement actions and the launch of the DART program for improved risk management.",
    color: "#FF5252",
  },
  {
    id: 4,
    date: "19",
    month: "Apr",
    title: "My NDIS Portal Gets Smarter",
    excerpt:
      "New updates to the provider portal bring clearer error messages, improved claim feedback, and a more intuitive interface.",
    color: "#9FA8DA",
  },
  // {
  //   id: 5,
  //   date: "01",
  //   month: "July",
  //   title: "NDIS Pricing Reform from July 2025",
  //   excerpt:
  //     "New pricing rules now align support costs more closely with Medicare and private health-insurance rate structures.",
  //   color: "#26A69A",
  // },
  // {
  //   id: 6,
  //   date: "28",
  //   month: "Aug",
  //   title: "Machine Learning to Improve Plan Drafting",
  //   excerpt:
  //     "The NDIA is trialling ML models to draft NDIS plans faster and make early plan creation more data-driven.",
  //   color: "#AB47BC",
  // },
];


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
      
      {/* NDIS Floating Elements */}
      {/* Accessibility Icon */}
      <div className="absolute top-32 right-24 opacity-12 animate-float">
        <Accessibility className="w-20 h-20 text-[#644B9F]" strokeWidth={1.5} />
      </div>
      
      {/* Users/Community Icon */}
      <div className="absolute top-1/4 left-20 opacity-10 animate-float-delayed">
        <Users className="w-18 h-18 text-[#644B9F]" strokeWidth={1.5} />
      </div>
      
      {/* Home Care Icon */}
      <div className="absolute bottom-1/3 right-32 opacity-10 animate-float">
        <Home className="w-16 h-16 text-[#7557b3]" strokeWidth={1.5} />
      </div>
      
      {/* Hand Heart (Support) Icon */}
      <div className="absolute top-1/2 right-1/4 opacity-10 animate-float-delayed">
        <HandHeart className="w-14 h-14 text-[#644B9F]" strokeWidth={1.5} />
      </div>
      
      {/* Shield (Protection) Icon */}
      <div className="absolute bottom-40 left-32 opacity-10 animate-float">
        <Shield className="w-16 h-16 text-[#644B9F]" strokeWidth={1.5} />
      </div>
      
      {/* Heart (Care) Icon */}
      <div className="absolute top-2/3 left-1/4 opacity-8 animate-float-delayed">
        <Heart className="w-12 h-12 text-[#7557b3]" strokeWidth={1.5} />
      </div>
      
      {/* Soft Background Circles */}
      <div className="absolute top-40 right-1/3 w-40 h-40 rounded-full bg-[#644B9F]/6 blur-3xl animate-float" />
      <div className="absolute bottom-32 left-20 w-56 h-56 rounded-full bg-[#7557b3]/6 blur-3xl animate-float-delayed" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#644B9F] font-semibold text-sm uppercase tracking-wider mb-3">
            NDIS Support & Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest <span className="text-[#644B9F]">NDIS News & Updates</span>
          </h2>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {news.map((item) => (
            <FeatureCard
              key={item.id}
              accents={[{ position: "top-right", color: "#e3daf0" }]}
              className=""
              overlayIcons={[
                {
                  content: <button className="bg-white p-4 rounded-full"><img src="/arrow.gif" className="w-8" alt="" /></button>,
                  position: "top-right",
                  className: "!top-0 !right-0",
                },
              ]}
            >
              <div className="flex items-center justify-between gap-8">
                {/* Date Box */}
                <div
                  className="flex-shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-white"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="text-3xl font-bold">{item.date}</div>
                  <div className="text-sm">{item.month}</div>
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                </div>

                {/* Button */}
                {/* <button className="flex-shrink-0 px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                  BOOK A SEAT
                </button> */}
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  )
}


export default NewsUpdates;
