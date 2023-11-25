import React from "react";
import { Button } from "flowbite-react";
import CarouselCustom from "../components/Carousel/Carousel";

const Home = () => (
  <div>
    <h2 className="py-96 text-center bg-white border-gray-200 dark:bg-gray-900 font-semibold dark:text-white">
      Development in progress...
    </h2>

    <CarouselCustom />

    <img src="https://placehold.co/600x400" alt="test-placeholder" />
    <Button>Test flowbite component</Button>
  </div>
);

export default Home;
