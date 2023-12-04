import React from "react";
import { useTranslation } from "react-i18next";
import CarouselCustom from "../components/Carousel/Carousel.tsx";
import CardCustom from "../components/Card/Card.tsx";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <CardCustom title={t("pages.home.card.title")} />
      <CarouselCustom />
    </div>
  );
};
export default Home;
