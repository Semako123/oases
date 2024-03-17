import React from "react";
import { Alink } from "../components";

const Project = ({ index, img, title, description, code, live, stack }) => {
  return (
    <section className="flex justify-between md:pb-28 pb-8 md:mb-28 mb-8 border-b-2 border-zinc-800 md:flex-nowrap flex-wrap">
      <div className="flex flex-col md:w-[55%]">
        <h4 className="font-semibold text-xl mb-8">
          {index} / {title}
        </h4>
        <h5 className="text-lx font-medium tracking-tight leading-tight mb-6 w-[85%]">
          {description}
        </h5>
        <p className="text-sm text-zinc-600 max-w-[75%] md:mb-auto mb-4">
          Developed using{" "}
          {stack.map((stac) => (
            <span className="font-bold inline-block mx-1">{stac}</span>
          ))}
        </p>
        <div className="mt-auto">
          <p className="font-medium text-lg">Explore more about this project</p>
          <div className="font-medium text-lg flex gap-x-2 md:mb-auto mb-6">
            <Alink href={code} className="underline" target="_blank">
              Code
            </Alink>
            <Alink href={live} className="underline" target="_blank">
              Live
            </Alink>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="" className="ml-auto w-full md:w-[90%] shadow-lg" />
      </div>
    </section>
  );
};

export default Project;
