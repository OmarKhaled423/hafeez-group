import "./App.css";
import { Fragment } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import ActivitiesPage from "./pages/activitiesPage/ActivitiesPage";
import PhotoGalaryPage from "./pages/photoGalaryPage/PhotoGalaryPage";
import DonationPage from "./pages/donationPage/DonationPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutUsPage />}></Route>
          <Route path="/products" element={<ActivitiesPage />}></Route>
          <Route path="/photos" element={<PhotoGalaryPage />}></Route>
          <Route path="/donation" element={<DonationPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
