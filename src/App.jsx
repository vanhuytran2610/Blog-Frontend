import "./App.css";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import CarouselNavigation from "./pages/home/CarouselNavigation";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-2">
        <Navbar />
      </div>
      <div className="max-w-screen bg-gray-50">
        <div className="pb-5">
          <CarouselNavigation />
        </div>
      </div>
      <div className="max-w-screen bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-2">
          <main className="mx-3 min-h-screen pb-5">
            <Outlet />
          </main>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5">
        <Footer />
      </div>
      <div className="max-w-screen mx-auto bg-gray-400 text-black-100 h-10">
        <div className="max-w-screen-xl mx-auto">
          <span className="inline-block align-middle font-bold px-9 py-2">
            Copyright by @VHT, since 2024
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
