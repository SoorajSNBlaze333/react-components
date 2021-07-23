import React, { useState } from 'react';
import { Menu as UIMenu } from '@headlessui/react';
import { useContextMenu } from '../index';

const SubMenu = ({ children, text, ...props }) => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const [childrenVisible, setChildrenVisible] = useState(false);
  const { update } = useContextMenu();

  const handleMouseOver = (e) => {
    if (!childrenVisible) {
      setState({ x: e.target.offsetWidth, y: e.target.offsetTop });
      setChildrenVisible(true);
      update({ submenuVisible: true, mouse: { x: e.clientX, y: e.clientY }});
    }
  }

  const handleMouseOut = (e) => {
    if (childrenVisible) {
      setChildrenVisible(false);
      update({ submenuVisible: false })
    }
  }

  return (
    <UIMenu.Item as="div" className="group flex rounded-sm items-center w-full text-sm relative" {...props}>
      <div
        id="submenu_parent"
        className="h-full w-full px-2 py-2 relative"
        onMouseMove={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        <span>{text}</span>
        {(childrenVisible) && (
          <div
            id="submenu_child"
            className="absolute inset-0 bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-auto"
            style={{ transform: `translate(${state.x}px, ${state.y}px)`, height: `${37 * children.length}px` }}
          >
            {children}
          </div>
        )}
      </div>
    </UIMenu.Item>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;