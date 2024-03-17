import React from "react";
import { Alink } from ".";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <h1 className="text-4xl font-bold mb-5 tracking-tight">
        <Link to="/">ZS.</Link>
      </h1>
      <div></div>
      <ul className="flex gap-x-8 items-center ml-4 justify-center">
        <li>
          <div className="flex">
            <Link to="/about" className="tracking-tight  font-medium text-xl">
              About
            </Link>
            <MdOutlineArrowOutward />
          </div>
        </li>
        <li>
          <Alink
            href="/#projects"
            className="tracking-tight font-medium text-xl"
          >
            Works
          </Alink>
        </li>
        <li>
          <Alink
            href="/#contact"
            className="tracking-tight font-medium text-xl"
          >
            Contact
          </Alink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
