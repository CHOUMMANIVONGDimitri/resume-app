import React from "react";
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { useTranslation } from "react-i18next";

const BannerCustom: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span className="[&_p]:inline">
              {`${t("banner.message")} `}
              {/* TO DO : create variable for better management of links */}
              <a
                href="https://www.google.com"
                className="decoration-600 dark:decoration-500 inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                {t("banner.link")}
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
};

export default BannerCustom;
