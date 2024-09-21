import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./navbar"; // Ensure Navbar is exported as default
import ServicesPage from './Service.js'
import LogoSlider from "./logo-slider"; // Ensure LogoSlider is exported as default
import MissionAboutUs from "./m.js";
import IELTSPage from './its.js'; 
import CareerCounseling from "./Career_Counseling.js";
import Addmissionprocess from "./Adm_Pro.js";
const Layout = () => (
  <>
    <Navbar /> {/* Navbar will be rendered on all pages */}
    <Outlet />  {/* Outlet is where the routed components will be displayed */}
  </>
);

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout component wraps routes and includes the Navbar
    children: [

  { path: "/", element: <LogoSlider /> },  
  { path: "/logo-slider.js", element: <LogoSlider /> },
  { path: "/m.js", element: <MissionAboutUs /> },
  { path: "/Service.js", element: <ServicesPage /> },
  { path: "/its.js", element: <IELTSPage /> },
  { path: "/Career_Counseling.js", element: <CareerCounseling /> },
  { path: "/Adm_Pro.js", element: <Addmissionprocess /> },



  


],},// Home route showing Navbar
]);

function App() {
  return (
    <>

      {/* Router Provider */}
      <RouterProvider router={router} />

     {/* Footer or contact section */}
    </>
  );
}

export default App;
