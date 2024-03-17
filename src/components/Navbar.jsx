import React, { useState, useEffect } from "react";
import { Alink, NavHam } from ".";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggle(false);
  }, [location]);

  return (
    <nav className="md:flex w-full items-center justify-between">
      <div className="flex justify-between items-center z-10 relative">
        <NavHam toggle={toggle} setToggle={setToggle} />
        <h1 className="text-4xl font-bold mb-5 tracking-tight ">
          <Link to="/">ZS.</Link>
        </h1>
      </div>
      <ul
        className={`flex gap-x-8 items-center md:ml-4 justify-center md:flex-row flex-col md:gap-y-0 gap-y-10 md:relative absolute top-0 w-screen md:w-auto h-screen md:h-auto transition md:bg-inherit bg-zinc-300 left-0 ${
          toggle ? "" : "-translate-x-[100vw] md:translate-x-0"
        }`}
      >
        <li>
          <div className="flex">
            <Link to="/about" className="tracking-tight font-medium md:text-xl text-4xl">
              About
            </Link>
            <MdOutlineArrowOutward />
          </div>
        </li>
        <li>
          <Alink
            href="/#projects"
            className="tracking-tight font-medium md:text-xl text-4xl"
          >
            Works
          </Alink>
        </li>
        <li>
          <Alink
            href="#contact"
            className="tracking-tight font-medium md:text-xl text-4xl"
          >
            Contact
          </Alink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
