/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

const CardRelatedPost = ({ blog, categoryId }) => {
  const published_date = new Date(blog?.updated_at);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const language = useSelector((state) => state.language);

  const formattedDate_vi = published_date.toLocaleDateString("vi-VN", options);
  const formattedDate_en = published_date.toLocaleDateString("en-US", options);
  return (
    <div className="flex-none w-2/3 md:w-2/3 lg:w-1/3 mr-8 border border-gray-400 bg-white hover:bg-gray-50 mb-5 md:mb-0">
      <Link to={`/${categoryId}/${blog.id}`} className="space-y-3">
        <div className="aspect-w-16 aspect-h-9">
          <img
            className="object-cover shadow-md hover:shadow-xl h-56 w-full"
            src={blog.image_avatar_url}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="h-48 px-4 my-4 md:my-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <div className="font-bold text-gray-800 text-xl mb-2">
              {blog.title}
            </div>
          </div>
          <p className="text-md italic">{blog.description}</p>
        </div>
        <div className="inset-x-0 bottom-0 px-4 pt-8 pb-4">
          <div className="flex">
            <Avatar width={10} height={10} />
            <div className="ml-2">
              <p className="font-semibold text-gray-700 text-sm capitalize">
                {" "}
                Tran Van Huy{" "}
              </p>
              <p className="text-gray-600 text-xs">
                {language === "en" ? formattedDate_en : formattedDate_vi}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardRelatedPost;
