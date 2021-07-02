import React, {
  useRef,
  memo,
  SyntheticEvent,
} from 'react';
import { EventEmitter } from '../libs/events';

const Spotlight = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const completeRef = useRef<HTMLSpanElement>(null)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const text = inputRef.current.value.trim().toLowerCase();
      if (text.length) {
        EventEmitter.dispatch('execCommand', text);
        inputRef.current.value = '';
      };
    }
  };

  return (
    <div className="absolute spotlight-wrapper">
      <form onSubmit={handleSubmit} className="inline-block overflow-hidden align-middle transition-all transform rounded-xl mt-10 spotlight custom-shadow relative">
        <span
          ref={completeRef}
          className="h-full w-full absolute inset-0 bg-gray-800 text-gray-500 text-xl outline-none p-3 focus:outline-none rounded-xl text-left complete bg-opacity-70 backdrop-filter backdrop-blur-sm"
        >
        </span>
        <input
          ref={inputRef}
          autoFocus
          className="h-full w-full absolute inset-0 bg-transparent text-gray-300 text-xl outline-none p-3 focus:outline-none rounded-xl caret-gray-300"
          placeholder="Ask me anything..."
        />
      </form>
    </div>
  );
};

export default memo(Spotlight);