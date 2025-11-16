import React from "react";
import { MapPin, Mail, Phone, Bell, Facebook, Twitter, Instagram, Linkedin, Dribbble } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a0e27] text-white overflow-hidden">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            {/* <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <div className="text-white text-2xl font-bold">+</div>
              </div>
              <span className="text-2xl font-bold">Doctean</span>
            </div> */}
            <div className="flex items-center gap-3 shrink-0 group cursor-pointer mb-6">
              <img src="/HC-Logo-Final.svg" alt="" className="w-60" />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              From wellness tips to expert advice, we're here to support your journey to a healthier you. Our team of dedicated healthcare providers has years of experience and expertise.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {["About Us", "Team Member", "Pricing Plans", "Contact Us", "Portfolio Sortable"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Department */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Department</h3>
            <ul className="space-y-3">
              {["Radiation Therapy", "Orthopedics", "Dental Care", "Cardiology", "Neurology"].map((dept) => (
                <li key={dept}>
                  <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hour */}
          <div>
            <h3 className="text-xl font-bold mb-6">Opening Hour</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Mon - Tues</span>
                <span className="text-white">09:00AM - 6:00PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Wed - Thu</span>
                <span className="text-white">09:00AM - 6:00PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fri - Sat</span>
                <span className="text-white">09:00AM - 6:00PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white">Emergency Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-full p-8 mb-8 backdrop-blur-lg border border-blue-700/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase mb-1">Medical Address</div>
                <div className="text-white font-medium">Unit 5/99-101 Western Ave, Westmeadows VIC 3049, Australia</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase mb-1">Email Address</div>
                <div className="text-white font-medium">enquiries@healthcareconsultingaus.com.au</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase mb-1">Emergency Line</div>
                <div className="text-white font-medium">03 9923 8248</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2025 All Rights Reserved | Health Care Consulting
          </p>
          <div className="flex gap-3">
            {[
              { icon: Twitter, label: "Twitter" },
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Dribbble, label: "Dribbble" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white transition"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
