/* eslint-disable no-mixed-spaces-and-tabs */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "../../layouts/Avatar";
import ButtonScrollToTop from "../../layouts/ButtonScrollToTop";
import LoadingSpinner from "../../layouts/LoadingSpinner";
import RelatedPost from "../../layouts/RelatedPost";
import { getBlogById } from "../../redux/features/singleBlog/blogSlice";
import { Link, useParams } from "react-router-dom";
import YoutubeCard from "../../layouts/YoutubeCard";
import NotFound from "../notFound/NotFound";
import { useTranslation } from "react-i18next";

const SingleBlog = () => {
  const { categoryId, id } = useParams();

  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );
  const { t } = useTranslation();
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getBlogById({ categoryId: categoryId, id: id, language: language })
    );
  }, [dispatch, categoryId, id, language]);

  useEffect(() => {
    document.title = blog.data?.title.toUpperCase();
  }, [blog]);

  const published_date = new Date(blog?.data?.updated_at);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate_vi = published_date.toLocaleDateString("vi-VN", options);
  const formattedDate_en = published_date.toLocaleDateString("en-US", options);

  return (
    <article className="pt-36">
      {isLoading ? (
        <div className="flex items-center justify-center mx-auto">
          <LoadingSpinner />
        </div>
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
              {t("detail.date")}
              {language === "vi" ? formattedDate_vi : formattedDate_en}
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
              backgroundPosition: "center",
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
                  <li className="py-3">
                    {blog.data?.head_content &&
                      blog.data.head_content.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </li>
                  <li className="py-3 px-3 grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-y-3 md:gap-y-2">
                    {blog.data?.images.slice(0, 6).map((image, index) => (
                      <li key={index} className="mr-2">
                        <img
                          src={image?.image_path_url}
                          className="object-cover h-48 w-64"
                          alt={`Image ${index}`}
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </li>
                  <li className="py-3">
                    {blog.data?.body_content &&
                      blog.data.body_content.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </li>
                  <li className="pt-3 pb-6 px-3 flex justify-center items-center">
                    <img
                      src={blog.data?.images[6]?.image_path_url}
                      className="object-cover max-h-96 max-w-96"
                      alt="img"
                      loading="lazy"
                    />
                  </li>
                  <li className="pb-6">
                    {blog.data?.foot_content &&
                      blog.data.foot_content.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </li>
                  {(blog.data?.title?.toLowerCase().includes("cầu lông") ||
                    blog.data?.title?.toLowerCase().includes("badminton")) && (
                    <>
                      <li className="pb-6 h-96 md:h-[500px]">
                        <YoutubeCard video_url={blog.data?.video_url} />
                      </li>
                      <li className="">
                        {t("detail.badminton_content.head")}
                        <Link
                          to="https://youtube.com/playlist?list=PLa4S6u0VM2JI7U5ES-_VZ5EFhq9oDxsdD&si=1nvNRnuhVC7kOow0"
                          className="border-b-2 border-gray-900 hover:border-green-600 hover:text-green-600 font-bold"
                          target="_blank"
                        >
                          {t("detail.badminton_content.link")}
                        </Link>{" "}
                        {t("detail.badminton_content.foot")}
                      </li>
                    </>
                  )}
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
        </div>
      ) : (
        <NotFound />
      )}
    </article>
  );
};

export default SingleBlog;
