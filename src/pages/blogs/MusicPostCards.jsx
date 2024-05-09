import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonScrollToTop from "../../components/ButtonScrollToTop";
import CardVertical from "./CardVertical";
import { getBlogsByCategoryId } from "../../redux/features/blogsByCategory/blogsByCategorySlice";
import { useParams } from "react-router-dom";

const MusicPostCards = () => {
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
          Âm nhạc
        </div>
        <div className="mx-3 py-5 text-gray-700 font-bold text-2xl">
          abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc
        </div>
        <hr className="border-gray-500 border-2" />
      </div>
      <div className="px-6 pt-10 w-full lg:w-full">
        {!isLoading && !isError && blogsByCategory.data?.blogs?.length > 0 ? (
          <div>
            {blogsByCategory.data?.blog?.map((blog, index) => (
              <CardVertical
                key={index}
                blog={blog}
                categoryId={blogsByCategory.data?.category.id}
              />
            ))}
          </div>
        ) : (
          <div>No blogs found</div>
        )}
      </div>
      <ButtonScrollToTop />
    </div>
  );
};

export default MusicPostCards;
