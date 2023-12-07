import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CarouselCustom from "../components/Carousel/Carousel.tsx";
import CardCustom from "../components/Card/Card.tsx";
import Separator from "../components/Separator/Separator.tsx";

import datas from "../constants/datas/index.ts";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="flex px-10 bg-mountain-home bg-cover bg-center py-52 mb-20">
        <CardCustom
          title={t("pages.home.section-1.card.title")}
          content={t("pages.home.section-1.card.content")}
        />
      </section>
      <Separator content="News" />
      <section className="mx-0 md:mx-10 lg:mx-20">
        <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5 mb-10 mx-auto w-1/2">
          {t("pages.home.section-1.paragraph")}
        </p>
        <CarouselCustom data={datas} />
      </section>
      <Separator content="Informations" />
      <section className="flex my-10 flex-col flex-nowrap items-center py-24">
        <CardCustom title="" path="/resume-app/about">
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 rounded-full shadow-lg"
              src="./images/profile-picture.png"
              height="96"
              width="96"
              alt="placeholder"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              CHOUMMANIVONG Dimitri
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Web Developper
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="https://www.linkedin.com/in/dimitri-choummanivong-507669228/"
                target="blank"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                LinkedIn
              </a>
              <Link
                to="/resume-app/contact"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                contact me
              </Link>
            </div>
          </div>
        </CardCustom>

        <div className="mt-16 bg-slate-200 w-full flex flex-wrap justify-center gap-6 py-24 px-10">
          <div className="w-full md:w-1/2 mx-auto md:mx-0">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-800 lg:mb-6 lg:text-4xl dark:text-white">
              GITHUB PROFILE
            </h2>
            <p className="text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5 mb-10">
              {t("pages.home.section-2.github.paragraph")}
            </p>
          </div>
          <img
            className="h-96 rounded-2xl mx-auto md:mx-0"
            src="./images/background-github-profil.jpg"
            alt="github profile user"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
