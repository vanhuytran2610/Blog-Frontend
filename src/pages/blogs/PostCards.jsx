import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";
import { getAllBlogs } from "../../redux/features/blogs/blogsSlice";

const PostCards = () => {
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  console.log("blogs", blogs.data);

  return (
    <div className="px-5 max-w-screen-xl mx-auto">
      <div className="mx-2 pt-5">
        <div className="md:mt-0 text-gray-700 font-bold text-5xl mx-3 mb-5">
          All
        </div>
        <div className="mx-3 py-5 text-gray-700 font-bold text-2xl">abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc</div>
        <hr className="border-gray-500 border-2" />
      </div>
      <div className="px-6 pt-10 w-full lg:w-full">
        {!isLoading && !isError && blogs.data?.length > 0 ? (
          <div>
            {blogs.data?.map((blog, index) => (
              <Card key={index} blog={blog} />
            ))}
          </div>
        ) : (
          <div>No blogs found</div>
        )}
      </div>
    </div>
  );
};

export default PostCards;
