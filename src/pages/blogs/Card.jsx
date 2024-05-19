/* eslint-disable react/prop-types */

import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import React from "react";

const Card = ({ blog }) => {
  const published_date = new Date(blog.updated_at);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = published_date.toLocaleDateString("vi-VN", options);
  return (
    <Link
      className="rounded w-full flex"
      to={`/${blog.category_id}/${blog.id}`}
    >
      <div
        className="h-16 w-16 flex-none bg-cover text-center overflow-hidden opacity-100"
        style={{
          backgroundImage: `url(${blog.image_avatar_url})`,
        }}
      ></div>
      <div className="bg-white rounded pl-3 flex flex-col justify-between leading-normal">
        <div>
          <p className="-mt-1 text-gray-700 hover:text-green-600 font-bold text-md mb-1 text-justify mr-3 h-12 line-clamp-2">
            {blog.title}
          </p>
          <p className="text-gray-600 text-xs">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
