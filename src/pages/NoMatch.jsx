import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <div>
    <h2 className="py-96 text-center bg-white border-gray-200 dark:bg-gray-900 font-semibold dark:text-white">
      Page Not Found...
    </h2>

    <p className="bg-white border-gray-200 dark:bg-gray-900 font-semibold dark:text-white">
      <Link to="/resume-app/">Go to the home page</Link>
    </p>
  </div>
);

export default NoMatch;
