/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import Form from './Form';
import { Transition, Dialog } from '@headlessui/react';
import useQuick from '../hooks/useQuick';

export default function QuickSearch({ data = [], emptyContent }) {
  const { state, dispatch } = useQuick();
  const { show, list } = state;
  const [listData, setListData] = useState(list);

  const handleSearch = (e) => {
    const query = e.target.value.trim();
    // TODO: Add search here
  }

  const handleToggle = () =>  dispatch({ type: show ? "hide" : "show" });

  const handleShortcut = (e) => {
    if (
      e.keyCode === 81
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
            emptyContent={emptyContent}
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