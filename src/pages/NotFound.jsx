import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import AstronautSVG from "../components/helpers/AstronautSVG.jsx";
import StarField from "../components/helpers/StarField.jsx";

const glitch = {
  animate: {
    x: [0, -3, 3, -2, 2, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatDelay: 4,
      ease: "easeInOut",
    },
  },
};

const float = {
  animate: {
    y: [0, -18, 0],
    rotate: [0, 4, -4, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function NotFound() {
  const location = useLocation();
  return (
    <div className="relative min-h-screen bg-blue-900 overflow-hidden flex flex-col">
      <StarField />
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-12 px-6 relative">
        {/* Floating astronaut */}
        <motion.div
          variants={float}
          animate="animate"
          style={{
            filter: "drop-shadow(0 0 24px rgba(208,214,249,0.15))",
          }}
          className="w-35 h-46.5 mb-8"
        >
          <AstronautSVG />
        </motion.div>

        {/* 404 */}
        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
          <motion.h1
            variants={glitch}
            animate="animate"
            style={{
              fontFamily: "'Bellefair', serif",
              fontSize: "clamp(80px, 20vw, 200px)",
              lineHeight: 1,
              color: "transparent",
              WebkitTextStroke: "1px rgba(208,214,249,0.3)",
              letterSpacing: "0.05em",
              userSelect: "none",
              margin: 0,
            }}
          >
            404
          </motion.h1>
          {/* Glitch layer */}
          <motion.h1
            animate={{
              x: [0, 4, -4, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 4.1,
            }}
            style={{
              fontFamily: "'Bellefair', serif",
              fontSize: "clamp(80px, 20vw, 200px)",
              lineHeight: 1,
              color: "rgba(208,214,249,0.4)",
              letterSpacing: "0.05em",
              position: "absolute",
              top: 0,
              left: 0,
              margin: 0,
              pointerEvents: "none",
            }}
          >
            404
          </motion.h1>
        </div>

        {/* Lost signal line */}
        <div className="mb-4 gap-4 flex items-center">
          <div className="h-px w-10 bg-blue-300/20" />
          <p className="mobile-text-preset-8 text-blue-300/50 uppercase">
            signal lost
          </p>
          <div className="h-px w-10 bg-blue-300/20" />
        </div>

        {/* Title */}
        <h2
          className="uppercase mb-4 text-center text-white"
          style={{
            fontFamily: "'Bellefair', serif",
            fontSize: "clamp(24px, 5vw, 48px)",
          }}
        >
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-center max-w-105 text-blue-300 mobile-text-preset-9 mb-10">
          Your quest into deep space has ventured beyond the known universe. The
          coordinates you entered don&apos;t match any known destination.
        </p>

        {/* CTA */}
        <div>
          <Link
            to="/"
            className="uppercase text-blue-900 mobile-text-preset-9 bg-white py-4 px-10 inline-block hover:scale-105 duration-300 ease-in-out transition-all shadow-none rounded-full hover:ring-8 hover:ring-white/15"
          >
            Return to Mission Control
          </Link>
        </div>

        {/* Coordinates decoration */}
        <p className="mt-12 uppercase text-white/70 mobile-text-preset-8">
          location: {location.pathname} — unknown sector
        </p>
      </main>
    </div>
  );
}
