import React, { memo } from 'react';
import { EventEmitter } from '../libs/events';

const Hints = () => {
  return (
    <div className="w-auto text-gray-400 fixed bottom-5 bg-gray-900 px-2 py-0.5 rounded-md hints custom-shadow">
      <small>
        Use Ctrl + Space to bring up the 
        <span className="bg-gray-800 py-0.5 px-1.5 ml-1 rounded-sm cursor-pointer" onClick={() => EventEmitter.dispatch('toggleSearch')}>spotlight search</span>
      </small>
    </div>
  )
};

export default memo(Hints);