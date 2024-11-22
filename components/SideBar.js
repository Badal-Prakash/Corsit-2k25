"use client";

import { TeamContext } from "@/context/TeamContext";
import { useContext, useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { filterPeople } = useContext(TeamContext);

  const handleRoleChange = (role) => {
    filterPeople(role, "");
  };

  const handleYearChange = (year) => {
    filterPeople("", year);
  };

  return (
    <>
      <button
        className="lg:hidden fixed bottom-6 right-6 text-white bg-gray-900 p-3 rounded-full shadow-lg z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block fixed top-16 left-0 h-full w-72 bg-gray-900 text-gray-100 shadow-lg p-6 z-40 transform transition-transform duration-300 ease-in-out`}
      >
        <h3 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
          Filter by Year and Leads
        </h3>
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-3">Lead</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleRoleChange("")}
                className="text-gray-300 hover:text-blue-400 hover:bg-gray-700 px-3 py-2 rounded w-full text-left transition"
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => handleRoleChange("Lead")}
                className="text-gray-300 hover:text-blue-400 hover:bg-gray-700 px-3 py-2 rounded w-full text-left transition"
              >
                Leads
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Year</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleYearChange("")}
                className="text-gray-300 hover:text-blue-400 hover:bg-gray-700 px-3 py-2 rounded w-full text-left transition"
              >
                All Years
              </button>
            </li>
            <li>
              <button
                onClick={() => handleYearChange("First Year")}
                className="text-gray-300 hover:text-blue-400 hover:bg-gray-700 px-3 py-2 rounded w-full text-left transition"
              >
                First Year
              </button>
            </li>
            <li>
              <button
                onClick={() => handleYearChange("Second Year")}
                className="text-gray-300 hover:text-blue-400 hover:bg-gray-700 px-3 py-2 rounded w-full text-left transition"
              >
                Second Year
              </button>
            </li>
            <li>
              <button
                onClick={() => handleYearChange("Third Year")}
                className="text-gray-300 hover:text-blue-400 hover:bg-gray-700 px-3 py-2 rounded w-full text-left transition"
              >
                Third Year
              </button>
            </li>
            <li>
              <button
                onClick={() => handleYearChange("Fourth Year")}
                className="text-gray-300 hover:text-blue-400 hover:bg-gray-700 px-3 py-2 rounded w-full text-left transition"
              >
                Fourth Year
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
