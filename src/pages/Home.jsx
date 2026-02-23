import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-900 bg-[url('/assets/home/background-home-mobile.jpg')] bg-no-repeat md:bg-[url('/assets/home/background-home-tablet.jpg')] bg-size-[100%_100%] lg:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <Header />
      <main className="flex flex-1 flex-col gap-6 p-6 md:gap-15 md:px-10 md:py-32 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6 lg:justify-end">
          <h1 className="flex flex-col gap-6">
            <span className="mobile-text-preset-6 md:desktop-text-preset-5 text-blue-300 uppercase">
              so, you want to travel to
            </span>
            <span className="mobile-text-preset-1 md:desktop-text-preset-1 text-white uppercase">
              space
            </span>
          </h1>
          <p className="mobile-text-preset-9 md:tablet-text-preset-9 lg:desktop-text-preset-9 text-blue-300">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <div className="flex min-h-96 flex-1 items-center justify-center lg:items-end">
          <Link
            to={"/destination"}
            className="mobile-text-preset-4 flex items-center justify-center md:desktop-text-preset-4 size-36 rounded-full bg-white text-blue-900 uppercase transition-all duration-200 outline-none hover:ring-88 hover:ring-white/10 md:size-68 focus-visible:ring-88 focus-visible:ring-white/10 cursor-pointer"
          >
            explore
          </Link>
        </div>
      </main>
    </div>
  );
}
