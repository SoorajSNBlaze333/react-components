/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import About from './tabs/About';

const Tab = (props: any) => {
  const { command, onClose } = props;

  const renderIcons = () => (
    <div className="h-full w-full flex items-center justify-evenly">
      <p className="rounded-full h-3 w-3 bg-red-500 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer" onClick={onClose} />
      <p className="rounded-full h-3 w-3 bg-yellow-500 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer" />
      <p className="rounded-full h-3 w-3 bg-green-500 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer" />
    </div>
  );
  
  const renderTitle = () => (
    <div style={{ height: '40px' }} className="w-full bg-gray-600 flex">
      <div style={{ width: '70px' }}>{renderIcons()}</div>
      <p style={{ width: 'calc(100% - 140px)'}} className="m-0 flex justify-center items-center text-white">~{command}~</p>
    </div>
  );

  const renderDynamicContent = () => {
    let Component = About;
    // switch (command) {

    // }
    return <Component />;
  };

  const renderContent = () => (
    <div style={{ height: 'calc(100% - 40px)' }} className="w-full bg-gray-800">
      {renderDynamicContent()}
    </div>
  );

  return (
    <Transition
      show={Boolean(command.length)}
      as={Fragment}
      enter="ease-out duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div style={{
        left: '50%',
        top: '50%',
        width: '800px', 
        height: '550px',
        transform: 'translate(-50%, -50%)'
      }} className="bg-white absolute rounded-md custom-shadow overflow-hidden">
        {renderTitle()}
        {renderContent()}
      </div>
    </Transition>
  )
}

export default Tab;