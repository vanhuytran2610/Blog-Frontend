import { Carousel, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../../components/LoadingSpinner";
import { getExtraImg } from "../../redux/features/extraImages/extraImgSlice";

const CarouselNavigation = () => {
  const { extraImg, isLoading, isError, error } = useSelector(
    (state) => state.extraImg
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExtraImg());
  }, [dispatch]);
  const greetImages = extraImg.data?.filter((item) => item.category_id === 1);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : !isError && greetImages && greetImages.length > 0 ? (
        <Carousel
          className="h-[500px]"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="relative h-full w-full">
            <img
              src={greetImages[2]?.image_path_url}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Hello World
                </Typography>
                <Typography variant="h4" color="white" className="opacity-80">
                  Tôi là Huy! Chào mừng mọi người đến với thế giới của tôi!
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src={greetImages[5]?.image_path_url}
              alt="image 2"
              className="h-full w-full object-cover"
              style={{
                objectPosition: "center bottom",
              }}
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography variant="h4" color="white" className="opacity-80">
                  Nếu bạn có chút thời gian hãy cùng nhau khám phá một phần cuộc
                  sống với nhiều điều thú vị của tôi nhé
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      ) : (
        <Carousel
          className="h-[500px]"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="relative h-full w-full">
            <img src="" alt="image 1" className="h-full w-full object-cover" />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Hello World
                </Typography>
                <Typography variant="h4" color="white" className="opacity-80">
                  Tôi là Huy! Chào mừng mọi người đến với thế giới của tôi!
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src=""
              alt="image 2"
              className="h-full w-full object-cover"
              style={{
                objectPosition: "center bottom",
              }}
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography variant="h4" color="white" className="opacity-80">
                  Nếu bạn có chút thời gian hãy cùng nhau khám phá một phần cuộc
                  sống với nhiều điều thú vị của tôi nhé
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      )}
    </>
  );
};

export default CarouselNavigation;
