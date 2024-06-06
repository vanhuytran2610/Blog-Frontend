import "./App.css";

import CarouselNavigation from "./components/home/CarouselNavigation";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { I18nextProvider } from "react-i18next";
import "./i18n";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="max-w-screen mx-auto bg-gray-50">
        <main className="min-h-screen pb-5">
          <Outlet />
        </main>
      </div>
      <div className="max-w-screen-xl mx-auto px-5">
        <Footer />
      </div>
      <div className="max-w-screen mx-auto bg-gray-400 text-black-100 h-15 md:h-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="inline-block align-middle font-bold px-9 py-2">
            © 2024 by Tran Van Huy. Powered and secured by @TVH
          </span>
        </div>
      </div>
    </Provider>
  );
}

export default App;
