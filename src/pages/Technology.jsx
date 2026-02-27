import Header from "../components/Header.jsx";

export default function Technology() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-900 bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-size-[100%_100%]">
      <Header />
      <main className="flex-1"></main>
    </div>
  );
}
