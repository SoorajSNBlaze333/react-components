/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';
import { Transition } from '@headlessui/react';

const ITEM_CLASS = "w-full cursor-pointer transition duration-100 hover:bg-gray-100 hover:outline-none flex justify-start items-center text-gray-700"

export default function Form({ list, emptyContent, handleSearch }) {
  const inputRef = useRef(null);

  const renderOptions = () => list.map((item, index) => (
    <div key={index} className={ITEM_CLASS}>{item.item}</div>
  ));
  
  return (
    <Transition.Child
      as="div"
      enter="ease-out duration-100"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="inline-block w-full my-8 overflow-hidden transition-all transform bg-white shadow-xl rounded-md w-[600px] shadow-xl">
        <span className="h-16 w-full flex">
          <input
            className="w-full h-full p-4 placeholder-gray-400 text-gray-800 text-xl focus:outline-none border-b-2 border-gray-100"
            placeholder="Search for..."
            autoFocus
            onChange={handleSearch}
            ref={inputRef}
          />
        </span>  
        {Boolean(list.length) ? renderOptions() : emptyContent}
      </div>
    </Transition.Child>
  )
}