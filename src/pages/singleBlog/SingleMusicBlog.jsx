import React, { useEffect } from "react";
import ButtonScrollToTop from "../../components/ButtonScrollToTop";
import RelatedPost from "../../components/RelatedPost";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../redux/features/singleBlog/blogSlice";
import LoadingSpinner from "../../components/LoadingSpinner";
import Avatar from "../../components/Avatar";
import YoutubeCard from "../../components/YoutubeCard";

const SingleMusicBlog = () => {
  const { categoryId, id } = useParams();

  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogById({ categoryId: categoryId, id: id }));
  }, [dispatch, categoryId, id]);

  const published_date = new Date(blog?.data?.updated_at);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = published_date.toLocaleDateString("vi-VN", options);
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
                    <p className="text-gray-600 text-sm">3 Người Đăng Ký</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200">
                <div className="mx-5 py-5">
                  <p className="text-gray-600 font-bold text-md mb-4">
                    Ngày phát hành: {formattedDate}
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
                  Related Post
                </p>
                <RelatedPost categoryId={categoryId} id={id} />
              </div>
            </div>
          </div>
          {/* <!--   Scroll Top Button  --> */}
          <ButtonScrollToTop />
        </div>
      ) : (
        <div>No any information</div>
      )}
    </article>
  );
};

export default SingleMusicBlog;
