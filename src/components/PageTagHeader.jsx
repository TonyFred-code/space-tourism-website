import { motion } from "framer-motion";
import { string } from "prop-types";

export default function PageTagHeader({ index, content }) {
  return (
    <motion.h1
      className="uppercase flex gap-6 text-white mobile-text-preset-6 justify-center md:justify-start md:tablet-text-preset-5 lg:desktop-text-preset-5"
      key={index}
      initial={{ x: -30 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <span className="font-bold opacity-25">{index}</span>
      <span>{content}</span>
    </motion.h1>
  );
}

PageTagHeader.propTypes = {
  index: string.isRequired,
  content: string.isRequired,
};
