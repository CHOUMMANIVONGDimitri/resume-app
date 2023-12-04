import React from "react";
import { Navbar } from "flowbite-react";

const NavLogo: React.FC = () => (
  <>
    <Navbar.Brand href="https://flowbite-react.com" />
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite React Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite React
    </span>
  </>
);

const NavbarCustom: React.FC = () => (
  <Navbar fluid rounded>
    <NavLogo />
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="/" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/">About</Navbar.Link>
      <Navbar.Link href="/">Services</Navbar.Link>
      <Navbar.Link href="/">Pricing</Navbar.Link>
      <Navbar.Link href="/">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarCustom;
