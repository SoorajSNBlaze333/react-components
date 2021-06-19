import React, { useEffect, useState } from 'react';
import { EventEmitter } from '../../libs/events';
import CommandData from '../../data/commands.json';
import TerminalDialog from '../dialogs/TerminalDialog';

interface CommandProps {
  command: string,
  index: number
}

const CommandExecuter = () => {
  const [show, toggleShow] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  const handleExecCommand = ({ command, index }: CommandProps) => {
    const { commands } = CommandData;
    switch(command) {
      case "about": {
        toggleShow(true);
        setData(commands.about);
        break;
      }
      case "place": {
        EventEmitter.dispatch('addReply', { index, reply: "India 🇮🇳" })
        break;
      }
      case "work": {
        EventEmitter.dispatch('addReply', { index, reply: 'const role = frontEndDeveloper;' })
        break;
      }
      default: {
        break;
      }
    };
  }

  useEffect(() => {
    EventEmitter.subscribe('execCommand', handleExecCommand);
    return () => {
      EventEmitter.unsubscribe('execCommand');
    }
  }, [])

  return <TerminalDialog show={show} data={data} toggleShow={toggleShow} />
}

export default CommandExecuter;