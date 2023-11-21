import React from "react";
import { Outlet, Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

const Layout = () => (
  <header>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <a
            href="tel:5541251234"
            className="text-sm  text-gray-500 dark:text-white hover:underline"
          >
            (555) 412-1234
          </a>
          <Link
            to="/login"
            className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
    <nav className="bg-gray-50 dark:bg-gray-700 sticky top-0">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <Link
                className="text-gray-900 dark:text-white hover:underline"
                to="/resume-app/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-900 dark:text-white hover:underline"
                to="/resume-app/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-900 dark:text-white hover:underline"
                to="/resume-app/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-900 dark:text-white hover:underline"
                to="/resume-app/nothing-here"
              >
                Nothing Here
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <hr />
    <Outlet />
    <hr />
    <Footer />
  </header>
);

export default Layout;
