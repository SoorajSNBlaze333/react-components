/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Menu as UIMenu, Transition } from '@headlessui/react';
import { useClickOutside, emitter } from '../index';

const Menu = ({ children, id }) => {
  const menuRef = useRef(null);
  const [state, setState] = useState({ show: false, x: 0, y: 0 });

  const handleEvent = (data) => {
    if (data.id === id) {
      setState((prev) => ({ ...prev, ...data }))
    }
  }

  const handleClose = useCallback(() => handleEvent({ id, show: false }), []);
  useClickOutside(menuRef, handleClose);

  useEffect(() => {
    emitter.subscribe('react-context-update-hook', handleEvent);
    return () => {
      emitter.unsubscribe('react-context-update-hook');
    }
  }, []);

  return (
    <UIMenu as="div" className="inline-block text-left">
      <Transition
        appear
        show={state.show}
        as="div"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute inset-0 h-48 w-56"
        style={{ transform: `translate(${state.x}px, ${state.y}px)` }}
      >
        <div ref={menuRef}>
          <UIMenu.Items className="relative right-0 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {children}
          </UIMenu.Items>
        </div>
      </Transition>
    </UIMenu>
  );
};

Menu.displayName = 'Menu';

export default Menu;


{/* {(submenuVisible) && (
  <svg height="210" width="500" className="absolute inset-0">
    <polygon points={`${mouse.x},${mouse.y} 100,200 100,10`} style={{ fill: "lime", stroke: "purple", strokeWidth :1 }} />
  </svg>
)} */}
