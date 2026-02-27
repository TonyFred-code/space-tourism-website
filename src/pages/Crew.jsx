import Header from "../components/Header.jsx";
import { AnimatePresence, motion } from "framer-motion";
import useData from "../hooks/useData.jsx";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Crew() {
  const { crew } = useData();
  const [activeCrewMemberIndex, setActiveCrewMemberIndex] = useState(0);
  const activeCrewMember = crew[activeCrewMemberIndex];
  const intervalRef = useRef(null);
  const [slideShowPaused, setSlideShowPaused] = useState(false);
  const slideShowPausedRef = useRef(null);
  const INTERVAL_DURATION = 5000; // 5 SECONDS

  useEffect(() => {
    slideShowPausedRef.current = slideShowPaused;
  }, [slideShowPaused]);

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!slideShowPausedRef.current) {
        setActiveCrewMemberIndex((prev) =>
          prev === crew.length - 1 ? 0 : prev + 1
        );
      }
    }, INTERVAL_DURATION);
  }, [crew.length]);

  useEffect(() => {
    function handleVisibilityChange() {
      setSlideShowPaused(document.hidden);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (slideShowPaused) {
      clearInterval(intervalRef.current);
      return;
    }
    startInterval();

    return () => clearInterval(intervalRef.current);
  }, [startInterval, slideShowPaused]);

  function updateActiveCrewMemberIndex(index) {
    setActiveCrewMemberIndex(index);
  }

  return (
    <div className="bg-blue-900 bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-size-[100%_100%] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6 flex flex-col gap-6 lg:py-12 lg:mx-auto lg:max-w-6xl">
        <h1 className="uppercase flex gap-6 text-white mobile-text-preset-6 justify-center md:justify-start md:tablet-text-preset-5 lg:desktop-text-preset-5">
          <span className="font-bold opacity-25">02</span>
          <span>meet your crew</span>
        </h1>
        <div
          className="flex flex-col gap-6 lg:flex-row lg:gap-8"
          onMouseEnter={() => setSlideShowPaused(true)}
          onMouseLeave={() => setSlideShowPaused(false)}
        >
          <motion.div
            key={activeCrewMemberIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-1 flex flex-col gap-6 md:max-w-lg md:mx-auto md:w-full lg:max-w-135 lg:justify-center"
          >
            <div className="space-y-6 py-10">
              <h1 className="flex flex-col gap-2 uppercase items-center lg:items-start md:gap-4">
                <span className="mobile-text-preset-4 md:tablet-text-preset-4 text-white/50 lg:desktop-text-preset-4">
                  {activeCrewMember.role}
                </span>
                <span className="mobile-text-preset-3 lg:desktop-text-preset-3 md:tablet-text-preset-3 text-white">
                  {activeCrewMember.name}
                </span>
              </h1>
              <p className="text-blue-300 mobile-text-preset-9 lg:desktop-text-preset-9 md:tablet-text-preset-9 text-center lg:text-left">
                {activeCrewMember.bio}
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center lg:justify-start lg:gap-10">
              {crew.map((crewMember, index) => {
                return (
                  <button
                    type="button"
                    key={crewMember.name}
                    className={`size-2.5 lg:size-3.75 rounded-full ${activeCrewMemberIndex === index ? "bg-white" : "bg-white/15"} cursor-pointer hover:bg-white/50`}
                    onClick={() => updateActiveCrewMemberIndex(index)}
                    aria-label={`Select ${crewMember.name}`}
                    aria-pressed={activeCrewMemberIndex === index}
                  ></button>
                );
              })}
            </div>
          </motion.div>
          <div className="flex-1 flex items-end justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                className="flex items-center justify-center min-w-68 md:min-w-110 lg:min-w-135"
                key={activeCrewMemberIndex}
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <img
                  src={activeCrewMember.images.webp}
                  alt={`Image of ${activeCrewMember.name}`}
                  className="w-full h-full mask-[linear-gradient(to_bottom,#D9D9D9_77%,transparent_100%)]"
                />
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
