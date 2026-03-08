import { AnimatePresence, motion } from "framer-motion";
import useData from "../hooks/useData.jsx";
import { useState } from "react";
import useSlideShow from "../hooks/useSlideShow.jsx";
import PageTagHeader from "../components/PageTagHeader.jsx";
import PageWrapper from "../components/helpers/PageWrapper.jsx";

export default function Crew() {
  const { crew } = useData();
  const [activeCrewMemberIndex, setActiveCrewMemberIndex] = useState(0);
  const { pauseSlideShow, resumeSlideShow, startInterval } = useSlideShow(
    () => {
      setActiveCrewMemberIndex((prev) =>
        prev === crew.length - 1 ? 0 : prev + 1
      );
    }
  );
  const activeCrewMember = crew[activeCrewMemberIndex];

  function updateActiveCrewMemberIndex(index) {
    setActiveCrewMemberIndex(index);
    startInterval();
  }

  return (
    <PageWrapper
      mobileBgImageSrc={"/assets/crew/background-crew-mobile.jpg"}
      tabletBgImageSrc={"/assets/crew/background-crew-tablet.jpg"}
      desktopBgImageSrc={"/assets/crew/background-crew-desktop.jpg"}
    >
      <main className="flex-1 p-6 flex flex-col gap-6 lg:py-12 lg:mx-auto lg:max-w-6xl">
        <PageTagHeader index={"02"} content={"meet your crew"} />
        <div
          className="flex flex-col gap-6 lg:flex-row lg:gap-8"
          onMouseEnter={pauseSlideShow}
          onMouseLeave={resumeSlideShow}
        >
          <div className="flex-1 flex flex-col gap-6 md:max-w-lg md:mx-auto md:w-full lg:max-w-135 lg:justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCrewMemberIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-6 py-10 flex-1 flex flex-col justify-center"
              >
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
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2 justify-center items-center lg:justify-start lg:gap-10">
              {crew.map((crewMember, index) => {
                return (
                  <button
                    type="button"
                    key={crewMember.name}
                    className={`size-2.5 lg:size-3.75 rounded-full ${activeCrewMemberIndex === index ? "bg-white" : "bg-white/15"} cursor-pointer hover:bg-white/50 transition-all duration-300`}
                    onClick={() => updateActiveCrewMemberIndex(index)}
                    aria-label={`Select ${crewMember.name}`}
                    aria-pressed={activeCrewMemberIndex === index}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="flex-1 flex items-end justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                className="flex items-center justify-center max-w-68 md:max-w-110 lg:max-w-135"
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
    </PageWrapper>
  );
}
