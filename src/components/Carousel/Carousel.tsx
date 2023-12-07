import React from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Carousel, Flowbite } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  carousel: {
    indicators: {
      active: {
        off: "bg-slate-800/50 hover:bg-slate-800 dark:bg-slate-800/50 dark:hover:bg-slate-800",
        on: "bg-slate-800 dark:bg-slate-800"
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },

    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-slate-800 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-gray-800 dark:text-gray-800 sm:h-6 sm:w-6"
    }
  }
};

interface ContentSlide {
  path: string;
  alt: string;
}
interface CarouselCustomProps {
  data: ContentSlide[];
}

const CarouselCustom: React.FC<CarouselCustomProps> = ({ data }) =>
  data?.length > 0 && (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel pauseOnHover>
          {data?.length > 0 &&
            data?.map((el) => (
              <img src={el.path} alt={el.alt} className=" w-auto h-full" />
            ))}
        </Carousel>
      </Flowbite>
    </div>
  );

export default CarouselCustom;
