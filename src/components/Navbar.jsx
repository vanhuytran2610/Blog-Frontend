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
import { useDispatch } from "react-redux";
import { searchBlog } from "../redux/features/searchBlogs/searchBlogsSlice";

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
          className="w-1/2 md:w-1/3"
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
              Trang chủ
            </Link>
            <Link
              to={`about-me/${aboutMeId}`}
              onClick={() => handleLinkClick("about-me")}
              className={`block font-medium text-${
                activeLink === "about-me" ? "green-600" : "gray-700"
              } hover:text-green-600 text-base mb-2`}
            >
              Giới thiệu
            </Link>
            <Link
              to={`moment/${momentId}`}
              onClick={() => handleLinkClick("moment")}
              className={`block font-medium text-${
                activeLink === "moment" ? "green-600" : "gray-700"
              } hover:text-green-600 text-base mb-2`}
            >
              Khoảnh khắc
            </Link>
            <Link
              to={`sport/${sportId}`}
              onClick={() => handleLinkClick("sport")}
              className={`block font-medium text-${
                activeLink === "sport" ? "green-600" : "gray-700"
              } hover:text-green-600 text-base mb-2`}
            >
              Thể thao
            </Link>
            <Link
              to={`music/${musicId}`}
              onClick={() => handleLinkClick("music")}
              className={`block font-medium text-${
                activeLink === "music" ? "green-600" : "gray-700"
              } hover:text-green-600 text-base mb-2`}
            >
              Âm nhạc
            </Link>
            <div className="flex">
              <input
                type="text"
                id="header-searchbox"
                name="q"
                placeholder="Tìm kiếm ..."
                className="search-input w-4/5 mt-2 mb-4 bg-slate-200 border border-transparent focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-2 placeholder-slate-500 text-slate-700 text-sm"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <div className="flex w-1/5 mx-1 my-3 justify-end">
                <TbWorld size={22} />
                <p className="font-bold ml-1 text-md">VI</p>
              </div>
            </div>
          </nav>
        )}
        <nav className="order-last md:order-none items-center flex-grow w-full md:w-auto mx-3 md:flex hidden mt-2 pt-7 md:mt-0">
          <Link
            to="/"
            onClick={() => handleLinkClick("home")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "home" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            {" "}
            Trang chủ{" "}
          </Link>
          <Link
            to={`about-me/${aboutMeId}`}
            onClick={() => handleLinkClick("about-me")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "about-me" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            Giới thiệu
          </Link>
          <Link
            to={`moment/${momentId}`}
            onClick={() => handleLinkClick("moment")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "moment" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            {" "}
            Khoảnh khắc{" "}
          </Link>
          <Link
            to={`sport/${sportId}`}
            onClick={() => handleLinkClick("sport")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "sport" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            {" "}
            Thể thao{" "}
          </Link>
          <Link
            to={`music/${musicId}`}
            onClick={() => handleLinkClick("music")}
            className={`block mt-4 md:inline-block md:mt-0 font-medium text-${
              activeLink === "music" ? "green-600" : "gray-700"
            } hover:text-green-600 text-base mr-4`}
          >
            {" "}
            Âm nhạc{" "}
          </Link>
        </nav>
        <div className="order-last md:order-none items-center flex-grow justify-end w-full md:w-auto mx-2 md:flex hidden pt-7 md:mt-0">
          <Popover placement="bottom-end">
            <PopoverHandler>
              <button>
                <FaSearch className="hover:fill-green-600" />
              </button>
            </PopoverHandler>
            <PopoverContent className="z-50 rounded-none ml-4">
              <div className="w-56">
                <input
                  type="text"
                  id="header-searchbox"
                  name="q"
                  placeholder="Tìm kiếm ..."
                  className="w-full bg-slate-100 border border-transparent focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-2 placeholder-slate-500 text-slate-700 text-sm"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="order-last md:order-none mx-1 md:pt-7 md:flex hidden">
          <TbWorld size={22} />
          <p className="font-bold ml-1 text-md">VI</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
