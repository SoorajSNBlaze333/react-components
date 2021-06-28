/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { EventEmitter } from '../libs/events';
import Tab from './Tab';

const CommandExecuter = () => {
  const [currentTab, setCurrentTab] = useState("");

  const handleExecCommand = (command: string) => setCurrentTab(command);

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