/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { EventEmitter } from '../libs/events';
import About from './tabs/About';

const TABS = {
  about: {
    open: false,
    position: { x: 50, y: 100 },
    top: true,
  }
};

const CommandExecuter = () => {
  const [tabs, setTabs] = useState(TABS);

  const handleExecCommand = (command: string) => {
    switch(command) {
      case "about": {
        setTabs((existingTabs) => ({
          ...existingTabs,
          about: {
            ...existingTabs.about,
            open: !existingTabs.about.open,
          }
        }));
        break;
      }
      default: {
        console.log("Default");
        break;
      }
    };
  };

  useEffect(() => {
    EventEmitter.subscribe('execCommand', handleExecCommand);
    return () => {
      EventEmitter.unsubscribe('execCommand');
    }
  }, []);

  return (
    <>
      <About about={tabs.about} onClose={() => handleExecCommand("about")} />
    </>
  );
}

export default CommandExecuter;