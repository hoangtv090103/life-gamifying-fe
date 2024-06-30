import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-4 flex justify-around shadow-inner">
      <button className="p-2">
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="p-2">
        <i className="fas fa-calendar-alt"></i>
      </button>
      <button className="p-2">
        <i className="fas fa-check-circle"></i>
      </button>
      <button className="p-2">
        <i className="fas fa-briefcase"></i>
      </button>
      <button className="p-2">
        <i className="fas fa-bars"></i>
      </button>
    </footer>
  );
};

export default Footer;
