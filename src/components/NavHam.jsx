import React from "react";

const NavHam = ({ toggle, setToggle }) => {
  return (
    <div
      className="flex flex-col md:hidden gap-y-1 cursor-pointer"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div
        className={`h-1 w-6 bg-black rounded ${
          toggle ? "-rotate-45" : ""
        } transition`}
      ></div>
      <div
        className={`h-1 w-4 bg-black rounded ${
          toggle ? "hidden" : ""
        } transition`}
      ></div>
      <div
        className={`h-1 w-6 bg-black rounded ${
          toggle ? "rotate-45 -translate-y-2" : ""
        } transition `}
      ></div>
    </div>
  );
};

export default NavHam;
