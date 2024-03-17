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
      <div className="text-justify">
        <div className="flex items-center gap-x-10 mb-16">
          <div>
            <img src={reactimg} alt="" />
          </div>
          <h3 className="tracking-tight text-6xl">
            Hi, I'm Zosu Semako Enoch. The Efficient Software Developer
          </h3>
        </div>

        <p className="text-3xl text-zinc-600 mb-12">
          Are you ready to elevate your digital presence to new heights? Look no
          further. I'm Semako, a dedicated software developer with an insatiable
          passion for web development, I specialize in crafting responsive,
          interactive, and user-friendly interfaces that leave a lasting
          impression.
        </p>
        <p className="text-3xl text-zinc-600">
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
        <div className="flex gap-x-20">
          <p className="font-medium border-b-zinc-600 border-2 h-min">
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
      <div className="flex justify-between my-10">
        <div className="w-[400px]">
          <p className="tracking-tight text-3xl inline">
            I am thrilled to answer to your next project
          </p>
          <RiArrowRightLine className="ml-3 inline text-3xl" />
        </div>

        <div>
          <p className="tracking-tight text-3xl mb-8">zosusemenoch@gmail.com</p>
          <Alink
            href="https://drive.google.com/file/d/1xjZ8CJVmZrp0Ak2TtSjJ7F8AJLluNvHB/view?usp=sharing"
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
