import React, { useEffect } from "react";
import ButtonScrollToTop from "../../layouts/ButtonScrollToTop";
import RelatedPost from "../../layouts/RelatedPost";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../redux/features/singleBlog/blogSlice";
import LoadingSpinner from "../../layouts/LoadingSpinner";
import Avatar from "../../layouts/Avatar";
import YoutubeCard from "../../layouts/YoutubeCard";
import NotFound from "../notFound/NotFound";
import { useTranslation } from "react-i18next";

const SingleMusicBlog = () => {
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
          <div className="flex flex-wrap justify-between">
            {/* <!--2/3 col --> */}
            <div className="w-full md:w-2/3 pt-4 pb-6 pr-10">
              <div className="pb-8 h-96 md:h-[500px]">
                <YoutubeCard video_url={blog.data?.video_url} />
              </div>
              <p className="font-bold break-normal text-xl md:text-2xl capitalize">
                {blog.data?.title}
              </p>
              <div className="inset-x-0 bottom-0 pt-4 pb-6">
                <div className="flex">
                  <Avatar width={12} height={12} />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-700 text-md capitalize">
                      {" "}
                      Tran Van Huy{" "}
                    </p>
                    <p className="text-gray-600 text-sm">3 {t("detail.subscriber")}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200">
                <div className="mx-5 py-5">
                  <p className="text-gray-600 font-bold text-md mb-4">
                    {t("detail.date")}
                    {language === "vi" ? formattedDate_vi : formattedDate_en}
                  </p>
                  <p className="text-justify leading-7">
                    {blog.data?.description &&
                      blog.data.description.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                </div>
              </div>
            </div>

            {/* <!--1/3 col --> */}
            <div className="w-full md:w-1/3 pt-4 h-96 md:h-[500px] pr-10 md:pr-0">
              <div className="bg-white border-gray-400 border overflow-hidden shadow-lg">
                <p className="mx-10 font-bold text-2xl text-gray-900 mt-6 mb-8">
                  {t("detail.relate_post")}
                </p>
                <RelatedPost categoryId={categoryId} id={id} />
              </div>
            </div>
          </div>
          {/* <!--   Scroll Top Button  --> */}
          <ButtonScrollToTop />
        </div>
      ) : (
        <NotFound />
      )}
    </article>
  );
};

export default SingleMusicBlog;
