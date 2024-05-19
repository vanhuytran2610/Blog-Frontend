/* eslint-disable react-refresh/only-export-components */
import { RouterProvider, createBrowserRouter, useParams } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import MomentPostCards from "./pages/blogs/MomentPostCards.jsx";
import MusicPostCards from "./pages/blogs/MusicPostCards.jsx";
import PostCards from "./pages/blogs/PostCards.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import SingleAboutMe from "./pages/singleBlog/SingleAboutMe.jsx";
import SingleBlog from "./pages/singleBlog/SingleBlog.jsx";
import SportPostCards from "./pages/blogs/SportPostCards.jsx";
import SingleMusicBlog from "./pages/singleBlog/SingleMusicBlog.jsx";
import SearchBlogs from "./pages/blogs/SearchBlogs.jsx";

function RenderBlogBasedOnCategory() {
  const { categoryId } = useParams();
  
  // Convert categoryId to a number for comparison
  const categoryIdNumber = parseInt(categoryId);
  
  // Conditionally render SingleBlog or SingleMusicBlog
  if (categoryIdNumber === 4) {
    return <SingleMusicBlog />;
  } else {
    return <SingleBlog />;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about-me/:categoryId",
        element: <SingleAboutMe />
      },
      {
        path: "/all-blogs",
        element: <PostCards />
      },
      {
        path: "moment/:categoryId",
        element: <MomentPostCards />
      },
      {
        path: "sport/:categoryId",
        element: <SportPostCards />
      },
      {
        path: "music/:categoryId",
        element: <MusicPostCards />
      },
      {
        path: "/:categoryId/:id",
        element: <RenderBlogBasedOnCategory />
      },
      {
        path: "/search",
        element: <SearchBlogs />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
