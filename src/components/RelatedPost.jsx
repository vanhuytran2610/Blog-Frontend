/* eslint-disable react/prop-types */

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardVertical from "../pages/blogs/CardVertical";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { getBlogsExceptCurr } from "../redux/features/blogsExceptCurrent/blogsExceptCurrSlice";

const RelatedPost = ({ categoryId, id }) => {
  const { blogsExceptCurr, isLoading, isError, error } = useSelector(
    (state) => state.blogsExceptCurr
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsExceptCurr({ categoryId: categoryId, id: id }));
  }, [dispatch, categoryId, id]);

  const slideLeft = () => {
    var slider = document.getElementById("scrollContainer");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("scrollContainer");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="relative flex flex-no-wrap items-center">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideLeft}
        size={100}
      />
      <div
        id="scrollContainer"
        className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-4 scroll-smooth"
      >
        {isLoading ? (<LoadingSpinner />) : !isError && blogsExceptCurr.data?.blogs?.length > 0 ? (
          <>
            {blogsExceptCurr.data?.blogs?.map((blog, index) => (
              <CardVertical key={index} categoryId={categoryId} blog={blog} />
            ))}
          </>
        ) : (
          <div>No blogs found</div>
        )}
      </div>
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideRight}
        size={100}
      />
    </div>
  );
};

export default RelatedPost;
