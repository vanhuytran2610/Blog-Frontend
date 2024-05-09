/* eslint-disable react/prop-types */

import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import React from "react";

const CardVertical = ({ blog, categoryId }) => {
  const published_date = new Date(blog?.updated_at);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = published_date.toLocaleDateString("en-US", options);
  return (
    <div className="flex-none w-3/3 md:w-1/3 mr-8 border rounded-lg bg-white mb-5 md:mb-0">
      <Link to={`/${categoryId}/${blog.id}`} className="space-y-3">
        <div className="aspect-w-16 aspect-h-9">
          <img
            className="object-cover shadow-md hover:shadow-xl rounded-t h-56 w-full"
            src={blog.image_avatar_url}
            alt=""
          />
        </div>
        <div className="h-48 px-4 py-2">
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
              <p className="text-gray-600 text-xs">{formattedDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardVertical;
