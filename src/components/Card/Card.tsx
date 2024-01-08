import React from "react";
import { Card } from "flowbite-react";

interface CardCustomProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
  path?: string;
  centered?: boolean;
  animation?: boolean;
  imgSrc?: string;
  imgAlt?: string;
}

const CardCustom: React.FC<CardCustomProps> = ({
  title,
  content,
  children,
  path,
  centered,
  imgAlt,
  imgSrc,
  animation
}) => (
  <Card
    href={path}
    className={`flex flex-row max-w-sm ${centered ? "justify-center" : ""} ${
      animation ? "ease-in-out hover:scale-125 duration-100" : ""
    } `}
    imgSrc={imgSrc}
    imgAlt={imgAlt}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
    {children}
  </Card>
);

CardCustom.defaultProps = {
  content: "",
  children: undefined,
  path: "#",
  centered: true,
  imgAlt: "",
  imgSrc: "",
  animation: false
};

export default CardCustom;
