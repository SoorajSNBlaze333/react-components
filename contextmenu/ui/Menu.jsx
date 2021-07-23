/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useCallback } from 'react';
import { Menu as UIMenu, Transition } from '@headlessui/react';
import { useContextMenu, useClickOutside } from '../index';

const Menu = ({ children }) => {
  const menuRef = useRef(null);
  const { state, close } = useContextMenu();
  const { show, x, y } = state;

  const handleClose = useCallback(() => close(), []);
  useClickOutside(menuRef, handleClose);

  useEffect(() => {
    return () => {
      console.log('unmounted Menu')
    }
  }, []);

  return (
    <UIMenu as="div" className="inline-block text-left">
      <Transition
        appear
        show={show}
        as="div"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute inset-0 h-48 w-56"
        style={{ transform: `translate(${x}px, ${y}px)` }}
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
