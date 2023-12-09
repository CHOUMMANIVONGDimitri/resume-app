import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Projects from "../pages/Projets.tsx";
import Contact from "../pages/Contact.tsx";
import NoMatch from "../pages/404.tsx";

const Router: React.FC = () => (
  <Routes>
    <Route path="/resume-app/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default Router;
