import { useEffect, useState } from "react";
import fetchData from "./helpers/fetchData.js";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen.jsx";
import DataContext from "./context/DataContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const LOADER_DURATION = { min: 1400, max: 1599 };
    const startTime = Date.now();
    fetchData()
      .then((d) => {
        setData(d);
      })
      .finally(() => {
        const elapsed = Date.now() - startTime;
        const targetDelayDuration = Math.floor(
          Math.random() * (LOADER_DURATION.max - LOADER_DURATION.min + 1) +
            LOADER_DURATION.min
        );
        const remainingTime = Math.max(0, targetDelayDuration - elapsed);
        // Time calculations ensure delay duration does not go beyond targetDelayDuration

        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key={"loader"}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key={"app"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <DataContext.Provider value={data}>
            <RouterProvider router={router} />
          </DataContext.Provider>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
