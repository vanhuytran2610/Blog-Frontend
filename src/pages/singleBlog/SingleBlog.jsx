/* eslint-disable no-mixed-spaces-and-tabs */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "../../components/Avatar";
import ButtonScrollToTop from "../../components/ButtonScrollToTop";
import LoadingSpinner from "../../components/LoadingSpinner";
import RelatedPost from "../../components/RelatedPost";
import { getBlogById } from "../../redux/features/singleBlog/blogSlice";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { categoryId, id } = useParams();

  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogById({ categoryId: categoryId, id: id }));
  }, [dispatch, categoryId, id]);

  console.log(blog?.data?.images[0].image_path_url);

  const published_date = new Date(blog?.data?.updated_at);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = published_date.toLocaleDateString("en-US", options);

  return (
    <article className="pt-36">
      {isLoading ? (
        <LoadingSpinner />
      ) : !isError && blog.data ? (
        <div className="px-5 max-w-screen-xl mx-auto">
          {/* <!--titles --> */}
          <div className="text-center">
            <div className="flex justify-center items-center">
              <Avatar width={16} height={16} />
            </div>
            <p className="font-bold text-gray-600 text-sm md:text-lg capitalize mb-5">
              {" "}
              Tran Van Huy{" "}
            </p>
            <p className="text-lg md:text-xl text-green-600 font-bold mb-7">
              Published on {formattedDate}
            </p>
            <h2 className="font-bold break-normal text-3xl md:text-5xl capitalize">
              {blog.data?.title}
            </h2>
          </div>
          {/* <!--image avatar --> */}
          <div
            className="container w-full mx-auto bg-white bg-cover mt-10 rounded"
            style={{
              backgroundImage: `url(${blog.data?.image_avatar_url})`,
              height: "40rem",
              backgroundPosition: "center bottom",
            }}
          ></div>
          {/* <!--Container--> */}
          <div className="container max-w-5xl mx-auto -mt-36">
            <div className="mx-0 sm:mx-6">
              <div
                className="bg-gray-50 w-full p-8 md:px-24 md:py-16 text-lg md:text-xl text-gray-800 leading-normal"
                style={{ fontFamily: "Gill Sans, sans-serif" }}
              >
                {/* <!--Post Content--> */}

                {/* <!--Lead Para--> */}
                <p className="text-2xl md:text-3xl mb-5 text-center">
                  {blog.data?.description}
                </p>

                <ol className="pt-6 text-justify">
                  <li className="py-3">{blog.data?.head_content}</li>
                  <li className="py-3 px-3 grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-y-3 md:gap-y-2">
                    {blog.data?.images.slice(0, 6).map((image, index) => (
                      <li key={index} className="mr-2">
                        <img
                          src={image.image_path_url}
                          className="object-cover h-48 w-64"
                          alt={`Image ${index}`}
                        />
                      </li>
                    ))}
                  </li>
                  <li className="py-3">{blog.data?.body_content}</li>
                  <li className="pt-3 pb-6 px-3 flex justify-center items-center">
                    <img
                      src={blog.data?.images[6].image_path_url}
                      className="object-cover max-h-96 max-w-96"
                      alt="img"
                    />
                  </li>
                  <li className="">{blog.data?.foot_content}</li>
                </ol>

                {/* <!--/ Post Content--> */}
              </div>
            </div>
          </div>
          <hr className="h-1 mx-auto bg-gray-300 border-0 dark:bg-gray-700 mb-12"></hr>
          <p className="text-3xl font-bold text-gray-600 pb-8">Related Post</p>
          <RelatedPost categoryId={categoryId} id={id} />

          {/* <!--   Scroll Top Button  --> */}
          <ButtonScrollToTop />
          {/* <PopularBlog currentVideoId={id} tags={category} /> */}
        </div>
      ) : (
        <div>No any information</div>
      )}
    </article>
  );
};

export default SingleBlog;
