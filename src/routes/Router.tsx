import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import NoMatch from "../pages/NoMatch.tsx";

const Router: React.FC = () => (
  <Routes>
    <Route path="/resume-app/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default Router;
