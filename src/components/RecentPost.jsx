import React, { useEffect } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../redux/features/blogs/blogsSlice";
import LoadingSpinner from "./LoadingSpinner";
import Card from "../pages/blogs/Card";

const RecentPost = () => {
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs({ orderBy: "title", orderSort: "asc" }));
  }, [dispatch]);

  console.log(blogs);

  return (
    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
      <div className="flex flex-wrap no-underline hover:no-underline">
        <div className="w-full font-bold text-2xl text-gray-900 text-center mt-6 mb-8">
          Recent Post
        </div>
        <div className="mx-11 pt-3 pb-6 w-full">
          {isLoading ? (
            <LoadingSpinner />
          ) : !isError && blogs.data?.length > 0 ? (
            <>
              {blogs.data?.slice(0,4).map((blog, index) => (
                <>
                  <Card key={index} blog={blog} categoryId={blog.category_id} />
                  {index !== 3 && (
                    <hr className="border-green-800 border-1 w-full rounded my-5" />
                  )}
                </>
              ))}
            </>
          ) : (
            <div>No blogs found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
