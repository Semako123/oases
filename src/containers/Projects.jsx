import React from "react";
import { Project } from "../components";
import { gpt3, growfy, nft, odash, ofood, todo, cryptopunks } from "../assets";

const projectList = [
  {
    title: "CryptoPunks",
    desciption:
      "CryptoPunks are a collection of 10,000 unique, algorithmically generated pixel art characters that have become a key part of the CryptoArt movement.",
    img: cryptopunks,
    code: "https://github.com/Semako123/nft-landing2",
    live: "https://cryptopunks-oases.vercel.app/",
    stack: ["React", "JavaScript", "TailwindCSS", "Open Sea API"],
  },
  {
    title: "NFT MARKETPLACE",
    desciption:
      "A marketplace to trade and explore NFT's. The entire NFT ecosystem at the tip of your fingers.",
    img: nft,
    code: "https://github.com/Semako123/nft",
    live: "https://nftmarket-flax.vercel.app/",
    stack: ["React", "JavaScript", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Google Docs Clone",
    desciption:
      "A marketplace to trade and explore NFT's. The entire NFT ecosystem at the tip of your fingers.",
    img: nft,
    code: "https://github.com/semako123/google-doc-clone",
    live: "https://google-doc-clone-smoky.vercel.app/",
    stack: ["React", "JavaScript", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "GROWFY",
    desciption:
      "Growfy is a landing page developed for a marketing solutions company. It features animations, responsiveness, awesome layout as well as highly optimized images",
    img: growfy,
    code: "https://github.com/Semako123/growfy",
    live: "https://oasesgrowfy.netlify.app",
    stack: ["React", "CSS", "JavaScript"],
  },
  {
    title: "SPOTIFY DASH",
    desciption:
      "The Spotify Dashboard Application is a personalized tool that provides music lovers with insightful analytics, including music features, artist popularity comparison and so muuch more.",
    img: odash,
    code: "https://github.com/semako123/odash",
    live: "https://odash.vercel.app",
    stack: ["React", "TailwindCSS", "Typescript", "Redux", "React - Router"],
  },
  {
    title: "SPOONACULAR",
    desciption:
      "Spoonacular is a recipe web application where you can explore various recipes to become the chef of your kitchen.",
    img: ofood,
    code: "https://github.com/semako123/spoonacular",
    live: "https://oasesfood.netlify.app/",
    stack: [
      "React",
      "CSS",
      "JavaScript",
      "React-routers",
      "RESTful API",
      "Axios",
    ],
  },
  {
    title: "GPT-3 LANDING PAGE",
    desciption:
      "GPT-3 is a landing page website for a Gpt model for exploring it's features. It features great layout, responsiveness and gradient design",
    img: gpt3,
    code: "https://github.com/semako123/gpt3",
    live: "https://oasesgpt3.netlify.app/",
    stack: ["React", "CSS", "JavaScript"],
  },
  {
    title: "OASES TOD0",
    desciption:
      "Oases Todo is a todo list application where you can order and plan your events or tasks. It has an authentication feature, responsiveness, realtime clock, animations, easy-to-use UI and so on",
    img: todo,
    code: "https://github.com/semako123/TodoList2.0",
    live: "https://oasestodo.netlify.app/",
    stack: [
      "Firebase",
      "Firestore",
      "React",
      "CSS",
      "JavaScript",
      "Redux",
      "MaterialUI",
      "React - Router",
    ],
  },
];

const Projects = () => {
  return (
    <div>
      {projectList.map(({ title, desciption, img, code, live, stack }, id) => {
        const index = (id + 1).toString().padStart(2, "0");
        return (
          <Project
            title={title}
            description={desciption}
            index={index}
            img={img}
            code={code}
            live={live}
            stack={stack}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default Projects;
