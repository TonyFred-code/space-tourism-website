import { motion } from "framer-motion";

const NUM_STARS = 150;
const stars = Array.from({ length: NUM_STARS }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 2,
}));

export default function StarField() {
  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: "white",
            pointerEvents: "none",
          }}
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
