import React from "react";
import { useTranslation } from "react-i18next";
import CarouselCustom from "../components/Carousel/Carousel";
import CardCustom from "../components/Card/Card";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <CardCustom title={t("pages.home.card.title")} />
      <CarouselCustom />
    </div>
  );
};
export default Home;
