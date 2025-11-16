"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import FeaturesSection from "./FeaturesSectionTailwind";
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

/* -------------------- animation helpers -------------------- */

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/* -------------------- small data sets -------------------- */

const services = [
  {
    title: "Health Check",
    desc: "Comprehensive health assessments tailored to your needs.",
    icon: "🩺",
  },
  {
    title: "Personalized Care",
    desc: "Dedicated specialists for your complete medical journey.",
    icon: "👨‍⚕️",
  },
  {
    title: "24/7 Medicine",
    desc: "Round-the-clock pharmacy & emergency medicine support.",
    icon: "💊",
  },
];

const deptTabs = ["Healthcare", "Medical", "Neurology", "Orthopedic", "Dental"];

const worldClassServices = [
  { title: "Pediatrics", image: "/service1.jpg" },
  { title: "Cardiology", image: "/service2.jpg" },
  { title: "Diagnostics", image: "/service3.jpg" },
];

const statsTop = [
  { label: "Medical Center", value: "65%" },
  { label: "Success Cases", value: "93%" },
  { label: "Happy Patients", value: "89%" },
];

const doctors = [
  { name: "Dr. Bianca Smith", role: "Cardiologist", image: "/doctor1.jpg" },
  { name: "Dr. Liam River", role: "Neurologist", image: "/doctor2.jpg" },
  { name: "Dr. Amelia Joy", role: "Pediatrician", image: "/doctor3.jpg" },
  { name: "Dr. Alex Low", role: "Surgeon", image: "/doctor4.jpg" },
];

const plans = [
  {
    name: "Light",
    price: "24",
    color: "bg-white",
    highlight: false,
  },
  {
    name: "Standard",
    price: "56",
    color: "bg-primary-500 text-white",
    highlight: true,
  },
  {
    name: "Premium",
    price: "87",
    color: "bg-dark text-white",
    highlight: false,
  },
];

const blogs = [
  {
    image: "/blog1.jpg",
    title: "Only Person In Charge Of Their Own Good Health",
    date: "Dec 25, 2024",
  },
  {
    image: "/blog2.jpg",
    title: "Surprising Story Cure That Could Fit Your Life",
    date: "Dec 18, 2024",
  },
  {
    image: "/blog3.jpg",
    title: "We Are Among The Most Qualified Dental Implants",
    date: "Dec 10, 2024",
  },
];

/* -------------------- components -------------------- */

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Top mini bar */}
      <div className="hidden border-b border-slate-100 bg-primary-500/5 py-2 text-xs text-body md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <span>Welcome to Doctean medical center</span>
          <div className="flex gap-5">
            <span>Call: (808) 555-0111</span>
            <span>Email: support@doctean.com</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-card">
              <span className="text-xl font-bold">+</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-dark">
                Doctean
              </span>
              <span className="text-[11px] text-body">Medical & Health</span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-body md:flex">
            {["Home", "Departments", "Doctors", "Pages", "Blog", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  className="relative font-medium transition hover:text-primary-500"
                >
                  {item}
                </button>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-dark transition hover:border-primary-500 hover:text-primary-500 md:inline-flex">
              Login / Register
            </button>
            <button className="hidden rounded-full bg-primary-500 px-4 py-2 text-xs font-semibold text-white shadow-card hover:bg-primary-600 md:inline-flex">
              Get Appointment
            </button>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 md:hidden">
              ☰
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-lightBg pb-16 pt-8 md:pb-20 md:pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
        {/* left text */}
        <motion.div
          className="md:w-1/2"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeIn(0)}
            className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-500/5 px-3 py-1 text-[11px] font-medium text-primary-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            <span>We care for your health</span>
          </motion.div>

          <motion.h1
            variants={fadeUp(0.05)}
            className="text-3xl font-extrabold leading-tight text-dark md:text-5xl"
          >
            Best Medical <span className="text-primary-500">Experience</span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.12)}
            className="mt-4 text-sm text-body md:text-base"
          >
            A team of medical specialists dedicated to delivering world-class
            healthcare, combining modern technology with compassionate care.
          </motion.p>

          <motion.div
            variants={fadeUp(0.2)}
            className="mt-6 flex flex-wrap items-center gap-4"
          >
            <button className="rounded-full bg-primary-500 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-card hover:bg-primary-600">
              Make an Appointment
            </button>
            <button className="inline-flex items-center gap-2 text-xs font-semibold text-dark">
              ▶
              <span>Watch intro video</span>
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp(0.28)}
            className="mt-8 flex gap-8 text-xs text-body"
          >
            <div>
              <div className="text-2xl font-bold text-primary-500">275+</div>
              <div>Patients daily</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-500">96%</div>
              <div>Positive feedback</div>
            </div>
          </motion.div>
        </motion.div>

        {/* right visuals */}
        <motion.div
          className="relative md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative h-[360px] w-full overflow-hidden rounded-3xl bg-slate-200 shadow-card md:h-[420px]">
            <Image
              src="/hero-main.jpg"
              alt="Doctors"
              fill
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/25 via-transparent" />
          </div>

          {/* small overlay cards */}
          <motion.div
            className="absolute -bottom-6 left-4 flex gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/hero-doctor1.jpg"
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[11px]">
                <div className="font-semibold text-dark">24/7 Support</div>
                <div className="text-body">Always ready for emergencies</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/hero-doctor2.jpg"
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[11px]">
                <div className="font-semibold text-dark">Expert Team</div>
                <div className="text-body">Certified specialists</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* service cards row under hero */}
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <motion.div
          className="grid gap-5 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp(0.03 * i)}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-3xl bg-white p-6 shadow-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-xl">
                {s.icon}
              </div>
              <h3 className="text-sm font-semibold text-dark">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-body">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
};

/* -------------------- page -------------------- */

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
