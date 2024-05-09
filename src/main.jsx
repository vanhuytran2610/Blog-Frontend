import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
        element: <SingleBlog />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
