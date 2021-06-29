/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { EventEmitter } from '../libs/events';
import Tab from './Tab';

const CommandExecuter = () => {
  const [currentTab, setCurrentTab] = useState("");

  const handleExecCommand = (command: string) => {
    console.log(command);
    if (command === "github") window.open("https://github.com/SoorajSNBlaze333", "_blank");
    else if (command === "linkedin") window.open("https://www.linkedin.com/in/sooraj-s-nair-a81543172/", "_blank");
    else setCurrentTab(command);
  }

  useEffect(() => {
    EventEmitter.subscribe('execCommand', handleExecCommand);
    return () => {
      EventEmitter.unsubscribe('execCommand');
    }
  }, []);

  return (
    <>
      <Tab command={currentTab} onClose={() => handleExecCommand("")} />
    </>
  );
}

export default CommandExecuter;