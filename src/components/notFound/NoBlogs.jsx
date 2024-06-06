import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const NoBlogs = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-green-600 dark:text-green-500">
            404
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            {t("noBlogs.title")}
          </h1>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              onClick={() => navigate(-1)}
              className="text-black border border-gray-700 bg-gray-50 hover:bg-gray-200 font-medium text-md px-5 py-2.5 text-center me-2 mb-2"
            >
              {t("back")}
            </button>

            <Link
              to="/"
              className="text-black hover:text-white border border-green-700 bg-green-600 hover:bg-green-800 font-medium text-md px-5 py-2.5 text-center me-2 mb-2"
            >
              {t("head.homepage")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoBlogs;
