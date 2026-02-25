import { useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header.jsx";
import useData from "../hooks/useData.jsx";
import { AnimatePresence, motion } from "framer-motion";

export default function Destination() {
  const { destinations } = useData();
  const intervalRef = useRef(null);
  const [activeDestinationIndex, setActiveDestinationIndex] = useState(0);
  const [slideShowPaused, setSlideShowPaused] = useState(false);
  const tabs = [];
  const tabContent = [];
  const tabImages = [];
  const INTERVAL_DURATION = 5000; // 5 SECONDS;

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      if (!slideShowPaused) {
        setActiveDestinationIndex((prev) =>
          prev === destinations.length - 1 ? 0 : prev + 1
        );
      }
    }, INTERVAL_DURATION);
  }, [destinations.length, slideShowPaused]);

  function resetInterval() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    startInterval();
  }

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

  destinations.forEach((destination, index) => {
    tabs[index] = destination.name;
    tabContent[index] = {
      description: destination.description,
      distance: destination.distance,
      travel: destination.travel,
    };
    tabImages[index] = destination.images;
  });

  function updateActiveDestinationIndex(index) {
    setActiveDestinationIndex(index);
    resetInterval();
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-900 bg-size-[100%_100%] bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-no-repeat">
      <Header />
      <main className="flex-1 p-6 md:p-10 flex flex-col gap-6 max-w-6xl mx-auto lg:pt-12 w-full">
        <h1 className="uppercase flex gap-6 text-white mobile-text-preset-6 justify-center md:justify-start md:tablet-text-preset-5 lg:desktop-text-preset-5">
          <span className="font-bold opacity-25">01</span>
          <span className="">pick your destination</span>
        </h1>
        <div
          className="flex flex-col gap-8 items-center lg:flex-row"
          onMouseEnter={() => setSlideShowPaused(true)}
          onMouseLeave={() => setSlideShowPaused(false)}
        >
          {/* ACTIVE TAB IMAGE */}
          <div className="flex justify-center py-7 flex-1 lg:py-32">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeDestinationIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center justify-center size-37.5 md:size-75 lg:size-120"
              >
                <img
                  src={tabImages[activeDestinationIndex].webp}
                  className="w-full h-full"
                  alt=""
                />
              </motion.span>
            </AnimatePresence>
          </div>

          {/* TAB CONTENT */}
          <div className="flex flex-col md:py-10.5 max-w-lg flex-1 gap-6 lg:gap-10 lg:max-w-111">
            <div className="flex gap-8 justify-center lg:justify-start">
              {tabs.map((tab, index) => {
                return (
                  <button
                    type="button"
                    className={`border-b-transparent border-b-3 pb-2.5 cursor-pointer hover:border-b-white/50 mobile-text-preset-8 md:desktop-text-preset-8 ${activeDestinationIndex === index ? "text-white border-b-white" : "text-blue-300"}`}
                    key={tab}
                    onClick={() => updateActiveDestinationIndex(index)}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDestinationIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-6"
              >
                <article className="flex flex-col gap-4 items-center lg:items-start">
                  <h1 className="mobile-text-preset-2 md:desktop-text-preset-2 uppercase text-white">
                    {tabs[activeDestinationIndex]}
                  </h1>
                  <p className="text-center text-white mobile-text-preset-9 md:tablet-text-preset-9 lg:text-left">
                    {tabContent[activeDestinationIndex].description}
                  </p>
                </article>
                <hr className="w-full h-px text-white opacity-25" />
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center lg:justify-start lg:text-left">
                  <article className="space-y-3 flex-1">
                    <h2 className="desktop-text-preset-7 uppercase text-blue-300">
                      avg. distance
                    </h2>
                    <p className="desktop-text-preset-6 text-white uppercase">
                      {tabContent[activeDestinationIndex].distance}
                    </p>
                  </article>
                  <article className="space-y-3 flex-1">
                    <h2 className="desktop-text-preset-7 uppercase text-blue-300">
                      est. travel time
                    </h2>
                    <p className="desktop-text-preset-6 text-white uppercase">
                      {tabContent[activeDestinationIndex].travel}
                    </p>
                  </article>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
