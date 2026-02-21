import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import MobileNavBar from "./components/MobileNavBar";
import { useState } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="cover flex min-h-screen flex-col bg-blue-900 bg-[url('/assets/home/background-home-mobile.jpg')] bg-no-repeat md:bg-[url('/assets/home/background-home-tablet.jpg')] bg-size-[100%_100%] lg:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Outlet />
      <MobileNavBar open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </div>
  );
}
