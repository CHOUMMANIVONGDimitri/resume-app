import React from "react";
import { Outlet } from "react-router-dom";
import NavbarCustom from "../components/Navbar/Navbar.tsx";
import Footer from "../components/Footer/Footer.tsx";
import BannerCustom from "../components/Banner/Banner.tsx";

const Layout: React.FC = () => (
  <>
    <div className="fixed w-full z-20 top-0 start-0">
      <BannerCustom />
      <NavbarCustom />
    </div>
    <hr />
    <Outlet />
    <hr />
    <Footer />
  </>
);

export default Layout;
