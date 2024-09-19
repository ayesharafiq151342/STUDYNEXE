import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./navbar"; // Ensure Navbar is exported as default
import Carousel from "./carousel"; // Ensure Carousel is exported as default
import LogoSlider from "./logo-slider"; // Ensure LogoSlider is exported as default
import ContactSection from './footor'; // Ensure ContactSection is exported as default

// Define your routes
const router = createBrowserRouter([
  { path: "/", element: <Navbar /> },  // Home route showing Navbar
]);

function App() {
  return (
    <>
      {/* Router Provider */}
      <RouterProvider router={router} />
      <Carousel /> {/* Display Carousel Component */}
      <LogoSlider /> {/* Main content */}
     
    </>
  );
}

export default App;
