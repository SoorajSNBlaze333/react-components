import React, { Fragment } from 'react';
import Profile from '../misc/Profile';
import { Dialog, Transition } from '@headlessui/react';

interface TerminalProps {
  show: boolean,
  data: any,
  toggleShow: (state: boolean) => void,
}

const TerminalDialog = (props: TerminalProps) => {
  const { show, data, toggleShow } = props;

  const renderIcons = () => (
    <div className="h-full w-full flex items-center justify-evenly">
      <p onClick={() => toggleShow(false)} className="rounded-full h-3 w-3 bg-red-400 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer"></p>
      <p className="rounded-full h-3 w-3 bg-yellow-400 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer"></p>
      <p className="rounded-full h-3 w-3 bg-gray-400 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer"></p>
    </div>
  );

  const renderHeader = () => (
    <>
      <div style={{ width: '80px' }}>{renderIcons()}</div>
      <div style={{ width: 'calc(100% - 160px)'}} className="flex justify-center items-center text-gray-50">
        About Sooraj
      </div>
    </>
  );

  const renderContent = () => (
    <div style={{ height: 'calc(100% - 40px)'}} className="w-full flex justify-between items-center">
      <div className="h-full w-5/12 flex justify-center items-center">
        <Profile size={32} />
      </div>
      <div className="h-full w-7/12 text-white">
        <div className="h-full w-4/5 flex items-center">
          <div className="text-left">
            <p className="m-0 font-bold text-xl">Sooraj&apos;s Portfolio</p>
            <p className="m-0 text-xs p-0.5">Version 1.0.0</p>
            <p className="m-0 mt-3 text-xs p-0.5">Frontend Developer</p>
            <p className="m-0 text-xs p-0.5">2018 - Present</p>
            <p className="m-0 text-xs p-0.5">Experience of over 2.5+ years in Web Development</p>
            <button
              type="button"
              className="inline-flex mt-5 justify-center text-xs font-bold bg-gray-500 px-3 py-0.5 border border-transparent rounded-md focus:outline-none"
              onClick={() => toggleShow(false)}
            >
              Sooraj&apos;s Resume...
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => toggleShow(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div style={{ width: '600px', height: '300px' }} className="inline-block overflow-hidden align-middle transition-all transform shadow-xl rounded-lg ring-1 ring-gray-700">
              <Dialog.Title
                as="h3"
                style={{ height: '40px' }}
                className="w-full flex bg-gray-600 border-b border-gray-700 top-0 sticky font-semibold"
              >
                {renderHeader()}
              </Dialog.Title>
              {renderContent()}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default TerminalDialog;