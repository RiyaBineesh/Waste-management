import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Landingpage from "./Components/Landingpage";
import Ourservices from "./Components/Ourservices";
import Testimonials from "./Components/Testimonials";
import Enquiry from "./Components/Enquiry";
import Footer from "./Components/Footer";
import Aboutus from "./Components/Aboutus";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landingpage />} />

        </Route>
        <Route path="OurService" element={<Ourservices />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="Enquiry" element={<Enquiry />} />
        <Route path='Footer' element={<Footer />}  />
        <Route path='Aboutus' element={<Aboutus />}  />
      </Routes>
    </BrowserRouter>
  );
};

export default App;






