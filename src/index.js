import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WishListPage from "./pages/WishListPage";
import ToursPage from "./pages/ToursPage";
import Error from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import SearchPage from "./pages/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="WishList" element={<WishListPage />} />
        <Route path="Search" element={<SearchPage />} />
        <Route path="Tours/:id" element={<ToursPage />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
