// AsideNav.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import sunitaSharma from "../assets/sunita sharma.jpg";
const AsideNav = () => {
  // Use the useLocation hook to get the current path
  const location = useLocation();
  // Access the path from the location object
  const currentPath = location.pathname; // Use the useLocation hook to get the current path

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`${
          isMenuOpen ? "pl-4" : "pl-1"
        } md:hidden bg-gray-800 py-2 `}
      >
        {" "}
      </div>
      <aside
        className={`bg-gray-800 text-white h-screen w-full p-4 ${
          isMenuOpen ? "block" : "hidden"
        } md:block md:w-1/4 mb-4 overflow-y-auto `}
      >
        <Link to="/" className="flex items-center mb-8 ">
          <h1 className="text-2xl font-bold text-white-600">Sunita Sharma</h1>
        </Link>
        <nav className=" md:block">
          <ul className="flex flex-col gap-3 h-[calc(100vh-150px)]">
            <hr />
            <Link
              to="/"
              className={`${
                currentPath === "/" && "bg-gray-500 rounded"
              } hover:bg-gray-500 rounded`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-3 h-3 rounded-full mr-4 bg-blue-500 rounded"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Home
              </li>
            </Link>
            <Link
              to="/activity-tracker"
              className={`${
                currentPath === "/activity-tracker" && "bg-gray-500 rounded"
              } hover:bg-gray-500 rounded`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-3 h-3 rounded-full mr-4"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Activity Tracker
              </li>
            </Link>
            <Link
              to="/journal"
              className={`${
                currentPath === "/journal" && "bg-gray-500 rounded"
              } hover:bg-gray-500 rounded`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-3 h-3 rounded-full mr-4"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Well-being Journal
              </li>
            </Link>
            <Link
              to="/medication"
              className={`${
                currentPath === "/medication" && "bg-gray-500 rounded"
              } hover:bg-gray-500 rounded`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-3 h-3 rounded-full mr-4"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Medication Reminder
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default AsideNav;
