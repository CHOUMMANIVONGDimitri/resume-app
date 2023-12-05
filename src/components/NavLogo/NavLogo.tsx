import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NavLogoProps {
  nameApp: string;
  logo?: ReactElement<HTMLImageElement>;
}

const NavLogo: React.FC<NavLogoProps> = ({ nameApp, logo }) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to={nameApp}>
        {logo || (
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="application clickable logo"
          />
        )}
      </Link>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        {`${t("navbar.title")}`}
      </span>
    </>
  );
};

NavLogo.defaultProps = {
  logo: undefined
};

export default NavLogo;
