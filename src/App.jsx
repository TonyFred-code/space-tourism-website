import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="cover flex min-h-screen flex-col bg-blue-900 bg-[url('/assets/home/background-home-mobile.jpg')] bg-no-repeat md:bg-[url('/assets/home/background-home-tablet.jpg')] bg-size-[100%_100%] lg:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <Header />
      <Outlet />
    </div>
  );
}
