import React, { useRef } from 'react';
import { useCalculator } from '../index';

export default function Calculator() {
  const inputRef = useRef(null);
  const { state, dispatch } = useCalculator();
  const { currentValue, operation } = state;

  const handleResult = () => {
    dispatch({ type: 'calculate' });
    console.log(currentValue);
    inputRef.current.value = currentValue;
  }

  return (
    <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-gray-100 rounded-xl shadow-lg" style={{ height: '550px', width: '360px' }}>
      <div className="h-full w-full relative">
        <form className="w-full h-1/6 flex">
          {(operation) && (<span>{operation}</span>)}
          <input className="w-full text-7xl font-light p-4 text-right overflow-hidden rounded-xl focus:outline-none" ref={inputRef} defaultValue={currentValue} />
        </form>
        <div className="w-full h-5/6 flex flex-col justify-evenly items-center">
          <div className="w-full mt-2 flex justify-evenly items-center">
            <button className="rounded-full bg-gray-200 h-16 w-16 text-xl">C</button>
            <button className="rounded-full bg-gray-200 h-16 w-16 text-xl">√</button>
            <button className="rounded-full bg-gray-200 h-16 w-16 text-xl">%</button>
            <button className="rounded-full bg-yellow-400 h-16 w-16 text-xl">/</button>
          </div>
          <div className="w-full mt-2 flex justify-evenly items-center">
            <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl">7</button>
            <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl">8</button>
            <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl">9</button>
            <button className="rounded-full bg-yellow-400 h-16 w-16 text-xl">X</button>
          </div>
          <div className="w-full mt-2 flex justify-evenly items-center">
            <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl">4</button>
            <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl">5</button>
            <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl">6</button>
            <button className="rounded-full bg-yellow-400 h-16 w-16 text-xl">-</button>
          </div>
          <div className="w-full mt-2 flex justify-evenly items-center">
            <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl" onClick={() => dispatch({ type: 'number', value: { currentValue: 1 }})}>1</button>
            <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl" onClick={() => dispatch({ type: 'number', value: { currentValue: 2 }})}>2</button>
            <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl" onClick={() => dispatch({ type: 'number', value: { currentValue: 3 }})}>3</button>
            <button className="rounded-full bg-yellow-400 h-16 w-16 text-xl" onClick={() => dispatch({ type: 'operation', value: { operation: '+' }})}>+</button>
          </div>
          <div className="w-full mt-2 flex justify-evenly items-center">
            <button className="rounded-full bg-gray-600 text-white h-16 w-36 ml-4 text-xl">0</button>
            <div className="flex w-1/2 justify-between items-center px-4">
              <button className="rounded-full bg-gray-600 text-white h-16 w-16 text-xl">.</button>
              <button className="rounded-full bg-yellow-400 h-16 w-16 text-xl" onClick={handleResult}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}