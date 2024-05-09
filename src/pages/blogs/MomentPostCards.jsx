import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonScrollToTop from "../../components/ButtonScrollToTop";
import Card from "./Card";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getBlogsByCategoryId } from "../../redux/features/blogsByCategory/blogsByCategorySlice";
import { useParams } from "react-router-dom";
import CardVertical from "./CardVertical";

const MomentPostCards = () => {
  const { blogsByCategory, isLoading, isError, error } = useSelector(
    (state) => state.blogsByCategory
  );
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogsByCategoryId(categoryId));
  }, [dispatch, categoryId]);

  return (
    <div className="px-5 max-w-screen-xl mx-auto">
      <div className="mx-2 pt-36">
        <div className="md:mt-0 text-gray-700 font-bold text-5xl mx-3 mb-5 capitalize">
          Khoảnh Khắc Cuộc Sống
        </div>
        <div className="mx-3 py-5 text-gray-400 font-bold italic text-xl justify-stretch">
          ...Dành chút thời gian để soi từng chuyến đi đầy ý nghĩa và kỷ niệm
          đáng nhớ, bạn sẽ được khám phá những khoảnh khắc đáng nhớ của riêng
          tôi, của tôi cùng với những người bạn. Hãy để những trải nghiệm phong
          phú và tình bạn vững bền đưa bạn đi qua những khoảnh khắc đáng nhớ của
          cuộc sống...
        </div>
        <hr className="border-gray-300 border-2" />
      </div>
      <div className="container px-6 pt-10 w-full lg:w-full">
        <div className="md:flex flex-wrap -mx-2">
          {isLoading ? (
            <LoadingSpinner />
          ) : !isError && blogsByCategory.data?.blogs?.length > 0 ? (
            <>
              {blogsByCategory.data?.blogs?.map((blog, index) => (
                <CardVertical
                  key={index}
                  blog={blog}
                  categoryId={blogsByCategory.data?.category.id}
                />
              ))}
            </>
          ) : (
            <div>No blogs found</div>
          )}
        </div>
      </div>
      <ButtonScrollToTop />
    </div>
  );
};

export default MomentPostCards;
