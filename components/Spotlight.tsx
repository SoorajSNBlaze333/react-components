import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
  memo,
  SyntheticEvent,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Keyboard from '../libs/keyboard';
import { EventEmitter } from '../libs/events';

const Spotlight = () => {
  const [show, setShow] = useState<boolean>(false);
  const mountedRef = useRef<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const text = inputRef.current.value.trim().toLowerCase();
      if (text.length) {
        setShow(false);
        EventEmitter.dispatch('execCommand', text);
      };
    }
  };

  useEffect(() => {
    Keyboard.add("Ctrl+ ", () => setShow(prev => !prev));
    return () => {
      Keyboard.remove("Ctrl+ ");
      mountedRef.current = false;
    }
  }, []);

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setShow(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <form onSubmit={handleSubmit} className="h-auto w-auto inline-block overflow-hidden align-middle transition-all transform rounded-xl spotlight mt-10">
              <input
                ref={inputRef}
                autoFocus
                className="bg-gray-800 text-gray-300 text-xl outline-none p-3 rounded-xl caret-gray-300"
                placeholder="Spotlight Search"
              />
            </form>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default memo(Spotlight);