import { Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import WarningSVG from "../components/helpers/WarningSVG.jsx";
import StarField from "../components/helpers/StarField.jsx";

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

export default function GeneralError() {
  const error = useRouteError();

  const status = error?.status || error?.statusCode || "ERR";
  const statusText =
    error?.statusText || error?.message || "An unexpected error occurred";

  return (
    <div className="relative bg-blue-900 flex flex-col overflow-hidden min-h-screen">
      <StarField />
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center relative py-10 px-6">
        {/* Floating warning icon */}
        <motion.div
          variants={float}
          animate="animate"
          style={{
            filter: "drop-shadow(0 0 24px rgba(208,214,249,0.12))",
          }}
          className="size-30 mb-8"
        >
          <WarningSVG />
        </motion.div>

        {/* Status code */}
        <div className="relative mb-6">
          <h1
            style={{
              fontFamily: "'Bellefair', serif",
              fontSize: "clamp(80px, 20vw, 200px)",
              lineHeight: 1,
              WebkitTextStroke: "1px rgba(208,214,249,0.3)",
              letterSpacing: "0.05em",
            }}
            className="select-none text-transparent"
          >
            {status}
          </h1>
        </div>

        {/* System failure line */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10 bg-blue-300/20" />
          <p className="uppercase text-blue-300/50 mobile-text-preset-8">
            system failure
          </p>
          <div className="h-px w-10 bg-blue-300/20" />
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Bellefair', serif",
            fontSize: "clamp(24px, 5vw, 48px)",
          }}
          className="text-white uppercase text-center mb-4"
        >
          Mission Aborted
        </h2>

        {/* Error message */}
        <p className="mb-2 max-w-105 text-center text-blue-300 mobile-text-preset-9">
          {statusText}
        </p>

        <p className="max-w-105 mb-10 text-center mobile-text-preset-9 text-blue-300/50">
          An unexpected anomaly has disrupted the mission. Ground control has
          been notified.
        </p>

        {/* CTA - Call To Action */}
        <div>
          <Link
            to="/"
            className="hover:ring-8 hover:ring-white/10 hover:scale-105 mobile-text-preset-8 uppercase bg-white text-blue-900 py-4 px-10 transition-all duration-300 ease-in inline-block rounded-full "
          >
            Return to Mission Control
          </Link>
        </div>

        {/* Error code (decoration) */}
        <p className="mt-12 uppercase text-blue-300/20 mobile-text-preset-8">
          error ref: {crypto.randomUUID().split("-")[0]} — deep space relay
        </p>
      </main>
    </div>
  );
}
