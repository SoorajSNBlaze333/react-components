import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EventEmitter } from '../../libs/events';
import Profile from './Profile';
interface MenuProps {
  active: boolean,
  children: any,
}

const getActiveMenuClass = (active: boolean) => {
  const baseClassName = 'h-full w-full rounded-sm flex justify-start px-2 py-1';
  if (active) return baseClassName + ' bg-blue-600';
  return baseClassName;
}

const MenuButton = ({ active, children }: MenuProps) => (
  <button type="button" className={getActiveMenuClass(active)}>
    {children}
  </button>
)

const MenuDropdown = () => (
  <Menu as="div" className="relative inline-block cursor-pointer">
    <Menu.Button className="flex items-center m-0 focus:outline-none font-bold">
      <Profile size={4} />
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items as="div" className="absolute bg-gray-700 h-auto w-60 top-6 -left-1 z-10 outline-none ring-1 ring-gray-500 rounded-md text-white">
        <Menu.Item as="div" className="p-1" onClick={() => EventEmitter.dispatch('execCommand', { command: 'about', index: 0 })}>{(props) => <MenuButton { ...props }>About Sooraj</MenuButton>}</Menu.Item>
        <Menu.Item as="hr" disabled className="mx-3 pb-1 px-1 border-1 border-gray-500"/>
        <Menu.Item as="div" className="pl-1 pr-1">{(props) => <MenuButton { ...props }>Preferences...</MenuButton>}</Menu.Item>
        <Menu.Item as="div" className="pl-1 pr-1 mb-1">{(props) => (
          <MenuButton { ...props }>
            <span className="flex justify-between h-full w-full">
              <span>App Store...</span>
              <span className={`px-3 ${props.active ? '' : 'bg-gray-500'} rounded-full`}>1 Update</span>
            </span>
          </MenuButton>
        )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
)

const MenuInfo = () => (
  <div className="h-full w-1/3 flex justify-evenly items-center">
    <MenuDropdown />
    <a href="https://github.com/SoorajSNBlaze333" target="_blank" rel="noreferrer" className="cursor-pointer">Github</a>
    <a href="https://www.linkedin.com/in/sooraj-s-nair-a81543172/" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">LinkedIn</a>
    <a href="mailto:soorajsnblaze333@gmail.com" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">Mail</a>
    <a href="https://dev.to/soorajsnblaze333" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">Dev.to</a>
    <a href="https://hellonext.co/" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">HelloNext</a>
    <a href="https://www.skcript.com/" target="_blank" rel="noreferrer" className="m-0 text-white cursor-pointer font-medium">Skcript</a>
  </div>
);

const SystemInfo = () => (
  <div className="h-full w-1/3 flex justify-end items-center">
    <p className="m-0 text-white cursor-pointer font-medium mx-8">Wed 9 Aug 3:45 PM</p>
  </div>
);

const MenuBar = () => {
  return (
    <div className="h-7 w-screen absolute top-0 left-0 bg-gray-700 bg-opacity-80 text-white flex text-xs shadow-lg">
      <MenuInfo />
      <div className="h-full w-1/3"></div>
      <SystemInfo />
    </div>
  )
}

export default MenuBar;