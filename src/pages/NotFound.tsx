import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";

const NoMatch: React.FC = () => (
  <div className="py-96">
    <h2 className="text-center text-slate-800 text-4xl font-bold bg-white border-gray-200 dark:bg-gray-900 dark:text-white">
      404 Page Not Found
    </h2>

    <p className="bg-white border-gray-200 dark:bg-gray-900 font-semibold dark:text-white text-center w-full flex justify-center mt-10">
      <Link to="/">
        <Button size="lg">
          <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
          Go to the home page
        </Button>
      </Link>
    </p>
  </div>
);

export default NoMatch;
