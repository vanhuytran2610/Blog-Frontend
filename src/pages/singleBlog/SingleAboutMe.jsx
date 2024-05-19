import React, { useEffect } from "react";
import ButtonScrollToTop from "../../components/ButtonScrollToTop";
import Avatar from "../../components/Avatar";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../redux/features/singleBlog/blogSlice";

const SingleAboutMe = () => {
  const { categoryId } = useParams();

  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogById({ categoryId: categoryId, id: 5 }));
  }, [dispatch, categoryId]);

  return (
    <article className="pt-36 pb-10">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : !isError && blog.data ? (
        <div className="px-24 max-w-screen-xl mx-auto">
          {/* <!--image avatar --> */}
          <div
            className="container w-full mx-auto bg-white bg-cover mt-10 border-gray-400 border-t border-l border-r"
            style={{
              backgroundImage: `url(${blog.data?.image_avatar_url})`,
              height: "40rem",
              backgroundPosition: "center bottom",
            }}
          ></div>
          {/* <!--Container--> */}
          <div className="container mx-auto -mt-40 border-gray-400 border-b border-l border-r">
            <div className="mx-0">
              <div className="bg-gray-50 w-full p-8 md:px-24 md:py-16 text-lg md:text-xl text-gray-800">
                <p className="text-3xl md:text-5xl mb-10 font-bold text-justify leading-9">
                  {blog.data?.title}
                </p>
                <p className="text-md md:text-xl mb-5 text-justify leading-9">
                  {blog.data?.description}
                </p>
                <p className="text-md md:text-xl mb-5 text-justify leading-9">
                  {blog.data?.head_content}
                </p>
                <p className="text-md md:text-xl mb-5 text-justify leading-9">
                  {blog.data?.body_content}
                </p>
                <p className="text-md md:text-xl mb-5 text-justify leading-9">
                  {blog.data?.foot_content}
                </p>
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

export default SingleAboutMe;
