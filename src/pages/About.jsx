import React from "react";
import {
  reactimg,
  js,
  ts,
  python,
  next,
  redux,
  git,
  node,
  tail,
} from "../assets";
import { RiArrowRightLine } from "react-icons/ri";
import { Alink, Badge } from "../components";

const About = () => {
  const techstack = [
    ["react", reactimg],
    ["JavaScript", js],
    ["Typescript", ts],
    ["Python", python],
    ["Nextjs", next],
    ["Redux", redux],
    ["Git", git],
    ["Node", node],
    ["Tailwind", tail],
  ];

  return (
    <section className="mt-10 mb-28">
      <div className="md:text-justify text-left">
        <div className="flex items-center gap-x-10 mb-16 md:flex-nowrap flex-wrap">
          <div className="mb-6 md:mb-0 flex justify-center">
            <img src={reactimg} alt="" className="md:w-full w-[90%]" />
          </div>
          <h3 className="md:tracking-tight md:text-6xl text-5xl">
            Hi, I'm Zosu Semako Enoch. The Efficient Software Developer
          </h3>
        </div>

        <p className="text-2xl md:text-3xl text-zinc-600 mb-12">
          Are you ready to elevate your digital presence to new heights? Look no
          further. I'm Semako, a dedicated software developer with an insatiable
          passion for web development, I specialize in crafting responsive,
          interactive, and user-friendly interfaces that leave a lasting
          impression.
        </p>
        <p className="text-2xl md:text-3xl text-zinc-600">
          But here's the kicker: I'm not just about sleek designs and
          cutting-edge technology. I'm driven by a deep-seated desire to create
          software that sparks change and drives efficiency. Time is precious,
          and I believe in shipping solutions fast, so you can focus on what
          truly matters &mdash; getting your business done as efficiently as
          possible. Ready to revolutionize your digital landscape? Let's make it
          happen.
        </p>
      </div>
      <div className="py-20 border-b-zinc-800 border-2">
        <div className="flex gap-x-20 md:flex-nowrap flex-wrap">
          <p className="font-medium border-b-zinc-600 border-2 h-min mb-10">
            Main Technology Stack
          </p>
          <div className="flex flex-wrap gap-4">
            {techstack.map((stack, index) => (
              <Badge img={stack[1]} key={index}>
                {stack[0]}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between my-10 md:flex-nowrap flex-wrap">
        <div className="w-[400px]">
          <p className="tracking-tight text-3xl inline">
            I am thrilled to answer to your next project
          </p>
          <RiArrowRightLine className="ml-3 inline text-3xl" />
        </div>

        <div>
          <p className="tracking-tight text-2xl md:text-3xl mb-8 md:mt-0 mt-10">
            zosusemenoch@gmail.com
          </p>
          <Alink
            href="https://docs.google.com/document/d/1gC2YZKG09m-XAJkcQ6zrszQZbMHT258-zXNj0zcu1hQ/edit?usp=sharing"
            target="_blank"
            className="font-medium tracking-tight"
          >
            View Resume
          </Alink>
        </div>
      </div>
    </section>
  );
};

export default About;
