import React from "react";
import { Link } from "react-router-dom";

import { Navbar } from "flowbite-react";
import NavLogo from "../NavLogo/NavLogo.tsx";

interface NavLinks {
  name: string;
  path: string;
}

interface NavbarProps {
  nameApp: string;
  linksApp: Array<NavLinks> | [];
  logoApp?: React.ReactElement<HTMLImageElement>;
}

const NavbarCustom: React.FC<NavbarProps> = ({
  nameApp,
  linksApp,
  logoApp
}) => (
  <Navbar fluid rounded>
    {logoApp || <NavLogo nameApp={nameApp} />}
    <Navbar.Toggle />
    <Navbar.Collapse>
      {linksApp?.map((l) => <Link to={`/${nameApp}/${l.path}`}>{l.name}</Link>)}
    </Navbar.Collapse>
  </Navbar>
);

NavbarCustom.defaultProps = {
  logoApp: undefined
};

export default NavbarCustom;
