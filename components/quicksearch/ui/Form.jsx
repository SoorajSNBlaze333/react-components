/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { MagnifyingGlass } from 'phosphor-react';
import useQuick from '../hooks/useQuick';

export default function Form({ handleSubmit }) {
  const { state } = useQuick();
  const inputRef = useRef(null);
  const [list, setList] = useState(state.data);

  console.log(list);

  // const handleSearch = (e) => {
  //   const query = e.target.value.trim().toLowerCase();
  //   const currentList = currentLevel ? Object.keys(filters[currentLevel]) : Object.keys(filters);
  //   setList(() => {
  //     if (query.length) return currentList.filter((l) => l.toLowerCase().includes(query));
  //     return currentList;
  //   });
  // }

  // useEffect(() => {
  //   setList(getList(filters, currentLevel));
  //   inputRef.current.value = "";
  //   inputRef.current.focus();
  // }, [])

  useEffect(() => {
    setList(state.data);
  }, [state.data])

  const renderOptions = () => {
    return list.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => item.onSelect(item.value)}
          className="w-full p-4 cursor-pointer transition duration-100 hover:bg-gray-100 focus:outline-none flex justify-start items-center text-gray-700"
        >
          {item.key}
        </li>
      )
    });
  };
  
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
        <form onSubmit={handleSubmit} className="w-full h-full">
          <span className="h-16 w-full flex">
            <input
              className="w-full h-full p-4 placeholder-gray-400 text-gray-800 text-xl"
              placeholder="Search for..."
              autoFocus
              // onChange={handleSearch}
              ref={inputRef}
            />
          </span>  
        </form>
        {/* <small className="w-full block py-1 px-4 bg-gray-200 font-light">
          Quick Search
        </small> */}
        <ul>{renderOptions()}</ul>
      </div>
    </Transition.Child>
  )
}