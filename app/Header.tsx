"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, PhoneCall, Menu, X, ShoppingCart } from "lucide-react";

const navItems = [
  "Home",
  "News",
  "Services",
  "Team",
  "Portfolio",
  "Contact Us",
];



const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transition-all duration-300 ${
      isScrolled 
        ? 'fixed top-4 left-4 right-4 z-50 bg-white/70 backdrop-blur-xl shadow-2xl rounded-full py-3' 
        : 'w-full py-4 bg-linear-to-br from-[#e8ecf7] via-[#f0f3fc] to-[#e8ecf7] shadow-sm'
    }`}>
      <div className={`w-full ${
        isScrolled ? 'px-6 lg:px-8' : 'px-4 lg:px-6'
      }`}>
        <div className="flex items-center justify-between gap-2 lg:gap-4 ">
          {/* <div className="flex items-center gap-2 lg:gap-4"> */}
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0 group cursor-pointer">
              <img src="/HC-Logo-Final.svg" alt="" className="w-[15rem]" />
            </div>

            {/* Navigation - White Pill */}
            <nav className="hidden lg:flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-md">
              {navItems.map((item, idx) => (
                <button
                  key={item}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${idx === 0
                      ? "text-white bg-linear-to-r from-[#644B9F] to-[#7557b3] shadow-md"
                      : "text-gray-700 hover:text-[#644B9F] hover:bg-purple-50"
                    }`}
                >
                  <span className="uppercase tracking-wide text-[12px] ">{item}</span>

                  {/* <ChevronDown className="h-3 w-3" /> */}
                </button>
              ))}
            </nav>
          {/* </div> */}

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 ">
            {/* Cart */}
            {/* <div className="relative group">
              <button className="p-3 rounded-full bg-gradient-to-br from-[#644B9F] to-[#7557b3] shadow-lg shadow-[#644B9F]/30 hover:shadow-[#644B9F]/50 hover:scale-110 transition-all duration-300">
                <ShoppingCart className="h-4 w-4 text-white" />
              </button>
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-br from-gray-900 to-gray-700 text-white text-[10px] rounded-full flex items-center justify-center font-bold shadow-md">
                0
              </span>
            </div> */}

            {/* Emergency */}
            <div className="flex items-center gap-5 bg-white/60 backdrop-blur-sm rounded-full px-3 py-2 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-10 w-10 rounded-full bg-linear-to-br from-purple-50 to-purple-100 flex items-center justify-center shadow-sm">
                {/* <PhoneCall className="h-4 w-4 text-[#644B9F]" /> */}
                <img src="phone.gif" alt="" />
              </div>
              <div className="leading-tight">
                <p className="text-[14px] uppercase text-gray-500 font-semibold tracking-wider">
                  EMERGENCY LINE:
                </p>
                <p className="text-md font-bold text-gray-900 whitespace-nowrap">
                  03 9923 8248
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                <img src="/grid-icon.svg" alt="" />
              </div>
            </div>

            {/* Button */}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-[#644B9F] via-[#7557b3] to-[#644B9F] text-white text-[16px] font-bold uppercase tracking-wider shadow-lg shadow-[#644B9F]/40 hover:shadow-[#644B9F]/60 hover:scale-105 transition-all duration-300 whitespace-nowrap">
              MAKE AN APPOINTMENT
              <span className="text-sm">↗</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full bg-purple-50 text-slate-800"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {isMobileOpen && (
          <div className="mt-3 lg:hidden">
            <div className="bg-white rounded-2xl shadow-md py-3 px-4 space-y-2">
              {navItems.map((item, idx) => (
                <button
                  key={item}
                  className={`w-full flex items-center justify-between text-sm py-2 border-b last:border-b-0 text-left ${idx === 0
                      ? "text-[#644B9F] font-semibold"
                      : "text-slate-700"
                    }`}
                >
                  <span>{item}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              ))}

              {/* Mobile emergency + CTA */}
              <div className="pt-3 border-t mt-2 space-y-3">
                <div className="flex items-center gap-3 bg-[#f4f7ff] rounded-2xl px-3 py-2">
                  <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#644B9F]" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">
                      Emergency Line:
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      +91-234-567-8900
                    </p>
                  </div>
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[#644B9F] to-[#7557b3] text-sm font-semibold text-white shadow-md">
                  <span>Make an appointment</span>
                  <span className="text-lg leading-none">↗</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
