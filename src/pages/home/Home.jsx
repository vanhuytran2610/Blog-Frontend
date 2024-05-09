import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaRegPauseCircle,
  FaYoutube,
} from "react-icons/fa";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "../../components/Avatar";
import ButtonScrollToTop from "../../components/ButtonScrollToTop";
import CarouselNavigation from "./CarouselNavigation";
import { FaSquareThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import MomentCard from "../../components/MomentCard";
import MusicCard from "../../components/MusicCard";
import SportCard from "../../components/SportCard";
import { getExtraImg } from "../../redux/features/extraImages/extraImgSlice";
import RecentPost from "../../components/RecentPost";

const Home = () => {
  const aboutMeId = 1;
  const momentId = 2;
  const sportId = 5;
  const musicId = 4;

  return (
    <div>
      <main>
        <div className="max-w-screen">
          <div className="pt-28">
            <CarouselNavigation />
          </div>
        </div>

        <div className="px-5 max-w-screen-xl mx-auto">
          <div className="flex flex-wrap justify-between pt-5">
            {/* <!--1/2 col --> */}
            <div className="w-full md:w-1/2 p-4 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <div className="flex flex-wrap no-underline hover:no-underline">
                  <div className="w-full font-bold text-2xl text-gray-900 pt-6 text-center">
                    Khoảnh Khắc
                  </div>
                  <MomentCard categoryId={momentId} />
                  <div className="flex justify-center items-center w-full pt-2 pb-6">
                    <Link
                      to={`moment/${momentId}`}
                      className="text-green-700 hover:text-white border border-green-700 hover:bg-green-600  font-medium text-md px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--1/2 col --> */}
            <div className="w-full md:w-1/2 p-4 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <div className="flex flex-wrap no-underline hover:no-underline">
                  <div className="w-full font-bold text-2xl text-gray-900 pt-6 text-center">
                    Thể Thao
                  </div>
                  <div className="flex justify-center items-center w-full h-96">
                    <SportCard categoryId={sportId} />
                  </div>
                  <div className="flex justify-center items-center w-full pt-2 pb-6">
                    <Link
                      to={`sport/${sportId}`}
                      className="text-green-700 hover:text-white border border-green-700 hover:bg-green-600  font-medium text-md px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--1/3 col --> */}
            <div className="w-full md:w-1/3 p-4 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <Link
                  to={`music/${musicId}`}
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <div className="w-full font-bold text-2xl text-gray-900 pt-6 text-center">
                    Âm Nhạc
                  </div>
                  <div className="pt-6 pb-6 flex justify-center items-center w-full">
                    <MusicCard />
                  </div>
                  <div className="px-11">
                    <Marquee pauseOnClick speed={10}>
                      <div className="w-full font-bold text-lg text-gray-900 pr-2">
                        Tran Van Huy - Âm Nhạc Của Huy (Official Video)
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
                      <FaRegPauseCircle size={50} className="mx-5" />
                      <MdSkipNext size={40} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* <!--1/3 col --> */}
            <div className="w-full md:w-1/3 p-4 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <div className="flex flex-wrap no-underline hover:no-underline">
                  <div className="flex justify-center items-center w-full pt-10 pb-8">
                    <Avatar width={40} height={40} />
                  </div>
                  <p className="w-full text-gray-800 font-bold text-xl text-center mb-8">
                    Xin chào! Tôi là Huy!
                  </p>
                  <hr className="border-orange-800 border-2 w-full mx-32 rounded mb-8" />
                  <p className="text-gray-800 text-base text-justify px-11 pb-6">
                    Chào mọi người! Tôi là Huy, người đứng sau những dòng chữ ở
                    đây. Chào mừng các bạn đến với thế giới nhỏ của tôi!
                  </p>
                </div>
                <div className="flex justify-center items-center w-full pt-2 pb-6">
                  <Link
                    to={`about-me/${aboutMeId}`}
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-600  font-medium text-md px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Read More
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
