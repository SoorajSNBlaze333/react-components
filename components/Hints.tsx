import React, { memo } from 'react';

const Hints = () => {
  return (
    <div className="w-auto text-gray-400 fixed bottom-5 bg-gray-900 px-2 py-0.5 rounded-md hints">
      <small>Use Ctrl + Space to bring up the spotlight search</small>
    </div>
  )
};

export default memo(Hints);