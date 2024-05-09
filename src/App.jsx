import "./App.css";

import CarouselNavigation from "./pages/home/CarouselNavigation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <div className="max-w-screen mx-auto bg-gray-50">
          <main className="min-h-screen pb-5">
            <Outlet />
          </main>
        </div>
        <div className="max-w-screen-xl mx-auto px-5">
          <Footer />
        </div>
        <div className="max-w-screen mx-auto bg-gray-400 text-black-100 h-10">
          <div className="max-w-screen-xl mx-auto text-center">
            <span className="inline-block align-middle font-bold px-9 py-2">
              © 2024 by Tran Van Huy. Powered and secured by @TVH
            </span>
          </div>
        </div>
      </>
    </Provider>
  );
}

export default App;
