/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "./LoadingSpinner";
import { getExtraImg } from "../redux/features/extraImages/extraImgSlice";

const SportCard = () => {
  const { extraImg, isLoading, isError, error } = useSelector(
    (state) => state.extraImg
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExtraImg());
  }, [dispatch]);

  const sportImages = extraImg.data?.filter((item) => item.category_id === 3);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center mx-auto">
          <LoadingSpinner />
        </div>
      ) : !isError && sportImages && sportImages?.length > 0 ? (
        <div className="py-3 px-3 grid grid-cols-3 grid-rows-2 gap-y-2">
          {sportImages?.map((image, index) => (
            <div key={index} className="mr-2">
              <img
                src={image.image_path_url}
                className="object-cover h-36 w-36"
                alt={`Image ${index}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : (
        <div>No image found</div>
      )}
    </>
  );
};

export default SportCard;
