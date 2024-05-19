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

  return (
    <div className="flex-1 bg-white border-gray-400 border overflow-hidden shadow-lg">
      <div className="flex flex-wrap no-underline hover:no-underline">
        <div className="w-full font-bold text-2xl text-gray-900 text-center mt-6 mb-8">
          Recent Post
        </div>
        <div className="mx-11 pt-1 pb-6 w-full">
          {isLoading ? (
            <div className="flex items-center justify-center mx-auto">
              <LoadingSpinner />
            </div>
          ) : !isError && blogs.data?.length > 0 ? (
            <>
              {blogs.data
                ?.filter((blog) => blog.category_id !== 1)
                .slice()
                .sort((a, b) => a.updated_at.localeCompare(b.updated_at))
                .slice(0, 4)
                .map((blog, index) => (
                  <div key={blog.id}>
                    <Card
                      key={index}
                      blog={blog}
                      categoryId={blog.category_id}
                    />
                    {index !== 3 && (
                      <hr className="border-green-800 border-1 mx-auto rounded my-5" />
                    )}
                  </div>
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
