import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../constants/navLinks.js";
import { bool, func } from "prop-types";

export default function NavBar({ mobileMenuOpen, setMobileMenuOpen }) {
  function toggleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav className="flex flex-1 items-center justify-end lg:-ml-8">
      <ul className="hidden max-w-3xl flex-1 justify-end gap-12 bg-white/5 px-10 backdrop-blur-[80px] md:flex lg:pr-16 lg:pl-32">
        {NAV_LINKS.map((navLink) => {
          const { index, name, path } = navLink;

          return (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  `desktop-text-preset-8 flex items-center gap-3 border-b-[3px] py-[38.5px] text-white uppercase transition-colors hover:border-b-white/50 focus-visible:outline-none focus-visible:border-white/75 cursor-pointer duration-300 ${isActive ? "border-b-white" : isPending ? "border-b-white/50" : "border-b-transparent"}`
                }
              >
                <span className="desktop-text-preset-8-bold">{index}</span>
                <span>{name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="pr-6 md:hidden">
        <button
          className="flex h-5.25 w-6 cursor-pointer items-center justify-center"
          onClick={toggleMobileMenuOpen}
        >
          <img src="/assets/shared/icon-hamburger.svg" alt="" />
        </button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  mobileMenuOpen: bool,
  setMobileMenuOpen: func,
};
