import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
  memo,
  SyntheticEvent,
} from 'react';
import { Transition } from '@headlessui/react';
import Keyboard from '../libs/keyboard';
import { EventEmitter } from '../libs/events';

const autoComplete = (text: string) => {
  if ((text.match(/ab/g)) || (text.match(/abo/g)) || (text.match(/abou/g))) return "about";
  if ((text.match(/gi/g)) || (text.match(/git/g)) || (text.match(/gith/g)) || (text.match(/githu/g))) return "github";
  if ((text.match(/li/g)) || (text.match(/lin/g)) || (text.match(/link/g)) || (text.match(/linke/g)) || (text.match(/linked/g)) || (text.match(/linkedI/g)) || (text.match(/linkedIn/g))) return "linkedIn";
  return text;
}

const Spotlight = () => {
  const [show, setShow] = useState<boolean>(false);
  const mountedRef = useRef<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const completeRef = useRef<HTMLSpanElement>(null)

  const handleComplete = (e: any) => {
    if (inputRef.current && completeRef.current) { 
      const text = inputRef.current.value.trim().toLowerCase()
      if (!text.length) completeRef.current.innerText = '';
      else completeRef.current.innerText = autoComplete(text);
    }
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const text = inputRef.current.value.trim().toLowerCase();
      if (text.length) {
        EventEmitter.dispatch('execCommand', text);
        setShow(false);
      };
    }
  };

  useEffect(() => {
    Keyboard.add("Ctrl+ ", () => setShow(prev => !prev));
    EventEmitter.subscribe("toggleSearch", () => setShow(prev => !prev));
    return () => {
      Keyboard.remove("Ctrl+ ");
      EventEmitter.unsubscribe("toggleSearch");
      mountedRef.current = false;
    }
  }, []);

  return (
    <Transition
      as={Fragment}
      show={show}
      enter="ease-out duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
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
            onChange={handleComplete}
            className="h-full w-full absolute inset-0 bg-transparent text-gray-300 text-xl outline-none p-3 focus:outline-none rounded-xl caret-gray-300"
            placeholder="Spotlight Search"
          />
        </form>
      </div>
    </Transition>
  );
};

export default memo(Spotlight);