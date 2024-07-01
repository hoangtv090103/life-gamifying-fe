import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 hidden lg:block`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            &times;
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-4 border-b border-gray-700 hover:bg-gray-700">
              <a href="#habits">Habits</a>
            </li>
            <li className="p-4 border-b border-gray-700 hover:bg-gray-700">
              <a href="#dailies">Dailies</a>
            </li>
            <li className="p-4 border-b border-gray-700 hover:bg-gray-700">
              <a href="#quests">Quests</a>
            </li>
            <li className="p-4 border-b border-gray-700 hover:bg-gray-700">
              <a href="#rewards">Rewards</a>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
      <button
        onClick={toggleSidebar}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-r-2xl focus:outline-none z-10 hidden lg:block"
      >
        {isOpen ? (
          <FaArrowLeft className="text-2xl" />
        ) : (
          <FaArrowRight className="text-2xl" />
        )}
      </button>
    </>
  );
};

export default Sidebar;
