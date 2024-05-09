import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonScrollToTop from "../../components/ButtonScrollToTop";
import CardVertical from "./CardVertical";
import { getBlogsByCategoryId } from "../../redux/features/blogsByCategory/blogsByCategorySlice";
import { useParams } from "react-router-dom";

const SportPostCards = () => {
  const { blogsByCategory, isLoading, isError, error } = useSelector(
    (state) => state.blogsByCategory
  );
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogsByCategoryId(categoryId));
  }, [dispatch, categoryId]);

  return (
    <div className="px-5 max-w-screen-xl mx-auto">
      <div className="mx-2 pt-36">
        <div className="md:mt-0 text-gray-700 font-bold text-5xl mx-3 mb-5 capitalize">
          Thế giới thể thao của tôi
        </div>
        <div className="mx-3 py-5 text-gray-400 italic font-bold text-xl justify-stretch">
          ...Thể Thao Của Tôi là nơi chia sẻ những trải nghiệm, cảm xúc và hành
          trình của tôi trong thế giới đa dạng và phong phú của các môn thể
          thao. Từ những khoảnh khắc đầy hứng khởi trên sân cỏ, sân đấu, đến
          những bài học và thành công trên con đường rèn luyện và phát triển bản
          thân. Hãy cùng tôi khám phá những kỷ niệm và cảm xúc không thể nào
          quên trong thế giới Thể Thao Của Tôi...
        </div>
        <hr className="border-gray-300 border-2" />
      </div>
      <div className="container px-6 pt-10 w-full lg:w-full">
        <div className="md:flex flex-wrap -mx-2">
          {!isLoading && !isError && blogsByCategory.data?.blogs?.length > 0 ? (
            <>
              {blogsByCategory.data?.blogs?.map((blog, index) => (
                <CardVertical
                  key={index}
                  blog={blog}
                  categoryId={blogsByCategory.data?.category.id}
                />
              ))}
            </>
          ) : (
            <div>No blogs found</div>
          )}
        </div>
      </div>
      <ButtonScrollToTop />
    </div>
  );
};

export default SportPostCards;
