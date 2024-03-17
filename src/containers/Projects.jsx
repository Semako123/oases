import React from "react";
import { Project } from "../components";
import { gpt3, growfy, nft, odash, ofood, todo } from "../assets";

const projectList = [
  {
    title: "NFT MARKETPLACE",
    desciption:
      "A marketplace to trade and explore NFT's. The entire NFT ecosystem at the tip of your fingers.",
    img: nft,
  },
  {
    title: "GROWFY",
    desciption:
      "Growfy is a landing page developed for a marketing solutions company. It features animations, responsiveness, awesome layout as well as highly optimized images",
    img: growfy,
  },
  {
    title: "SPOTIFY DASH",
    desciption:
      "The Spotify Dashboard Application is a personalized tool that provides music lovers with insightful analytics, including music features, artist popularity comparison and so muuch more.",
    img: odash,
  },
  {
    title: "SPOONACULAR",
    desciption:
      "Spoonacular is a recipe web application where you can explore various recipes to become the chef of your kitchen.",
    img: ofood,
  },
  {
    title: "GPT-3 LANDING PAGE",
    desciption:
      "GPT-3 is a landing page website for a Gpt model for exploring it's features. It features great layout, responsiveness and gradient design",
    img: gpt3,
  },
  {
    title: "OASES TOD0",
    desciption:
      "Oases Todo is a todo list application where you can order and plan your events or tasks. It has an authentication feature, responsiveness, realtime clock, animations, easy-to-use UI and so on",
    img: todo,
  },
];

const Projects = () => {
  return (
    <div>
      {projectList.map(({ title, desciption, img }, id) => {
        const index = (id + 1).toString().padStart(2, "0");
        return (
          <Project
            title={title}
            description={desciption}
            index={index}
            img={img}
          />
        );
      })}
    </div>
  );
};

export default Projects;
