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
  imgSrc?: string;
}

const NavbarCustom: React.FC<NavbarProps> = ({
  nameApp,
  linksApp,
  logoApp,
  imgSrc
}) => (
  <Navbar fluid rounded>
    {logoApp || <NavLogo nameApp="/resume-app/" imgSrc={imgSrc} />}
    <Navbar.Toggle />
    <Navbar.Collapse>
      {linksApp?.map((l) => (
        <Link key={l.name} to={`/${nameApp}/${l.path}`}>
          {l.name}
        </Link>
      ))}
    </Navbar.Collapse>
  </Navbar>
);

NavbarCustom.defaultProps = {
  logoApp: undefined,
  imgSrc: ""
};

export default NavbarCustom;
