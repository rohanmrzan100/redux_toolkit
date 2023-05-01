// import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, addby } from "./store/slice/counterSlice";
import { useEffect, useState } from "react";
const App = () => {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  useEffect(() => {
    setValue(count);

  });

  return (
    <>
      <div className=" h-96 p-4 bg-yellow-100">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold mb-5">{value}</h1>
          <div className="flex my-4">
            <button
              onClick={() => {
                dispatch(increment());
              }}
              className="w-32 mx-2  h-16 text-5xl font-bold  border-2 border-slate-950 bg-green-700 flex justify-center items-center  active:bg-green-900 active:scale-105"
            >
              +
            </button>
            <button
              onClick={() => {
                dispatch(decrement());
              }}
              className="w-32 mx-2 h-16 text-5xl font-bold  border-2 border-slate-950 bg-red-700 flex justify-center items-center  active:bg-red-900 active:scale-105"
            >
              -
            </button>
            <button
              onClick={() => {
                dispatch(reset());
              }}
              className="w-32 mx-2 h-16 text-3xl font-bold  border-2 border-slate-950 bg-blue-700 flex justify-center items-center active:bg-blue-900 active:scale-105"
            >
              Reset
            </button>
          </div>
          <div className="flex w-full">
            <input 
            onChange = {(e)=>{
             setInput( parseInt(e.target.value));
            }}
              placeholder="Enter number"
              type="number"
              className="w-full h-16 border-2 border-slate-950 text-xl px-2 font-bold "
            />
            <button
              onClick={() => {
                dispatch(addby(input));
              }}
              className="w-32 mr-2 h-16 text-xl font-bold  border-2 border-slate-950 bg-orange-700 flex justify-center items-center active:bg-orange-600 active:scale-105"
            >
              Add By
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
