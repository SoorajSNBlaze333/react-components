import React from 'react';
import Header from '../terminal/Header';
import Window from '../terminal/Window';

const Terminal = () => {
  return (
    <div className="h-4/5 w-9/12 rounded-lg ring-1 ring-offset-1 ring-gray-600 terminal shadow-xl">
      <div className="h-full w-full rounded-lg ring-1 ring-gray-400 overflow-hidden">
        <Header />
        <Window />
      </div>
    </div>
  )
}

export default Terminal;