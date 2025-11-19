"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Header from "./Header";
import HeroBanner from "./Hero";
import ClientLogos from "./ClientLogos";
import NewsUpdates from "./NewsUpdates";
import ServiceOverview from "./ServiceOverview";
import AboutUsOverview from "./AboutUsOverview";
import ContactUs from "./ContactUs";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import FloatingChat from "./FloatingChat";

const Page: React.FC = () => {
  return (
    // <FeaturesSection accentColor="#000000" accentPosition="top-right"/>
    <>
      <Header />
      <HeroBanner />
      <ClientLogos />
      <NewsUpdates />
      <ServiceOverview />
      <AboutUsOverview />
      <ContactUs />
      <Testimonials />
      <Footer />
      <FloatingChat />
      {/* <FeaturesSection /> */}
    </>
  );
};

export default Page;
