import React from "react";
import { FaSquareThreads } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-12 pb-12 lg:px-0">
      <div className="flex">
        <div className="ml-4 w-1/2 md:w-2/3 lg:w-2/3">
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

        {/* <div className="w-full ml-5 md:w-1/3 lg:w-1/3">
          <h6 className="font-semibold text-gray-700 mb-4">Recent Post</h6>
          <ul>
            <li>
              {" "}
              <a href="#" className="block text-gray-600 py-2">
                Blog #1
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="block text-gray-600 py-2">
                Blog #2
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="block text-gray-600 py-2">
                Blog #3
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="block text-gray-600 py-2">
                Blog #4
              </a>{" "}
            </li>
          </ul>
        </div> */}

        <div className="w-1/2 ml-6 md:w-1/3 lg:w-1/3">
          <p className="font-bold text-gray-700 mb-6 text-4xl uppercase">
            Mạng xã hội
          </p>
          <ul>
            <li>
              <a href="#" className="flex text-gray-600 py-2">
                <FaFacebookSquare size={24} className="mr-2" /> Facebook
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="flex text-gray-600 py-2">
                <FaInstagramSquare size={24} className="mr-2" /> Instagram
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="flex text-gray-600 py-2">
                <FaSquareThreads size={24} className="mr-2" /> Thread
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="flex text-gray-600 py-2">
                <FaYoutube size={24} className="mr-2" /> Youtube
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
