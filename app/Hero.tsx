import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SideCutoutLeft: React.FC = () => (
  <svg
    width="180"
    height="300"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -76 45 183"
    className="absolute -left-14 top-1/2 -translate-y-1/2 -z-10"
  >
    <path d="M0-17V107C0 14 42 47 44 12 40-20 0 14 0-76Z" fill="#f4f7ff" />
  </svg>
);

const SideCutoutRight: React.FC = () => (
  <svg
    width="180"
    height="300"
    viewBox="0 -76 45 183"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -right-5 top-1/2 -translate-y-1/2 -z-10"
  >
    <path
      d="M0-17V107C0 14 42 47 44 12 40-20 0 14 0-76Z"
      fill="#f4f7ff"
      transform="scale(-1, 1) translate(-67, 0)"
    />
  </svg>
);

const ExploreCircle: React.FC = () => {
  return (
    <div className="relative h-36 w-36 flex items-center justify-center animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100">
        <defs>
          <path
            id="exploreCirclePath"
            d="
              M 50 50
              m -35, 0
              a 35,35 0 1,1 70,0
              a 35,35 0 1,1 -70,0
            "
          />
        </defs>

        <text
          fill="#ffffff"
          fontSize="9"
          letterSpacing="1.95"
          className="uppercase"
        >
          <textPath
            xlinkHref="#exploreCirclePath"
            startOffset="50%"
            textAnchor="middle"
          >
            • Explore More • Explore More •
          </textPath>
        </text>
      </svg>
    </div>
  );
};

// Title with per-letter animation
const AnimatedTitle: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split("Your");
  const lines =
    parts.length === 2 ? [parts[0], "Your" + parts[1]] : [text];

  let globalIndex = 0;

  return (
    <h1 className="text-4xl md:text-8xl font-semibold leading-tight mb-6">
      {lines.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split("").map((char) => {
            const delay = globalIndex * 40; // 40ms per letter
            const span = (
              <span
                key={globalIndex}
                className="inline-block animate-letterPop"
                style={{ animationDelay: `${delay}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
            globalIndex++;
            return span;
          })}
          {lineIndex !== lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h1>
  );
};

// Slides
const slides = [
  {
    tag: "Welcome to our community of care",
    title: "Better NDIS Outcomes",
    description:
      "We help NDIS organisations elevate participant outcomes through smarter systems, personalised strategies, and streamlined operations built for long-term care success.",
    backgroundImage: "/hero/hero-1.jpg",
  },
  {
    tag: "Guiding your NDIS journey",
    title: "Stronger Compliance",
    description:
      "We moved into healthcare consulting to empower NDIS organisations with streamlined processes, stronger compliance, and improved participant outcomes through support.",
    backgroundImage: "/hero/hero-2.jpg",
  },
  {
    tag: "Quality care, every day",
    title: "Efficient Care Delivery",
    description:
      "We partner with NDIS providers to modernise workflows, boost compliance ease, and create exceptional participant experiences through thoughtful, people-first consulting.",
    backgroundImage: "/hero/hero-3.jpg",
  },
];



const HeroBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="w-full h-[calc(100vh-8rem)] bg-[#f4f7ff] overflow-hidden flex items-center">
      <div className="w-full px-4 h-full">
        <div className="w-full h-full relative rounded-4xl overflow-hidden bg-slate-900 hero-container">
          {/* BACKGROUND CROSS-FADE */}
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 ${index === currentIndex
                  ? "opacity-100 animate-bgFadeIn"
                  : "opacity-0 animate-bgFadeOut"
                  }`}
              >
                <img
                  src={slide.backgroundImage}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/60 to-slate-900/0" />
              </div>
            ))}
          </div>

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-center">
            <div
              key={currentIndex} // re-mount to restart animations per slide
              className="container pl-8 md:pl-32 py-16 text-white"
            >
              {/* Tag - scale from center */}
              <span className="inline-block bg-[#644B9F] px-5 py-3 rounded-full text-[14px] uppercase tracking-widest font-semibold mb-5 animate-scaleInCenter">
                {currentSlide.tag}
              </span>

              {/* Title - per-letter animation */}
              <AnimatedTitle text={currentSlide.title} />

              {/* Explore + Description */}
              <div className="mt-10 flex items-center gap-6">
                {/* ExploreCircle + button - scale from center */}
                <div
                  className="relative h-36 w-36 flex items-center justify-center animate-scaleInCenter"
                  style={{ animationDelay: "150ms" }}
                >
                  <ExploreCircle />
                  <button
                    className="absolute top-11 z-10 h-14 w-14 rounded-full flex items-center justify-center bg-white/40 backdrop-blur-3xl shadow-md transition hover:scale-105"
                    aria-label="Explore more"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </button>
                </div>

                {/* Description - slide up from bottom */}
                <p
                  className="hidden md:block text-lg text-slate-100/70 max-w-100 animate-riseIn"
                  style={{ animationDelay: "250ms" }}
                >
                  {currentSlide.description}
                </p>
              </div>
            </div>
          </div>

          {/* LEFT ARROW BUTTON */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <SideCutoutLeft />
            <div className="relative">
              <button
                aria-label="Previous"
                onClick={handlePrev}
                className="h-14 w-14 absolute -top-8 rounded-full cursor-pointer bg-white flex items-center justify-center shadow-lg hover:scale-105 transition ml-2.5"
              >
                <ArrowLeft className="h-6 w-6 text-slate-900" />
              </button>
            </div>
          </div>

          {/* RIGHT ARROW BUTTON */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <SideCutoutRight />
            <div className="relative">
              <button
                aria-label="Next"
                onClick={handleNext}
                className="h-14 w-14 rounded-full absolute -top-8 -left-16.5 cursor-pointer bg-white flex items-center justify-center shadow-lg hover:scale-105 transition mr-2.5"
              >
                <ArrowRight className="h-6 w-6 text-slate-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
