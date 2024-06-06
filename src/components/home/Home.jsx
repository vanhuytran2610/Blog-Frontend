import { FaRegPauseCircle } from "react-icons/fa";
import React, { useEffect } from "react";
import Avatar from "../../layouts/Avatar";
import ButtonScrollToTop from "../../layouts/ButtonScrollToTop";
import CarouselNavigation from "./CarouselNavigation";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import MomentCard from "../../layouts/MomentCard";
import MusicCard from "../../layouts/MusicCard";
import SportCard from "../../layouts/SportCard";
import RecentPost from "../../layouts/RecentPost";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const aboutMeId = 1;
  const momentId = 2;
  const sportId = 3;
  const musicId = 4;

  useEffect(() => {
    document.title = t("home.title_page");
  }, [t]);

  return (
    <div>
      <main>
        <div className="max-w-screen">
          <div className="pt-16">
            <CarouselNavigation />
          </div>
        </div>

        <div className="px-5 pt-8 max-w-screen-xl mx-auto">
          <div className="flex flex-wrap justify-between pt-5">
            {/* <!--1/2 col --> */}
            <div className="w-full md:w-1/2 p-4 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white overflow-hidden shadow-lg border-gray-400 border">
                <div className="flex flex-wrap no-underline hover:no-underline">
                  <div className="w-full font-bold text-2xl text-gray-900 pt-6 text-center">
                    {t("home.moment")}
                  </div>
                  <MomentCard categoryId={momentId} />
                  <div className="flex justify-center items-center w-full pt-2 pb-6">
                    <Link
                      to={`moment/${momentId}`}
                      className="text-green-700 hover:text-white border border-green-700 hover:bg-green-600 font-medium text-md px-5 py-2.5 text-center me-2 mb-2"
                    >
                      {t("home.load_more")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--1/2 col --> */}
            <div className="w-full md:w-1/2 p-4 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 flex-row bg-white overflow-hidden shadow-lg border-gray-400 border">
                <div className="flex flex-wrap no-underline hover:no-underline">
                  <div className="w-full font-bold text-2xl text-gray-900 pt-6 text-center">
                    {t("home.sport")}
                  </div>
                  <div className="flex justify-center items-center w-full h-96">
                    <SportCard categoryId={sportId} />
                  </div>
                  <div className="flex justify-center items-center w-full pt-2 pb-6">
                    <Link
                      to={`sport/${sportId}`}
                      className="text-green-700 hover:text-white border border-green-700 hover:bg-green-600 font-medium text-md px-5 py-2.5 text-center me-2 mb-2"
                    >
                      {t("home.load_more")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--1/3 col --> */}
            <div className="w-full md:w-1/3 p-4 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white border-gray-400 border overflow-hidden shadow-lg">
                <Link
                  to={`music/${musicId}`}
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <div className="w-full font-bold text-2xl text-gray-900 pt-6 text-center">
                    {t("home.music")}
                  </div>
                  <div className="pt-6 pb-6 flex justify-center items-center w-full">
                    <MusicCard />
                  </div>
                  <div className="px-11">
                    <Marquee pauseOnClick speed={10}>
                      <div className="w-full font-bold text-lg text-gray-900 pr-2">
                        {t("home.music_title")}
                      </div>
                    </Marquee>
                    <div className="w-full text-md text-gray-900 pr-2 pb-6">
                      Tran Van Huy
                    </div>
                    <div className="relative flex flex-no-wrap items-center pb-4">
                      <p>00:00</p>
                      <hr className="border-gray-300 border-2 w-full mx-2" />
                      <p>00:00</p>
                    </div>
                    <div className="relative flex flex-no-wrap justify-center items-center pb-6">
                      <MdSkipPrevious size={40} />
                      <FaRegPauseCircle
                        size={50}
                        className="mx-5 hover:fill-green-600"
                      />
                      <MdSkipNext size={40} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* <!--1/3 col --> */}
            <div className="w-full md:w-1/3 p-4 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white border-gray-400 border overflow-hidden shadow-lg">
                <div className="flex flex-wrap no-underline hover:no-underline">
                  <div className="flex justify-center items-center w-full pt-10 pb-8">
                    <Avatar width={40} height={40} />
                  </div>
                  <p className="w-full text-gray-800 font-bold text-xl text-center mb-8">
                    {t("home.about_me_title")}
                  </p>
                  <hr className="border-orange-800 border-2 w-full mx-32 rounded mb-8" />
                  <p className="text-gray-800 text-base text-justify px-11 pb-6">
                    {t("home.about_me_des")}
                  </p>
                </div>
                <div className="flex justify-center items-center w-full pt-2 pb-6">
                  <Link
                    to={`about-me/${aboutMeId}`}
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-600 font-medium text-md px-5 py-2.5 text-center me-2 mb-2"
                  >
                    {t("home.load_more")}
                  </Link>
                </div>
              </div>
            </div>

            {/* <!--1/3 col --> */}
            <div className="w-full md:w-1/3 p-4 flex flex-col flex-grow flex-shrink">
              <RecentPost />
            </div>
          </div>
        </div>

        <ButtonScrollToTop />
      </main>
    </div>
  );
};

export default Home;
