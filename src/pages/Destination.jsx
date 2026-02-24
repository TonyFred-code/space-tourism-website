import Header from "../components/Header.jsx";

export default function Destination() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-900 bg-size-[100%_100%] bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-no-repeat">
      <Header />
      <main className="flex-1"></main>
    </div>
  );
}
