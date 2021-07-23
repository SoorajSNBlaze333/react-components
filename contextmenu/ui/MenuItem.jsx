import React from 'react';
import { Menu as UIMenu } from '@headlessui/react';

const MenuItem = ({ children, ...props }) => (
  <UIMenu.Item className="group flex rounded-md items-center w-full px-2 py-2 text-sm" {...props}>
    {children}
  </UIMenu.Item>
);

MenuItem.displayName = "MenuItem";

export default MenuItem;