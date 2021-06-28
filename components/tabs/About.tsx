import React from "react";
import Sooraj from "../../assets/sooraj.jpg"

const About = () => (
  <div className="h-full w-full flex items-center flex-col">
    <div
      style={{ backgroundImage: `url(${Sooraj.src})`}}
      className="mt-6 rounded-full h-40 w-40 bg-cover bg-center bg-no-repeat ring-4 ring-white"
    />
    <div className="mt-6 text-white text-3xl">Sooraj S Nair</div>
    <div className="mt-1 mb-3 text-gray-500 text-sm">Frontend Developer • Javascript • ReactJS • NodeJS • Firebase</div>
    <div className="mx-10 mt-2 p-10 bg-gray-900 h-auto text-base font-bold rounded-xl code">
      <div className="flex my-1 text-white">
        <span className="text-gray-700 ml-1 mr-3">1</span>
        <span className="text-red-400 mx-0.5">const</span>
        <span className="text-purple-400 mx-0.5">Sooraj</span>
        <span className="text-red-400 mx-0.5">=</span>
        <span className="mx-0.5">(</span>
        <span className="mx-0.5">)</span>
        <span className="text-red-400 mx-0.5">{"=>"}</span>
        <span className="mx-0.5">{"{"}</span>
      </div>
      <div className="flex flex-wrap my-1 text-white">
        <span className="text-gray-700 ml-1 mr-3">2</span>
        <span className="text-red-400 ml-5 mx-0.5">let</span>
        <span className="text-white mx-0.5">experiencesWith</span>
        <span className="text-red-400 mx-0.5">=</span>
        <span className="mx-0.5">[</span>
        <span className="text-blue-300 mx-0.5">{"'HTML',"}</span>
        <span className="text-blue-300 mx-0.5">{"'CSS',"}</span>
        <span className="text-blue-300 mx-0.5">{"'Javascript',"}</span>
        <span className="text-blue-300 mx-0.5">{"'ReactJS',"}</span>
        <span className="text-blue-300 mx-0.5">{"'NodeJS',"}</span>
        <span className="text-blue-300 mx-0.5">{"'Firebase',"}</span>
        <span className="text-blue-300 mx-0.5">{"'AngularJS',"}</span>
        <span className="text-blue-300 mx-0.5">{"'Bootstrap',"}</span>
        <span className="text-blue-300 mx-0.5">{"'Tailwind'"}</span>
        <span className="mx-0.5">]</span>
        <span className="mx-0.5">;</span>
      </div>
      <div className="flex my-1 text-white">
        <span className="text-gray-700 ml-1 mr-3">3</span>
        <span className="text-white mx-0.5">{"};"}</span>
      </div>
    </div>
  </div>
);

export default About;