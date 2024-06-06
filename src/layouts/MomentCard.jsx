/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "./LoadingSpinner";
import { getExtraImg } from "../redux/features/extraImages/extraImgSlice";

const MomentCard = () => {
  const { extraImg, isLoading, isError, error } = useSelector(
    (state) => state.extraImg
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExtraImg());
  }, [dispatch]);

  const momentImages = extraImg.data?.filter((item) => item.category_id === 2);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center mx-auto">
          <LoadingSpinner />
        </div>
      ) : !isError && momentImages && momentImages.length > 0 ? (
        <img
          src={momentImages[0]?.image_path_url}
          className="h-96 w-full rounded-t py-6"
          loading="lazy"
        />
      ) : (
        <div>No image found</div>
      )}
    </>
  );
};

export default MomentCard;
