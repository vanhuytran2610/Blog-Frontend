import React from "react";
import { FaSquareThreads } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer className="pt-12 pb-12 lg:px-0">
      <div className="flex">
        <div className="ml-2 w-1/2 md:w-2/3 lg:w-2/3">
          <p className="font-bold text-gray-700 mb-6 text-4xl uppercase">
            {t("home.footer_thanks")}
          </p>
          <div className="w-3/4 text-justify">
            <span className="leading-7">
              {t("home.footer_thanks_content")}
            </span>
            <br />
            <span className="leading-7">
              {t("home.footer_thanks_contact")}
            </span>
          </div>
        </div>

        <div className="w-1/2 ml-6 md:w-1/3 lg:w-1/3">
          <p className="font-bold text-gray-700 mb-6 text-4xl uppercase">
            {t("home.footer_social")}
          </p>
          <ul>
            <li>
              <Link
                to="https://www.facebook.com/vhuytran.2610"
                className="flex text-gray-700 hover:text-green-600 py-2"
                target="_blank" 
              >
                <FaFacebookSquare size={24} className="mr-2" /> Facebook
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="https://www.instagram.com/vhuy.tran/"
                className="flex text-gray-700 hover:text-green-600 py-2"
                target="_blank" 
              >
                <FaInstagramSquare size={24} className="mr-2" /> Instagram
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="https://www.threads.net/@vhuy.tran"
                className="flex text-gray-700 hover:text-green-600 py-2"
                target="_blank" 
              >
                <FaSquareThreads size={24} className="mr-2" /> Thread
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="https://www.youtube.com/@tranvanhuy5538"
                className="flex text-gray-700 hover:text-green-600 py-2"
                target="_blank" 
              >
                <FaYoutube size={24} className="mr-2" /> Youtube
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
