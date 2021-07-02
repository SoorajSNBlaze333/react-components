import React from "react";
import Sooraj from "../../assets/me.png"

const About = () => {
  return (
    <div className="bg-gray-800 rounded-md custom-shadow about">
      <p className="mt-3 px-3 text-4xl w-full text-white text-center">Sooraj S Nair</p>
      <p className="mt-1 mb-3 px-3 text-sm w-full text-gray-400 text-center">
        Frontend developer • Javascript • ReactJS • NodeJS • Firebase
      </p>
      <span className="w-full h-auto flex justify-center mb-0">
        <span
          style={{ backgroundImage: `url(${Sooraj.src})`, height: "250px", width: "300px" }}
          className="text-center bg-cover bg-center bg-no-repeat"
        />
      </span>
      <p className="mt-1 px-4 w-full text-sm text-gray-400 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <small className="mt-10 block px-3 w-full text-center text-gray-500">
        [You can search for my projects, blogs, socials and other things below]
      </small>
    </div>
  )
};

export default About;