/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { EventEmitter } from '../libs/events';
import About from './tabs/About';

const CommandExecuter = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [show, setShow] = useState(false);

  const handleExecCommand = (command: string) => {
    console.log(command);
    if (command === "github" || command === "git") window.open("https://github.com/SoorajSNBlaze333", "_blank");
    else if (command === "linkedin") window.open("https://www.linkedin.com/in/sooraj-s-nair-a81543172/", "_blank");
    else if (command === "mail") window.open("mailto:soorajsnblaze333@gmail.com", "_blank");
    else if (command === "devto" || command === "dev.to") window.open("https://dev.to/soorajsnblaze333", "_blank");
    else if (command === "instagram" || command === "ig") window.open("https://www.instagram.com/sooraj_27_916/", "_blank");
    else if (command === "steam") window.open("https://steamcommunity.com/profiles/76561198807657722/", "_blank");
    else setCurrentTab(command);
    setShow(prev => !prev);
  }

  useEffect(() => {
    EventEmitter.subscribe('execCommand', handleExecCommand);
    return () => {
      EventEmitter.unsubscribe('execCommand');
    }
  }, []);

  const renderDynamicContent = () => {
    // return <Component show={show} onClose={() => handleExecCommand("")} />;
  };

  return (<>
    <About />
    {renderDynamicContent()}
  </>);
}

export default CommandExecuter;