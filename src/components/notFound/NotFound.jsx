import React, { useEffect } from "react";
import img404 from "../../../image/extra_img/404.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  useEffect(() => {
    document.title = t("notFound.title_page");
  }, [t]);
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container min-h-96 pt-8 md:pt-24 lg:pt-24 px-6 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-green-600 dark:text-green-500">
            404
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            {t("notFound.content_1")}
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {t("notFound.content_2")}
          </p>

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

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img className="w-full max-w-lg lg:mx-auto" src={img404} alt="" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
