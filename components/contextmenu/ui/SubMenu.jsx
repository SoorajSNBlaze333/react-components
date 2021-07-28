import React, { useState, useRef } from 'react';
import { Menu as UIMenu, Transition } from '@headlessui/react';
import MouseSafe from './MouseSafe';

const SubMenu = ({ children, text, ...props }) => {
  const [positions, setPositions] = useState({ x: 0, y: 0, clientX: 0, clientY: 0, });
  const subMenuRef = useRef(null);
  const [childrenVisible, setChildrenVisible] = useState(false);

  const handleMouseOver = (e) => {
    if (!childrenVisible) {
      setChildrenVisible(true);
    }
    if (e.target.id === "submenu_parent") {
      setPositions({
        x: e.target.offsetWidth,
        y: e.target.offsetTop,
      });
    }
  };

  const handleMouseOut = () => {
    if (childrenVisible) setChildrenVisible(false);
  };

  return (
    <UIMenu.Item as="div" className="group flex rounded-sm items-center w-full text-sm relative" {...props}>
      <div
        id="submenu_parent"
        className="h-full w-full px-2 py-2 relative"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        {text}
        {(childrenVisible) && (
          <div
            className="absolute inset-0 bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-auto"
            style={{ transform: `translate(${positions.x}px, ${positions.y}px)`, height: `${37 * children.length}px` }}
            ref={subMenuRef}
          >
            {/* <MouseSafe parentRef={subMenuRef} /> */}
            <Transition
              appear
              show={childrenVisible}
              as="div"
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              className="absolute inset-0 h-48 w-56"
            >
              {children}
            </Transition>
          </div>
        )}
      </div>
    </UIMenu.Item>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;