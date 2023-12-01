import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <div className="py-96">
    <h2 className="text-center bg-white border-gray-200 dark:bg-gray-900 font-semibold dark:text-white">
      404 Page Not Found
    </h2>

    <p className="bg-white border-gray-200 dark:bg-gray-900 font-semibold dark:text-white text-center">
      <Link to="/resume-app/">Go to the home page</Link>
    </p>
  </div>
);

export default NoMatch;
