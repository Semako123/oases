import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ALink = ({ href, children, className, target }) => {
  return (
    <div className="flex">
      <a href={href} className={className} target={target}>
        {children}
      </a>
      <MdOutlineArrowOutward />
    </div>
  );
};

export default ALink;
