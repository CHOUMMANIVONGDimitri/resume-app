import React from "react";
import { Outlet } from "react-router-dom";
import NavbarCustom from "../components/Navbar/Navbar.tsx";
import Footer from "../components/Footer/Footer.tsx";
import BannerCustom from "../components/Banner/Banner.tsx";

const navLinks = [
  {
    name: "Home",
    path: ""
  },
  {
    name: "About",
    path: "about"
  },
  {
    name: "Projects",
    path: "projects"
  },
  {
    name: "Contact",
    path: "contact"
  }
];

const Layout: React.FC = () => (
  <>
    <BannerCustom path="https://github.com/CHOUMMANIVONGDimitri/resume-app" />
    <header className="sticky z-10 w-full top-0 start-0">
      <NavbarCustom
        imgSrc="/public/images/logo-app.jpg"
        nameApp="resume-app"
        linksApp={navLinks}
      />
    </header>
    <hr />
    <main>
      <Outlet />
    </main>
    <hr />
    <Footer />
  </>
);

export default Layout;
