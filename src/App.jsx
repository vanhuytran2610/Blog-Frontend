import "./App.css";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-2">
        <Navbar />
      </div>
      <div className="max-w-screen bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-2">
          <main className="mt-8 mx-3 min-h-screen">
            <Outlet />
          </main>
          <footer className="mx-3">Footer</footer>
        </div>
      </div>
    </>
  );
}

export default App;
