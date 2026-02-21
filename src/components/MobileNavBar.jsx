import { bool, func } from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../constants/navLinks.js";
import { NavLink } from "react-router-dom";

export default function MobileNavBar({ open, setOpen }) {
  function closeNavBar() {
    setOpen(false);
  }
  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          onClick={closeNavBar}
          className="fixed inset-0 z-40 bg-transparent md:hidden"
        ></div>
      )}

      {/* DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="fixed right-0 top-0 z-50 h-full w-[70vw] max-w-64 bg-blue-900/15 backdrop-blur-[80px] pl-8 md:hidden"
          >
            <div className="flex px-6 py-8">
              <button
                type="button"
                onClick={closeNavBar}
                className="ml-auto flex size-6 cursor-pointer items-center justify-center"
              >
                <img
                  src="/assets/shared/icon-close.svg"
                  alt="Close mobile nav bar"
                  className="h-full w-full"
                />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav>
              <ul className="flex flex-col gap-8">
                {NAV_LINKS.map((navLink) => {
                  const { name, index, path } = navLink;

                  return (
                    <li key={index} className="w-full">
                      <NavLink
                        to={path}
                        className={({ isActive, isPending }) =>
                          `flex gap-3 border-r-[3px] transition-colors focus-visible:outline-none focus-visible:border-white/75 cursor-pointer duration-500 text-white hover:border-white/50 capitalize ${isActive ? "border-white" : isPending ? "border-white/50" : "border-transparent"} `
                        }
                      >
                        <span className="desktop-text-preset-8-bold">
                          {index}
                        </span>
                        <span className="desktop-text-preset-8">{name}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

MobileNavBar.propTypes = {
  open: bool,
  setOpen: func,
};
