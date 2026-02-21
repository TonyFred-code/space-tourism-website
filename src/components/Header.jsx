import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import MobileNavBar from "./MobileNavBar.jsx";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center lg:pt-10">
        <div className="flex flex-1 items-center px-6 py-6 md:flex-none md:px-10 md:py-6 lg:flex-1 lg:gap-16 lg:pr-0 lg:pl-16">
          <Link
            className="flex size-10 items-center justify-center md:size-12 cursor-pointer focus-visible:outline-none hover:ring-8 transition-shadow duration-200 rounded-full hover:ring-white/10"
            to={"/"}
          >
            <span className="sr-only">Home</span>
            <img
              src="/assets/shared/logo.svg"
              className="h-full w-full"
              alt=""
            />
          </Link>
          <hr className="z-10 hidden h-px flex-1 text-white opacity-25 lg:flex" />
        </div>
        <NavBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
      <MobileNavBar open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </>
  );
}
