import { Link } from "react-router-dom";
import React from "react";
import logo from "../../image/logo.png";

const Navbar = () => {
  // const src =
  return (
    <header className="flex items-center justify-between pt-4">
      <Link to="/" className="px-2 lg:px-0">
        <img className="w-[360px] h-[160px]" src={logo} />
      </Link>
      <ul className="inline-flex items-center pt-9">
        <li className="px-2 md:px-4">
          <Link
            to="/"
            className="text-gray-500 font-semibold hover:text-green-700"
          >
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="px-2 md:px-4">
          <a
            href="#"
            className="text-gray-500 font-semibold hover:text-green-700"
          >
            {" "}
            About{" "}
          </a>
        </li>
        <li className="px-2 md:px-4">
          <a
            href="#"
            className="text-gray-500 font-semibold hover:text-green-700"
          >
            {" "}
            Press{" "}
          </a>
        </li>
        <li className="px-2 md:px-4">
          <a
            href="#"
            className="text-gray-500 font-semibold hover:text-green-700"
          >
            {" "}
            Contact{" "}
          </a>
        </li>
        <li className="px-2 md:px-4">
          <Link
            to="https://www.facebook.com/vhuytran.2610/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <i className="fab fa-facebook-square text-xl hover:text-green-700 text-gray-500 sm:text-xl md:text-2xl"></i>
          </Link>
          <Link
            to="https://www.instagram.com/vhuy.tran/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <i className="fab fa-instagram-square text-xl hover:text-green-700 text-gray-500 sm:text-xl md:text-2xl"></i>
          </Link>
          <Link
            to="https://www.threads.net/@vhuy.tran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-threads text-xl hover:text-green-700 text-gray-500 sm:text-xl md:text-2xl"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
