import React, { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";

const Navbar = () => {
  const aboutMeId = 1;
  const momentId = 2;
  const sportId = 5;
  const musicId = 4;
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="bg-white w-full px-6 py-3 z-50 fixed top-0 shadow-md transition-all transform ease-in-out duration-500">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap justify-between">
        <div className="sm:mr-8">
          <Link to="/" className="flex items-center">
            <img className="w-64 h-24" src={logo} />
          </Link>
        </div>
        <div
          id="menu-toggle"
          className="flex items-center md:hidden text-slate-700 hover:text-teal-600 cursor-pointer sm:ml-6"
          onClick={toggleMobileMenu}
        >
          <CiMenuBurger />
        </div>
        {isOpenMenu && (
          <nav className="md:hidden w-full mt-2 pt-6">
            <Link
              to="/"
              className="block font-medium text-slate-700 hover:text-teal-600 text-base mb-2"
            >
              Home
            </Link>
            <Link
              to={`about-me/${aboutMeId}`}
              className="block font-medium text-slate-700 hover:text-teal-600 text-base mb-2"
            >
              About Me
            </Link>
            <Link
              to={`moment/${momentId}`}
              className="block font-medium text-slate-700 hover:text-teal-600 text-base mb-2"
            >
              Khoảnh khắc
            </Link>
            <Link
              to={`sport/${sportId}`}
              className="block font-medium text-slate-700 hover:text-teal-600 text-base mb-2"
            >
              Thể thao
            </Link>
            <Link
              to={`music/${musicId}`}
              className="block font-medium text-slate-700 hover:text-teal-600 text-base mb-2"
            >
              Âm nhạc
            </Link>
            <form action="/search" className="mb-4 block">
              <input
                type="text"
                id="header-searchbox"
                name="q"
                placeholder="Search here ..."
                className="search-input w-full bg-slate-200 border border-transparent focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-4 placeholder-slate-500 rounded text-slate-700 text-sm"
              />
            </form>
          </nav>
        )}
        <nav className="order-last md:order-none items-center flex-grow w-full md:w-auto md:flex hidden mt-2 pt-6 md:mt-0">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to={`about-me/${aboutMeId}`}
            className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
          >
            About Me
          </Link>
          <Link
            to={`moment/${momentId}`}
            className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
          >
            {" "}
            Khoảnh khắc{" "}
          </Link>
          <Link
            to={`sport/${sportId}`}
            className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
          >
            {" "}
            Thể thao{" "}
          </Link>
          <Link
            to={`music/${musicId}`}
            className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
          >
            {" "}
            Âm nhạc{" "}
          </Link>
        </nav>
        <form
          action="{{ '/search' | url }}"
          className="order-last md:order-none flex-grow items-center justify-end md:block hidden mt-6 pt-4 md:mt-0 md:mr-5"
        >
          <input
            type="text"
            id="header-searchbox"
            name="q"
            placeholder="Search here ..."
            className="w-full sm:max-w-xs bg-slate-200 border border-transparent float-right focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-4 placeholder-slate-500 rounded text-slate-700 text-sm"
          />
        </form>
      </div>
    </header>
  );
};

export default Navbar;
