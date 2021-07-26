/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { MagnifyingGlass } from 'phosphor-react';
import useFilter from '../hooks/useFilter';

const Form = ({ handleSubmit }) => {
  const { filters } = useFilter().state;
  const inputRef = useRef(null);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [list, setList] = useState(Object.keys(filters))

  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase();
    const currentList = currentLevel ? Object.keys(filters[currentLevel]) : Object.keys(filters);
    setList(() => {
      if (query.length) return currentList.filter((l) => l.toLowerCase().includes(query));
      return currentList;
    });
  }

  const handleFilter = (key) => {
    setCurrentLevel((prev) => {
      const prevKey = prev ? filters[prev][key] : filters[key];
      if (prevKey && typeof prevKey !== 'object') return null;
      return key;
    });
  };

  useEffect(() => {
    setList(currentLevel ? Object.keys(filters[currentLevel]) : Object.keys(filters));
    inputRef.current.value = "";
    inputRef.current.focus();
  }, [currentLevel])

  const renderOptions = () => {
    return list.map((filterKey, index) => {
      return (
        <li
          key={index}
          onClick={() => handleFilter(filterKey)}
          className="w-full p-4 cursor-pointer transition duration-100 hover:bg-gray-100 focus:outline-none flex justify-start items-center text-gray-700"
        >
          {(!currentLevel) && (<MagnifyingGlass weight="bold" className="h-4 w-4 mr-2 ml-2" />)}
          {filterKey}
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
              placeholder={currentLevel ? `${currentLevel}...` : "Filter by..."}
              autoFocus
              onChange={handleSearch}
              ref={inputRef}
            />
          </span>  
        </form>
        <small className="w-full block py-1 px-4 bg-gray-200 font-light">
          Filters
        </small>
        <ul>{renderOptions()}</ul>
      </div>
    </Transition.Child>
  )
}

export default function Filter() {
  const { state, toggle } = useFilter();
  const { show } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form");
  }

  const renderDialog = () => {
    return (
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed flex items-center justify-center inset-0 z-10 overflow-y-auto"
          onClose={toggle}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-300 bg-opacity-30" />
            </Transition.Child>
          </div>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Form handleSubmit={handleSubmit} />
        </Dialog>
      </Transition>
    )
  }

  return (
    <>
      <div onClick={toggle} className="cursor-pointer border-2 px-3 py-1 rounded">Filters</div>
      {renderDialog()}
    </>
  )
}