/* eslint-disable react-hooks/exhaustive-deps */

import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { ArrowRight } from '../ui/Icons';
import { EventEmitter } from '../../libs/events';

interface LineCommandProps {
  command: string,
  reply: string | null,
}

interface ReplyProps {
  index: number,
  reply: string | null,
}

const helpCommands: string[] = [
  "about",
  "work",
  "projects",
  "github",
  "devto",
  "linkedin",
  "mail",
  "resume",
];

const Window = () => {
  const helpCommandIndexRef = useRef<number>(0)
  const inputRef = useRef<HTMLInputElement>(null);
  const [lineCommands, setLineCommands] = useState<LineCommandProps[]>([{ command: '', reply: null }]);
  
  const handleKey = (e: KeyboardEvent, index: number) => {
    if (e.code === '38') {
      e.preventDefault();
      const commandIndex = Number(helpCommandIndexRef.current)
      if (inputRef.current) inputRef.current.value = helpCommands[commandIndex];
      setLineCommands((lc) => {
        let newLC = [...lc];
        newLC[index].command = helpCommands[commandIndex];
        return newLC;
      })
      helpCommandIndexRef.current = (helpCommandIndexRef.current + 1) % helpCommands.length;
    }
    if (e.code === '40') {
      e.preventDefault();
      helpCommandIndexRef.current -= 1;
      if (helpCommandIndexRef.current < 0) helpCommandIndexRef.current = helpCommands.length - 1;
      const commandIndex = Number(helpCommandIndexRef.current)
      if (inputRef.current) inputRef.current.value = helpCommands[commandIndex];
      setLineCommands((lc) => {
        let newLC = [...lc];
        newLC[index].command = helpCommands[commandIndex];
        return newLC;
      })
    }
    if (e.key === "Enter" || e.code === '13') {
      EventEmitter.dispatch('execCommand', { command: lineCommands[index].command,  index })
      if ((lineCommands[index].command === "clear")) setLineCommands([{ command: '', reply: null }])
      else setLineCommands((lc) => {
        let newLC = [...lc];
        newLC.push({ command: '', reply: null })
        return newLC;
      });
    }
    if ((e.key === "k" && e.metaKey === true)) {
      setLineCommands([{ command: '', reply: null }])
    }
    if ((e.key === "h" && e.metaKey === true)) {
      EventEmitter.dispatch('toggleHelpCommands');
    }
  };

  const handleReply = ({ index, reply }: ReplyProps) => {
    setLineCommands((lc) => {
      let newLC = [...lc];
      newLC[index].reply = reply; 
      return newLC;
    });
  }

  const handleFocus = () => {
    if (inputRef.current) return inputRef.current.focus();
  }

  useEffect(() => {
    EventEmitter.subscribe('addReply', handleReply);
    return () => {
      EventEmitter.unsubscribe('addReply');
    }
  }, []);

  const renderLine = (line: LineCommandProps, index: number) => (
    <div key={index}>
      <div className="min-h-6 h-auto w-full flex">
        <div className="h-full w-16 flex items-center">
          <ArrowRight className="mx-1 h-4 text-green-200"/>
          <p className="ml-2 text-blue-300 text-xl">~</p>
        </div>
        {((index + 1) === lineCommands.length) ? (<input
          onChange={(e) => setLineCommands((lc) => {
            let newLC = [...lc];
            newLC[index].command = e.target.value.trim().toLowerCase();
            return newLC;
          })}
          ref={inputRef}
          className="h-auto w-full bg-transparent outline-none terminal-input text-white lowercase font-semibold"
          autoFocus
          onKeyDown={(e: KeyboardEvent) => handleKey(e, index )}
        />) : (<div className="h-auto w-full text-white lowercase font-semibold">
          {line.command}
        </div>)}
      </div>
      {line.reply && (<div className="min-h-6 h-auto w-full flex">
        <div className="h-full w-16 flex items-center">
          <ArrowRight className="mx-1 h-4 text-red-400"/>
          <p className="ml-2 text-blue-300 font-semibold">~</p>
        </div>
        <div className="h-auto w-full text-white font-semibold" dangerouslySetInnerHTML={{ __html: line.reply }} />
      </div>)}
    </ div>
  );

  return (
    <div style={{ height: 'calc(100% - 60px)' }} className="w-full bg-gray-800 overflow-y-auto">
      {lineCommands.map(renderLine)}
      <p className="text-transparent bg-transparent w-full h-full" onClick={handleFocus}/>
    </div>
  );
}

export default Window;