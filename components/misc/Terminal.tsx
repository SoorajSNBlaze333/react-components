import React from 'react';
import Header from '../terminal/Header';
import Window from '../terminal/Window';

const Terminal = () => {
  return (
    <div style={{
      height: '400px',
      width: '700px'
    }} className="rounded-lg ring-1 ring-offset-1 ring-gray-700 terminal shadow-xl">
      <div className="h-full w-full rounded-lg ring-1 ring-gray-500 overflow-hidden">
        <Header />
        <Window />
      </div>
    </div>
  )
}

export default Terminal;