import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import  skills  from "../skills.json";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block text-indigo-500 mb-2" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; <span className="text-indigo-500">Technologies</span> 
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Tech Stacks which I am brutally fond of & are one of my best buddies..!! <br />
            Looking forward for adding more such techs in the list..!!
          </p>
        </div>
        <div className="grid grid-cols-5">
          {skills && skills.map((skill) => (
            <div id="skillbox" key={skill.name} className="p-2 sm:w-6/7 items-center">
              <div className="transition ease-in-out delay-50 bg-gray-800 rounded-md p-4 h-full grid place-items-center hover:bg-black duration-500">
                 <img src={skill.icon} alt="skill" /> 
                <h1 className="title-font font-medium text-lg text-white">
                  {skill.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
