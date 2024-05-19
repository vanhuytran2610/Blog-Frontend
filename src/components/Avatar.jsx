/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "./LoadingSpinner";
import { getExtraImg } from "../redux/features/extraImages/extraImgSlice";

const Avatar = ({ width, height }) => {
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
        <div className="flex items-center justify-center mx-auto">
          <LoadingSpinner />
        </div>
      ) : !isError && extraImg.data?.length > 0 ? (
        <img
          src={greetImages[0]?.image_path_url}
          className={`h-${height} w-${width} rounded-full object-cover`}
          alt="Author"
          loading="lazy"
        />
      ) : (
        <div>No image found</div>
      )}
    </>
  );
};

export default Avatar;
