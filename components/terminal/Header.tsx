import React from 'react';

const Header = () => {
  const renderIcons = () => {
    return (
      <div className="h-full w-full flex items-center justify-evenly">
        <p className="rounded-full h-3 w-3 bg-red-500 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer"></p>
        <p className="rounded-full h-3 w-3 bg-yellow-500 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer"></p>
        <p className="rounded-full h-3 w-3 bg-green-500 ring-1 ring-gray-500 ring-opacity-65 cursor-pointer"></p>
      </div>
    );
  }

  return (
    <div style={{
      height: '60px',
      backgroundColor: '#3C3D40',
    }} className="w-full border-b border-gray-700 top-0 sticky font-semibold">
      <div className="w-full flex">
        <div style={{ width: '70px' }}>{renderIcons()}</div>
        <div style={{ width: 'calc(100% - 140px)'}} className="flex justify-center text-gray-50">~ Almanac ~</div>
      </div>
      <div className="w-full flex justify-center items-center text-gray-400">
        Use Up arrow to cycle through some of the commands
      </div>
    </div>
  )
}

export default Header;