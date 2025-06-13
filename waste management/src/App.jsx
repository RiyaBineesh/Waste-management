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
import Executiveservices from "./Components/Executiveservices";
import Ourservicesdetailed from "./Components/Ourservicesdetailed";
import Blog from "./Components/Blog";


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landingpage />} />
          <Route path='Aboutus' element={<Aboutus />}  />
          <Route path='Ourservice' element={<Ourservices />}  />
          <Route path='Testimonials' element={<Testimonials />}  />
          <Route path='Blog' element={<Blog />}  />
          <Route path='Ourservicesdetailed' element={<Ourservicesdetailed />}  />

        </Route>
        <Route path="OurService" element={<Ourservices />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="Enquiry" element={<Enquiry />} />
        <Route path='Footer' element={<Footer />}  />
        <Route path='Executiveservices' element={<Executiveservices />}  />
        <Route path='Ourservicesdetailed' element={<Ourservicesdetailed />}  />
        <Route path='Blog' element={<Blog />}  />
       
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;






