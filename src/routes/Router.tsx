import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import NoMatch from "../pages/NoMatch";

const Router = () => (
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
