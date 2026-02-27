import { useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header.jsx";
import useData from "../hooks/useData.jsx";
import { AnimatePresence, motion } from "framer-motion";

export default function Technology() {
  const { technology } = useData();
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const activeTech = technology[activeTechIndex];
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
        setActiveTechIndex((prev) =>
          prev === technology.length - 1 ? 0 : prev + 1
        );
      }
    }, INTERVAL_DURATION);
  }, [technology.length]);

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

  function updateActiveTechIndex(index) {
    setActiveTechIndex(index);
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-900 bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-size-[100%_100%]">
      <Header />
      <main className="flex-1 p-6 space-y-6 max-w-7xl py-12 lg:mx-auto">
        <h1 className="uppercase flex gap-6 text-white mobile-text-preset-6 justify-center md:justify-start md:tablet-text-preset-5 lg:desktop-text-preset-5">
          <span className="font-bold opacity-25">03</span>
          <span>space launch 101</span>
        </h1>
        <div
          className="flex flex-col gap-8 py-10 lg:flex-row"
          onMouseEnter={() => setSlideShowPaused(true)}
          onMouseLeave={() => setSlideShowPaused(false)}
        >
          <div className="flex-1 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.span
                className="flex items-center justify-center h-95 max-w-full md:h-111 lg:h-full"
                key={activeTechIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <picture className="w-full h-full">
                  <source
                    media="(min-width: 1024px)"
                    srcSet={activeTech.images.portrait}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={activeTech.images.landscape}
                  />
                  <img
                    src={activeTech.images.portrait}
                    alt={`Image of ${activeTech.name}`}
                    className="w-full h-full"
                  />
                </picture>
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex-1 flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="flex justify-center items-center gap-4 lg:flex-col">
              {technology.map((tech, index) => {
                return (
                  <button
                    type="button"
                    key={`${tech}-${index}`}
                    className={`size-10 md:size-14 lg:size-20 md:tablet-text-preset-4 lg:desktop-text-preset-4 rounded-full mobile-text-preset-4 ${activeTechIndex === index ? "text-blue-900 bg-white border-white" : "text-white border-white/25"} transition-all duration-300 border hover:border-white cursor-pointer`}
                    onClick={() => updateActiveTechIndex(index)}
                    aria-label={`Select ${activeTech.name}`}
                    aria-pressed={activeTechIndex === index}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="flex lg:items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTechIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-4 lg:space-y-6"
                >
                  <h2 className="flex flex-col gap-4 text-white uppercase text-center lg:text-left">
                    <span className="mobile-text-preset-4 opacity-50 md:tablet-text-preset-4 lg:desktop-text-preset-4">
                      the terminology...
                    </span>
                    <span className="mobile-text-preset-3 md:tablet-text-preset-3 lg:desktop-text-preset-3">
                      {activeTech.name}
                    </span>
                  </h2>
                  <p className="text-blue-300 text-center mobile-text-preset-9 md:tablet-text-preset-9 lg:text-left lg:desktop-text-preset-9">
                    {activeTech.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
