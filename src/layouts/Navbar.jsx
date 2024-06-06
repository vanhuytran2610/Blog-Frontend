import React, { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";
import { FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { searchBlog } from "../redux/features/searchBlogs/searchBlogsSlice";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../redux/features/languages/languageSlice";

const Navbar = () => {
  const aboutMeId = 1;
  const momentId = 2;
  const sportId = 3;
  const musicId = 4;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const language = useSelector((state) => state.language);

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  const toggleMobileMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(searchBlog(searchTerm));
      navigate(`/search?search=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-white w-full py-2 z-50 fixed top-0 shadow-md transition-all transform ease-in-out duration-500">
      <div className="mx-5 flex items-center flex-wrap">
        <Link
          to="/"
          className="w-1/2 md:w-1/6"
          onClick={() => handleLinkClick("home")}
        >
          <img className="w-54 h-16" src={logo} loading="lazy" />
        </Link>
        <div
          id="menu-toggle"
          className="flex w-1/2 items-center justify-end md:hidden sm:ml-6"
          onClick={toggleMobileMenu}
        >
          <CiMenuBurger className="text-slate-700 hover:text-green-600 cursor-pointer mt-7" />
        </div>
        {isOpenMenu && (
          <nav className="md:hidden w-full mt-2 pt-6">
            <Link
              to="/"
              onClick={() => handleLinkClick("home")}
              className={`block font-medium text-${
                activeLink === "home" ? "green-600" : "gray-700"
              } hover:text-green-600 text-base mb-2`}
            >
              {t("head.homepage")}
            </Link>
            <Link
              to={`about-me/${aboutMeId}`}
              onClick={() => handleLinkClick("about-me")}
              className={`block font-medium text-${
                activeLink === "about-me" ? "green-600" : "gray-700"
              } hover:text-green-600 text-base mb-2`}
            >
              {t("head.greet")}
            </Link>
            <Link
              to={`moment/${momentId}`}
              onClick={() => handleLinkClick("moment")}
              className={`block font-medium text-${
                activeLink === "moment" ? "green-600" : "gray-700"
              } hover:text-green-600 text-base mb-2`}
            >
              {t("head.moment")}
            </Link>
            <Link
              to={`sport/${sportId}`}
              onClick={() => handleLinkClick("sport")}
              className={`block font-medium text-${
                activeLink === "sport" ? "green-600" : "gray-700"
              } hover:text-green-600 text-base mb-2`}
            >
              {t("head.sport")}
            </Link>
            <Link
              to={`music/${musicId}`}
              onClick={() => handleLinkClick("music")}
              className={`block font-medium text-${
                activeLink === "music" ? "green-600" : "gray-700"
              } hover:text-green-600 text-base mb-2`}
            >
              {t("head.music")}
            </Link>
            <div className="flex">
              <input
                type="text"
                id="header-searchbox"
                name="q"
                placeholder={t("head.search")}
                className="search-input w-5/6 mt-2 mb-4 bg-slate-200 border border-transparent focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-2 placeholder-slate-500 text-slate-700 text-sm"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <div className="flex w-2/6 ml-2 justify-end text-gray-700 hover:text-green-600">
                <select
                  value={language}
                  onChange={handleChangeLanguage}
                  className="ml-2 border mt-2 border-gray-700 h-8"
                >
                  <option value="vi">VIE</option>
                  <option value="en">ENG</option>
                </select>
              </div>
            </div>
          </nav>
        )}
        <nav className="order-last md:order-none justify-center items-center flex-grow w-3/6 md:flex hidden mt-2 pt-7 md:mt-0">
          <Link
            to="/"
            onClick={() => handleLinkClick("home")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "home" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            {" "}
            {t("head.homepage")}{" "}
          </Link>
          <Link
            to={`about-me/${aboutMeId}`}
            onClick={() => handleLinkClick("about-me")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "about-me" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            {t("head.greet")}
          </Link>
          <Link
            to={`moment/${momentId}`}
            onClick={() => handleLinkClick("moment")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "moment" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            {" "}
            {t("head.moment")}{" "}
          </Link>
          <Link
            to={`sport/${sportId}`}
            onClick={() => handleLinkClick("sport")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "sport" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            {" "}
            {t("head.sport")}{" "}
          </Link>
          <Link
            to={`music/${musicId}`}
            onClick={() => handleLinkClick("music")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "music" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            {" "}
            {t("head.music")}{" "}
          </Link>
        </nav>
        <div className="order-last md:order-none items-center justify-end w-1/6 mr-1 md:flex hidden pt-7 md:mt-0">
          <Popover placement="bottom-end">
            <PopoverHandler>
              <button>
                <div className="flex text-gray-700 hover:text-green-600">
                  <FaSearch className="mt-1" size={16} />
                </div>
              </button>
            </PopoverHandler>
            <PopoverContent className="z-50 rounded-none ml-4">
              <div className="w-56">
                <input
                  type="text"
                  id="header-searchbox"
                  name="q"
                  placeholder={t("head.search")}
                  className="w-full bg-slate-100 border border-transparent focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-2 placeholder-slate-500 text-slate-700 text-sm"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                />
              </div>
            </PopoverContent>
          </Popover>
          <div className="flex justify-end ml-2 text-gray-700 hover:text-green-600">
            <select
              value={language}
              onChange={handleChangeLanguage}
              className="border ml-1 border-gray-700 h-8"
            >
              <option value="vi">VIE</option>
              <option value="en">ENG</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
