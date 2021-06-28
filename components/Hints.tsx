import React, { memo } from 'react';

const Hints = () => {
  return (
    <div style={{
      left: "50%",
      transform: `translate(-${50}%, 0%)`
    }} className="w-auto text-gray-400 fixed bottom-2 bg-gray-900 px-2 py-0.5 rounded-md inline">
      <small>Use Ctrl + Space to bring up the spotlight search</small>
    </div>
  )
};

export default memo(Hints);