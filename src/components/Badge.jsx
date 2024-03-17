import React from "react";

const Badge = ({ img, children }) => {
  return (
    <div className="flex gap-x-3 border-2 border-zinc-500 px-3 py-1 rounded items-center ">
      <img src={img} alt="" className="w-5 h-5" />
      <p className="font-secondary font-medium">{children}</p>
    </div>
  );
};

export default Badge;
