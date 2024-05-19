import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchBlog } from "../../redux/features/searchBlogs/searchBlogsSlice";
import CardVertical from "./CardVertical";
import ButtonScrollToTop from "../../components/ButtonScrollToTop";
import LoadingSpinner from "../../components/LoadingSpinner";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchBlogs = () => {
  const { blogsBySearch, isLoading, isError, error } = useSelector(
    (state) => state.blogsBySearch
  );
  const dispatch = useDispatch();
  const query = useQuery();
  const searchTerm = query.get("search");
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchBlog(searchTerm));
    }
  }, [dispatch, searchTerm]);

  const handleSeeMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  return (
    <div className="px-5 max-w-screen-xl mx-auto">
      <div className="mx-2 pt-36">
        <div className="md:mt-0 text-gray-700 font-bold text-5xl mx-3 mb-5 capitalize">
          Tìm kiếm
        </div>
        <div className="mx-3 py-5 text-gray-400 font-bold italic text-xl justify-stretch">
          Kết quả tìm kiếm cho từ khóa: {searchTerm}
        </div>
        <hr className="border-gray-300 border-2" />
      </div>
      <div className="container px-6 pt-10 w-full lg:w-full">
        <div className="md:flex flex-wrap -mx-2">
          {isLoading ? (
            <div className="flex items-center justify-center mx-auto">
              <LoadingSpinner />
            </div>
          ) : !isError && blogsBySearch.data?.length > 0 ? (
            <div className="md:flex">
              {blogsBySearch.data?.slice(0, visibleBlogs)?.map((blog, index) => (
                <CardVertical
                  key={index}
                  blog={blog}
                  categoryId={blog.category_id}
                />
              ))}
            </div>
          ) : (
            <div>No blogs found</div>
          )}
        </div>
        {!isLoading && blogsBySearch.data?.length > visibleBlogs && (
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

export default SearchBlogs;
