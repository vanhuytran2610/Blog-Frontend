import React from "react";
import { FaSquareThreads } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-12 pb-12 lg:px-0">
      <div className="flex">
        <div className="ml-2 w-1/2 md:w-2/3 lg:w-2/3">
          <p className="font-bold text-gray-700 mb-6 text-4xl uppercase">
            Cảm ơn
          </p>
          <div className="w-3/4 text-justify">
            <span className="leading-7">
              Huy xin gửi đến tất cả mọi người, bao gồm gia đình, bạn bè, người
              thân và những bạn Huy chưa từng gặp, một lời cảm ơn chân thành vì
              đã dành ra một phần nhỏ thời gian của mình để khám phá một phần
              nhỏ thế giới của Huy.
            </span>
            <br />
            <span className="leading-7">
              Mọi người muốn biết nhiều điều hơn về Huy có thể tìm kiếm qua các
              trang Mạng Xã Hội của Huy.
            </span>
          </div>
        </div>

        <div className="w-1/2 ml-6 md:w-1/3 lg:w-1/3">
          <p className="font-bold text-gray-700 mb-6 text-4xl uppercase">
            Mạng xã hội
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
