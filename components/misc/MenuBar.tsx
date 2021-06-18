import React from 'react';
import BatteryInfo from './BatteryInfo';
import { Github } from '../ui/Icons';

const MenuInfo = () => (
  <div className="h-full w-1/3 flex justify-evenly items-center">
    <a href="https://github.com/SoorajSNBlaze333" target="_blank" rel="noreferrer" className="cursor-pointer">
      <Github className="h-5 w-5" />
    </a>
    <a href="https://soorajsnair333.netlify.app/" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-bold">Sooraj</a>
    <a href="https://www.linkedin.com/in/sooraj-s-nair-a81543172/" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">LinkedIn</a>
    <a href="mailto:soorajsnblaze333@gmail.com" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">Mail</a>
    <a href="https://dev.to/soorajsnblaze333" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">Dev.to</a>
    <a href="https://hellonext.co/" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">HelloNext</a>
    <a href="https://www.skcript.com/" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">Skcript</a>
  </div>
);

const SystemInfo = () => (
  <div className="h-full w-1/3 flex justify-end items-center">
    <BatteryInfo />
    <p className="m-0 text-white cursor-pointer font-medium mx-8">Wed 9 Aug 3:45 PM</p>
  </div>
);

const MenuBar = () => {
  return (
    <div className="h-7 w-screen absolute top-0 left-0 bg-gray-700 bg-opacity-80 text-white flex text-xs shadow-lg">
      <MenuInfo />
      <div className="h-full w-1/3"></div>
      <SystemInfo />
    </div>
  )
}

export default MenuBar;