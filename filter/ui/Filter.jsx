/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import useFilter from '../hooks/useFilter';

const Form = ({ handleSubmit }) => {
  const { filters } = useFilter().state;
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
  }, [currentLevel])

  const renderOptions = () => {
    return list.map((filterKey, index) => {
      return (
        <li
          key={index}
          onClick={() => handleFilter(filterKey)}
          className="w-full p-4 cursor-pointer hover:bg-gray-100 focus:outline-none"
        >
          {filterKey}
        </li>
      )
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full h-full">
      <input
        className="w-full h-16 p-4 placeholder-gray-500 text-xl"
        placeholder="Add Filter"
        autoFocus
        onChange={(e) => handleSearch(e)}
      />
      <ul>{renderOptions()}</ul>
    </form>
  )
}

export default function Filter() {
  const { state, toggle } = useFilter();
  const { show } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form");
  }

  const renderFilter = () => {
    return (
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
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
              <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-30" />
            </Transition.Child>
          </div>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md my-8 overflow-hidden transition-all transform bg-white shadow-xl rounded-md">
              <Form handleSubmit={handleSubmit} />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    )
  }

  return (
    <>
      <div onClick={toggle} className="cursor-pointer">Filter + </div>
      {renderFilter()}
    </>
  )
}