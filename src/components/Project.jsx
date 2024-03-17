import React from "react";
import { Alink } from "../components";

const Project = ({ index, img, title, description, stack }) => {
  return (
    <section className="flex justify-between pb-28 mb-28 border-b-2 border-zinc-800">
      <div className="flex flex-col w-[55%]">
        <h4 className="font-semibold text-xl mb-8">
          {index} / {title}
        </h4>
        <h5 className="text-lx font-medium tracking-tight leading-tight mb-6 w-[85%]">
          {description}
        </h5>
        <p className="text-sm text-zinc-600 max-w-[75%]">
          Developed using <span>React</span>, <span>JavaScript</span> and
          <span>TailwindCSS</span>
        </p>
        <div className="mt-auto">
          <p className="font-medium text-lg">Explore more about this project</p>
          <div className="font-medium text-lg flex gap-x-2">
            <Alink href="/" className="underline">
              Code
            </Alink>
            <Alink href="/" className="underline">
              Live
            </Alink>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="" className="ml-auto w-[90%] shadow-lg" />
      </div>
    </section>
  );
};

export default Project;
