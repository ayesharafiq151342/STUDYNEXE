import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./navbar"; // Ensure Navbar is exported as default
import ServicesPage from './Service.js'
import LogoSlider from "./logo-slider"; // Ensure LogoSlider is exported as default
import MissionAboutUs from "./m.js";
import IELTSPage from './its.js'; 
import CareerCounseling from "./Career_Counseling.js";
import Addmissionprocess from "./Adm_Pro.js";
import InterviewPreparation from "./inter_p.js";
import ScholarshipProcess from "./scholar_app.js";
import VisaApplication from "./v_a.js";
import StudyInUK from "./uk.js";
import StudyInc from "./Canada.js";
import StudyInUSA from "./u.js";
import StudyInAUS from "./Australia.js";
import StudyInUAE from "./UAE.js";
import ContactForm from './Contact.js'

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
  { path: "/scholar_app.js", element: <ScholarshipProcess /> },
  { path: "/inter_p.js", element: <InterviewPreparation /> },
  { path: "/v_a.js", element: <VisaApplication /> },
  { path: "/uk.js", element: <StudyInUK /> },
  { path: "/Canada.js", element: <StudyInc /> },
  { path: "/u.js", element: <StudyInUSA /> },
  { path: "/Australia.js", element: <StudyInAUS /> },
  { path: "/UAE.js", element: <StudyInUAE /> },

  { path: "/Contact.js", element: <ContactForm /> },











  


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
