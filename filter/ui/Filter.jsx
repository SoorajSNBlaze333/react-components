import React, { Fragment } from 'react';
import useFilter from '../hooks/useFilter';
import { Transition, Dialog } from '@headlessui/react';

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
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
              <form onSubmit={handleSubmit}>
                <input autoFocus placeholder="Add Filter" />
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={toggle}
                >
                  Submit
                </button>
              </form>
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