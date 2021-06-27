/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

const About = (props: any) => {
  const { about, onClose } = props;
  const { x, y } = about.position;

  const renderIcons = () => (
    <div className="h-full w-full flex items-center justify-evenly">
      <p className="rounded-full h-3 w-3 bg-red-500 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer" onClick={onClose} />
      <p className="rounded-full h-3 w-3 bg-yellow-500 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer" />
      <p className="rounded-full h-3 w-3 bg-green-500 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer" />
    </div>
  )
  
  const renderTitle = () => (
    <div style={{ height: '40px' }} className="w-full bg-gray-600 flex">
      <div style={{ width: '70px' }}>{renderIcons()}</div>
    </div>
  )

  const renderContent = () => (
    <div style={{ height: 'calc(100% - 40px)' }} className="w-full bg-gray-800">

    </div>
  )

  return (
    <Transition
      show={about.open}
      as={Fragment}
      enter="ease-out duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div style={{
        left: `${x}px`,
        top: `${y}px`,
        width: '600px', 
        height: '300px'
      }} className="bg-white absolute rounded-lg shadow-lg">
        {renderTitle()}
        {renderContent()}
      </div>
    </Transition>
  )
}

export default About;