import { motion } from "framer-motion";
import StarField from "./helpers/StarField.jsx";

const orbitVariants = {
  animate: {
    rotate: 360,
    transition: { duration: 6, repeat: Infinity, ease: "linear" },
  },
};

const orbitVariants2 = {
  animate: {
    rotate: -360,
    transition: { duration: 10, repeat: Infinity, ease: "linear" },
  },
};

const orbitVariants3 = {
  animate: {
    rotate: 360,
    transition: { duration: 15, repeat: Infinity, ease: "linear" },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.85, 1, 0.85],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
  },
};

const dotVariants = {
  animate: (i) => ({
    opacity: [0, 1, 0],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};

export default function LoadingScreen() {
  return (
    <>
      <div className="relative min-h-screen bg-blue-900 flex flex-col items-center justify-center font-bellefair">
        <StarField />
        {/* Nebula glow blobs */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(100,120,255,0.07) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(180,100,255,0.06) 0%, transparent 70%)",
            top: "30%",
            left: "30%",
            pointerEvents: "none",
          }}
        />

        {/* Orrery */}
        <div className="relative size-55">
          {/* Orbit rings */}
          {[110, 80, 54].map((size, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: size * 2,
                height: size * 2,
                marginTop: -size,
                marginLeft: -size,
                borderRadius: "50%",
                border: "1px solid rgba(208, 214, 249, 0.12)",
              }}
            />
          ))}

          {/* Outer orbit — slow */}
          <motion.div
            variants={orbitVariants3}
            animate="animate"
            className="size-55 absolute top-[50%] left-[50%] -mt-27.5 -ml-27.5"
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                marginLeft: -4,
                marginTop: -4,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#d0d6f9",
                boxShadow: "0 0 10px 3px rgba(208,214,249,0.5)",
              }}
            />
          </motion.div>

          {/* Mid orbit — medium */}
          <motion.div
            variants={orbitVariants2}
            animate="animate"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 160,
              height: 160,
              marginTop: -80,
              marginLeft: -80,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                marginLeft: -5,
                marginTop: -5,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#ffffff",
                boxShadow: "0 0 12px 4px rgba(255,255,255,0.4)",
              }}
            />
          </motion.div>

          {/* Inner orbit — fast */}
          <motion.div
            variants={orbitVariants}
            animate="animate"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 108,
              height: 108,
              marginTop: -54,
              marginLeft: -54,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                marginLeft: -4,
                marginTop: -4,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#a8b4ff",
                boxShadow: "0 0 8px 3px rgba(168,180,255,0.6)",
              }}
            />
          </motion.div>

          {/* Sun / core */}
          <motion.div
            variants={pulseVariants}
            animate="animate"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -20,
              marginLeft: -20,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #ffffff 20%, #d0d6f9 55%, #5566cc 100%)",
              boxShadow:
                "0 0 20px 6px rgba(208,214,249,0.4), 0 0 50px 15px rgba(100,120,255,0.2)",
            }}
          />
        </div>

        {/* Text below */}
        <div className="flex flex-col gap-3 absolute bottom-[15%] items-center">
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="mobile-text-preset-8 uppercase text-blue-300 mt-20"
          >
            Preparing for launch
          </motion.p>

          {/* Animated dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                custom={i}
                variants={dotVariants}
                animate="animate"
                className="size-1 rounded-[50%] bg-blue-300 block"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
