/* eslint-disable react-refresh/only-export-components */
import { RouterProvider, createBrowserRouter, useParams } from "react-router-dom";

import App from "./App.jsx";
import Home from "./components/home/Home.jsx";
import MomentPostCards from "./components/blogs/MomentPostCards.jsx";
import MusicPostCards from "./components/blogs/MusicPostCards.jsx";
import PostCards from "./components/blogs/PostCards.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import SingleAboutMe from "./components/singleBlog/SingleAboutMe.jsx";
import SingleBlog from "./components/singleBlog/SingleBlog.jsx";
import SportPostCards from "./components/blogs/SportPostCards.jsx";
import SingleMusicBlog from "./components/singleBlog/SingleMusicBlog.jsx";
import SearchBlogs from "./components/blogs/SearchBlogs.jsx";
import Login from "./authentications/Login.jsx";
import NotFound from "./components/notFound/NotFound.jsx";

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
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
