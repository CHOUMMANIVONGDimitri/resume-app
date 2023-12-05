import React from "react";
import { Card } from "flowbite-react";

interface CardCustomProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
}

const CardCustom: React.FC<CardCustomProps> = ({
  title,
  content,
  children
}) => (
  <Card href="#" className="max-w-sm">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
    {children}
  </Card>
);

CardCustom.defaultProps = {
  content: "",
  children: undefined
};

export default CardCustom;
