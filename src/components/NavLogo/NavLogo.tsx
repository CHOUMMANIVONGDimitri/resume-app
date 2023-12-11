import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NavLogoProps {
  nameApp: string;
  logo?: ReactElement<HTMLImageElement>;
  imgSrc?: string;
}

const NavLogo: React.FC<NavLogoProps> = ({ nameApp, logo, imgSrc }) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to={nameApp}>
        {logo || (
          <img
            src={imgSrc || "https://flowbite.com/docs/images/logo.svg"}
            className="mr-3 h-6 sm:h-9 rounded-full"
            alt="application clickable logo"
          />
        )}
      </Link>
      <span className="self-center whitespace-nowrap text-medium md:text-xl font-semibold dark:text-white">
        {`${t("navbar.title")}`}
      </span>
    </>
  );
};

NavLogo.defaultProps = {
  logo: undefined,
  imgSrc: ""
};

export default NavLogo;
