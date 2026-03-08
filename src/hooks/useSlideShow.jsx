import { useCallback, useEffect, useRef, useState } from "react";

export default function useSlideShow(updateSlideShow) {
  const [slideShowPaused, setSlideShowPaused] = useState(false);
  const slideShowPausedRef = useRef(null);
  const intervalRef = useRef(null);
  const INTERVAL_DURATION = 5_000; // 5 SECONDS

  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!slideShowPausedRef.current) {
        updateSlideShow();
      }
    }, INTERVAL_DURATION);
  }, [updateSlideShow]);

  useEffect(() => {
    slideShowPausedRef.current = slideShowPaused;
  }, [slideShowPaused]);

  // PAUSE ON LEAVE PAGE (VISIBILITY CHANGE)
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
  }, [slideShowPaused, startInterval]);

  const pauseSlideShow = () => setSlideShowPaused(true);

  const resumeSlideShow = () => setSlideShowPaused(false);

  return { resumeSlideShow, pauseSlideShow, startInterval };
}
