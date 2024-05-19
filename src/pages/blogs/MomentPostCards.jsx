import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonScrollToTop from "../../components/ButtonScrollToTop";
import Card from "./Card";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getBlogsByCategoryId } from "../../redux/features/blogsByCategory/blogsByCategorySlice";
import { useParams } from "react-router-dom";
import CardVertical from "./CardVertical";

const MomentPostCards = () => {
  const { blogsByCategory, isLoading, isError, error } = useSelector(
    (state) => state.blogsByCategory
  );
  const [sortBy, setSortBy] = useState("updated_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  useEffect(() => {
    dispatch(
      getBlogsByCategoryId({
        categoryId: categoryId,
        sortBy: sortBy,
        sortOrder: sortOrder,
      })
    );
  }, [dispatch, categoryId, sortBy, sortOrder]);

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSeeMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  return (
    <div className="px-5 max-w-screen-xl mx-auto">
      <div className="mx-2 pt-32">
        <div className="md:mt-0 text-gray-700 font-bold text-5xl mx-3 mb-5 capitalize">
          Khoảnh Khắc Cuộc Sống
        </div>
        <div className="mx-3 py-5 text-gray-800 font-bold text-md justify-stretch">
          <div>
            <label>
              Sắp xếp:
              <select
                value={sortBy}
                onChange={handleSortByChange}
                className="bg-gray-300 mx-2 border border-gray-800 w-56 p-1"
              >
                <option value="updated_at">Ngày phát hành</option>
                <option value="title">Tiêu đề</option>
              </select>
            </label>
            <label className="mx-3">
              Theo:
              <select
                value={sortOrder}
                onChange={handleSortOrderChange}
                className="bg-gray-300 mx-2 border border-gray-800 w-56 p-1"
              >
                {sortBy === "title" ? (
                  <>
                    <option value="asc">Từ A đến Z</option>
                    <option value="desc">Từ Z đến A</option>
                  </>
                ) : (
                  <>
                    <option value="desc">Mới nhất</option>
                    <option value="asc">Cũ nhất</option>
                  </>
                )}
              </select>
            </label>
          </div>
        </div>
        <hr className="border-gray-300 border-2" />
      </div>
      <div className="container px-6 pt-10 w-full lg:w-full">
        <div className="md:flex flex-wrap -mx-2">
          {isLoading ? (
            <div className="flex items-center justify-center mx-auto">
              <LoadingSpinner />
            </div>
          ) : !isError && blogsByCategory.data?.blogs?.length > 0 ? (
            <div className="md:flex">
              {blogsByCategory.data?.blogs
                ?.slice(0, visibleBlogs)
                ?.map((blog, index) => (
                  <CardVertical
                    key={index}
                    blog={blog}
                    categoryId={blogsByCategory.data?.category.id}
                  />
                ))}
            </div>
          ) : (
            <div>No blogs found</div>
          )}
        </div>
        {!isLoading && blogsByCategory.data?.blogs?.length > visibleBlogs && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleSeeMore}
              className="bg-gray-300 text-gray-800 font-bold px-4 py-2"
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>
      <ButtonScrollToTop />
    </div>
  );
};

export default MomentPostCards;
