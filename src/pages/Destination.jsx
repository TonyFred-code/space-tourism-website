import { useState } from "react";
import useData from "../hooks/useData.jsx";
import { AnimatePresence, motion } from "framer-motion";
import useSlideShow from "../hooks/useSlideShow.jsx";
import PageTagHeader from "../components/PageTagHeader.jsx";
import PageWrapper from "../components/helpers/PageWrapper.jsx";

export default function Destination() {
  const { destinations } = useData();
  const [activeDestinationIndex, setActiveDestinationIndex] = useState(0);
  const { resumeSlideShow, pauseSlideShow, startInterval } = useSlideShow(
    () => {
      setActiveDestinationIndex((prev) =>
        prev === destinations.length - 1 ? 0 : prev + 1
      );
    }
  );
  const activeDestination = destinations[activeDestinationIndex];

  function updateActiveDestinationIndex(index) {
    setActiveDestinationIndex(index);
    startInterval();
  }

  return (
    <PageWrapper
      mobileBgImageSrc={"/assets/destination/background-destination-mobile.jpg"}
      tabletBgImageSrc={"/assets/destination/background-destination-tablet.jpg"}
      desktopBgImageSrc={
        "/assets/destination/background-destination-desktop.jpg"
      }
    >
      <main className="flex-1 p-6 md:p-10 flex flex-col gap-6 max-w-6xl mx-auto lg:pt-12 w-full">
        <PageTagHeader index={"01"} content={"pick your destination"} />
        <div
          className="flex flex-col gap-8 items-center lg:flex-row"
          onMouseEnter={pauseSlideShow}
          onMouseLeave={resumeSlideShow}
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
                  src={activeDestination.images.webp}
                  className="w-full h-full"
                  alt={`Image of ${activeDestination.name}`}
                />
              </motion.span>
            </AnimatePresence>
          </div>
          {/* TAB CONTENT */}
          <div className="flex flex-col md:py-10.5 max-w-lg flex-1 gap-6 lg:gap-10 lg:max-w-111">
            <div className="flex gap-8 justify-center lg:justify-start">
              {destinations.map((destination, index) => {
                return (
                  <button
                    type="button"
                    className={`border-b-transparent border-b-3 pb-2.5 cursor-pointer hover:border-b-white/50 mobile-text-preset-8 md:desktop-text-preset-8 ${activeDestinationIndex === index ? "text-white border-b-white" : "text-blue-300"}`}
                    key={destination.name}
                    onClick={() => updateActiveDestinationIndex(index)}
                  >
                    {destination.name}
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
                    {activeDestination.name}
                  </h1>
                  <p className="text-center text-white mobile-text-preset-9 md:tablet-text-preset-9 lg:text-left">
                    {activeDestination.description}
                  </p>
                </article>
                <hr className="w-full h-px text-white opacity-25" />
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center lg:justify-start lg:text-left">
                  <article className="space-y-3 flex-1">
                    <h2 className="desktop-text-preset-7 uppercase text-blue-300">
                      avg. distance
                    </h2>
                    <p className="desktop-text-preset-6 text-white uppercase">
                      {activeDestination.distance}
                    </p>
                  </article>
                  <article className="space-y-3 flex-1">
                    <h2 className="desktop-text-preset-7 uppercase text-blue-300">
                      est. travel time
                    </h2>
                    <p className="desktop-text-preset-6 text-white uppercase">
                      {activeDestination.travel}
                    </p>
                  </article>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
