import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 4,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 5,
      logo: express,
      name: "Express",
    },
    {
      id: 6,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 7,
      logo: nodejs,
      name: "NodeJS",
    },
  
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills and Technologies</h1>
        <span className=" underline font-semibold">Tech Stack</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[180px] h-[180px] mx-auto p-1 rounded-full"
                alt=""
              />
              <div>
                <div className="text-center font-bold text-xl mt-5">{name}</div>
                <p className="px-2 text-gray-700">
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
