/* eslint-disable react/prop-types */

import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import React from "react";

const Card = ({ blog }) => {
  const published_date = new Date(blog.updated_at);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = published_date.toLocaleDateString("en-US", options);
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
      <div className="bg-white rounded pl-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="-mt-1 text-gray-700 font-bold text-md mb-1 text-justify">
            {blog.title}
          </div>
          <p className="text-gray-600 text-xs">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
