import React from "react";
import PropTypes from "prop-types";
import { Card } from "flowbite-react";

const CardCustom = ({ title, content }) => (
  <Card href="#" className="max-w-sm">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
  </Card>
);

export default CardCustom;

CardCustom.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
};

CardCustom.defaultProps = {
  content: ""
};
