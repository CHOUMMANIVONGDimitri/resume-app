import React from "react";
import { useTranslation } from "react-i18next";

import CarouselCustom from "../components/Carousel/Carousel.tsx";
import CardCustom from "../components/Card/Card.tsx";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="flex px-10 bg-mountain-home bg-cover bg-center py-52 mb-20">
        {/* ADD BACKGROUND HERE & title */}
        <CardCustom
          title={t("pages.home.card.title")}
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, autem rem! Veritatis labore modi nemo natus, dolor quos incidunt repellat tempore ipsa voluptates voluptate cum aperiam voluptatem harum recusandae hic itaque, omnis molestiae sequi nobis possimus eos iusto vel quidem! Sunt aliquid facere alias similique, quia at eum veritatis nesciunt?"
        />
      </section>
      <section className="mx-0 md:mx-10 lg:mx-20">
        <CarouselCustom />
      </section>
      <section className="flex m-10 justify-center">
        <CardCustom title="">
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 rounded-full shadow-lg"
              src="https://placehold.co/400"
              height="96"
              width="96"
              alt="placeholder"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              John Doe
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Web Developper
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="/"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add friend
              </a>
              <a
                href="/"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </CardCustom>
      </section>
    </>
  );
};

export default Home;
