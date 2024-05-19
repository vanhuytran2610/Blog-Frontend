/* eslint-disable react/prop-types */
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "./LoadingSpinner";
import { getBlogsExceptCurr } from "../redux/features/blogsExceptCurrent/blogsExceptCurrSlice";
import CardRelatedPost from "../pages/blogs/CardRelatedPost";
import Card from "../pages/blogs/Card";

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

  console.log(blogsExceptCurr.data);

  return (
    <>
      {blogsExceptCurr.data?.category?.id === 4 ? (
        <div className="mx-11 pt-1 pb-10">
          {isLoading ? (
            <div className="flex items-center justify-center mx-auto">
              <LoadingSpinner />
            </div>
          ) : !isError && blogsExceptCurr.data?.blogs?.length > 0 ? (
            <div className="overflow-y-scroll">
              {blogsExceptCurr.data?.blogs?.map((blog, index) => (
                <>
                  <Card key={index} blog={blog} categoryId={blog.category_id} />
                  {index !== blogsExceptCurr.data?.blogs?.length - 1 && (
                    <hr className="border-green-800 border-1 mx-auto mr-2 rounded my-5" />
                  )}
                </>
              ))}
            </div>
          ) : (
            <div>No blogs found</div>
          )}
        </div>
      ) : (
        <div className="relative flex flex-no-wrap items-center">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={60}
          />
          <div
            id="scrollContainer"
            className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-4 scroll-smooth"
          >
            {isLoading ? (
              <div className="flex items-center justify-center mx-auto">
                <LoadingSpinner />
              </div>
            ) : !isError && blogsExceptCurr.data?.blogs?.length > 0 ? (
              <>
                {blogsExceptCurr.data?.blogs?.map((blog, index) => (
                  <CardRelatedPost
                    key={index}
                    categoryId={categoryId}
                    blog={blog}
                  />
                ))}
              </>
            ) : (
              <div>No blogs found</div>
            )}
          </div>
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={60}
          />
        </div>
      )}
    </>
  );
};

export default RelatedPost;
