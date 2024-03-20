import React from "react";

const Footer = () => {
  return (
    <footer className="pt-12 pb-12 lg:px-0">
      <div className="flex">
        <div className="w-full ml-4 md:w-1/3 lg:w-1/3">
          <h6 className="font-semibold text-gray-700 mb-4">About Me</h6>
          <span>hello</span>
        </div>

        <div className="w-full ml-5 md:w-1/3 lg:w-1/3">
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
        </div>

        <div className="w-full ml-6 md:w-1/3 lg:w-1/3">
          <h6 className="font-semibold text-gray-700 mb-4">Contact</h6>
          <ul>
            <li>
              {" "}
              <a href="#" className="block text-gray-600 py-2">
                Facebook
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="block text-gray-600 py-2">
                Instagram
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
