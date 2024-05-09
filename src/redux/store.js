import blogReducer from "./features/singleBlog/blogSlice";
import blogsByCategoryReducer from "./features/blogsByCategory/blogsByCategorySlice";
import blogsExceptCurrReducer from "./features/blogsExceptCurrent/blogsExceptCurrSlice";
import blogsReducer from "./features/blogs/blogsSlice";
import { configureStore } from "@reduxjs/toolkit";
import extraImgReducer from "./features/extraImages/extraImgSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blogsByCategory: blogsByCategoryReducer,
    blog: blogReducer,
    blogsExceptCurr: blogsExceptCurrReducer,
    extraImg: extraImgReducer,
  },
});
