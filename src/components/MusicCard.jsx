import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "./LoadingSpinner";
import { getExtraImg } from "../redux/features/extraImages/extraImgSlice";

const MusicCard = () => {
  const { extraImg, isLoading, isError, error } = useSelector(
    (state) => state.extraImg
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExtraImg());
  }, [dispatch]);

  const musicImages = extraImg.data?.filter((item) => item.category_id === 4);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : !isError && musicImages && musicImages.length > 0 ? (
        <img
          src={musicImages[0]?.image_path_url}
          className="h-56 w-72 rounded-md"
        />
      ) : (
        <div>No image found</div>
      )}
    </>
  );
};

export default MusicCard;
