import { Outlet } from "react-router-dom";
import NavbarCustom from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BannerCustom from "../components/Banner/Banner";

const Layout = () => (
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
