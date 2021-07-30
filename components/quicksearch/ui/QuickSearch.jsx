/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import Form from './Form';
import { Transition, Dialog } from '@headlessui/react';
import useQuick from '../hooks/useQuick';
import { search } from '../lib/utils';

export default function QuickSearch({ data = [] }) {
  const { state, dispatch } = useQuick();
  const { show, list } = state;
  const [listData, setListData] = useState(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form");
  }

  const handleSearch = (e) => {
    const query = e.target.value.trim();
    const newList = search(list, query);
    setListData(() => {
      if (newList.length) return newList;
      else return list;
    });
  }

  const handleToggle = () => {
    dispatch({ type: show ? "hide" : "show" })
  }

  const handleShortcut = (e) => {
    if (
      e.key === '/'
      && e.keyCode === 191
      && e.metaKey
      && !show
    ) dispatch({ type: "show" })
  }

  useEffect(() => {
    dispatch({ type: "data", value: data });
    window.addEventListener('keydown', handleShortcut);
    return () => {
      window.removeEventListener('keydown', handleShortcut);
    }
  }, []);

  useEffect(() => {
    setListData(list);
  }, [list])

  const renderDialog = () => {
    return (
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed flex items-center justify-center inset-0 z-10 overflow-y-auto"
          onClose={handleToggle}
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
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-30" />
            </Transition.Child>
          </div>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Form
            list={listData.slice(0, 6)}
            handleSubmit={handleSubmit}
            handleSearch={handleSearch}
          />
        </Dialog>
      </Transition>
    )
  }

  return (
    <>
      <div onClick={handleToggle} className="cursor-pointer border-2 px-3 py-1 rounded">
        Quick Search
      </div>
      {renderDialog()}
    </>
  )
}