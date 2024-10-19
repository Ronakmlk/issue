// src/components/SideNav.js
import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="bg-gray-800 text-white w-64 h-screen p-4">
      <ul className="space-y-4">
        <li className="cursor-pointer hover:bg-gray-600 p-2 rounded">
          <Link to="/">Project Board</Link>
        </li>
        <li className="cursor-pointer hover:bg-gray-600 p-2 rounded">
          <Link to="/create-issue">Create Issue</Link>
        </li>
        <li className="cursor-pointer hover:bg-gray-600 p-2 rounded">
          <Link to="/create-project">Create Project</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
