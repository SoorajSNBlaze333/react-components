/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import Form from './Form';
import { Transition, Dialog } from '@headlessui/react';
import useFilter from '../hooks/useFilter';

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