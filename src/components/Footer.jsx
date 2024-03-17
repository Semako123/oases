import React from "react";
import { Alink } from ".";

const Footer = () => {
  return (
    <div className="mb-20 font-semibold flex justify-between" id="contact">
      <h2 className="text-2xl tracking-tight text-cyan-900">
        Zosu Semako &mdash; 2024
      </h2>
      <ul className="flex gap-x-8">
        <li className="text-xl tracking-tight">
          <Alink
            href="https://www.linkedin.com/in/semako-zosu/"
            target="_blank"
          >
            LinkedIn
          </Alink>
        </li>
        <li className="text-xl tracking-tight">
          <Alink href="https://twitter.com/zosusemako" target="_blank">
            X(Twitter)
          </Alink>
        </li>
        <li className="text-xl tracking-tight">
          <Alink href="mailto:zosusemenoch@gmail.com" target="_blank">
            Email
          </Alink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
