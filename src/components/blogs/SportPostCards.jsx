import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonScrollToTop from "../../layouts/ButtonScrollToTop";
import CardVertical from "../../layouts/CardVertical";
import { getBlogsByCategoryId } from "../../redux/features/blogsByCategory/blogsByCategorySlice";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../layouts/LoadingSpinner";
import NoBlogs from "../notFound/NoBlogs";
import { useTranslation } from "react-i18next";

const SportPostCards = () => {
  const { blogsByCategory, isLoading, isError, error } = useSelector(
    (state) => state.blogsByCategory
  );
  const [sortBy, setSortBy] = useState("updated_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const language = useSelector((state) => state.language);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(
      getBlogsByCategoryId({
        categoryId: categoryId,
        sortBy: sortBy,
        sortOrder: sortOrder,
        language: language,
      })
    );
  }, [dispatch, categoryId, sortBy, sortOrder, language]);

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSeeMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  useEffect(() => {
    document.title = t("sport.title_page");
  }, [t]);

  return (
    <div className="px-5 max-w-screen-xl mx-auto">
      <div className="mx-2 pt-32">
        <div className="md:mt-0 text-gray-700 font-bold text-5xl mx-3 mb-6 capitalize">
        {t("sport.title")}
        </div>
        <div className="mx-3 py-5 text-gray-600 text-md justify-stretch">
          <div>
            <label>
            {t("sort")}
              <select
                value={sortBy}
                onChange={handleSortByChange}
                className="bg-white mx-2 border border-gray-800 w-56 p-1"
              >
                <option value="updated_at">{t("sort_updated_at")}</option>
                <option value="title">{t("sort_title")}</option>
              </select>
            </label>
            <label className="mx-3">
            {t("by")}
              <select
                value={sortOrder}
                onChange={handleSortOrderChange}
                className="bg-white mx-2 border border-gray-800 w-56 p-1"
              >
                {sortBy === "title" ? (
                  <>
                    <option value="asc">{t("a_to_z")}</option>
                    <option value="desc">{t("z_to_a")}</option>
                  </>
                ) : (
                  <>
                    <option value="desc">{t("newest")}</option>
                    <option value="asc">{t("oldest")}</option>
                  </>
                )}
              </select>
            </label>
          </div>
        </div>
        <hr className="border-gray-300 border-2 mt-4" />
      </div>
      <div className="container px-6 pt-10 w-full lg:w-full">
        {isLoading ? (
          <div className="flex items-center justify-center mx-auto">
            <LoadingSpinner />
          </div>
        ) : !isError && blogsByCategory.data?.blogs?.length > 0 ? (
          <div className="md:flex flex-wrap -mx-2">
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
          </div>
        ) : (
          <NoBlogs />
        )}

        {!isLoading && blogsByCategory.data?.blogs?.length > visibleBlogs && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleSeeMore}
              className="bg-gray-300 text-gray-800 font-bold px-4 py-2"
            >
              {t("home.load_more")}
            </button>
          </div>
        )}
      </div>
      <ButtonScrollToTop />
    </div>
  );
};

export default SportPostCards;
