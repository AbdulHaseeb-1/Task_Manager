import React from "react";

export default function TaskBox({ task,time,status }) {

  return (
    <div className=" relative p-2 m-3 bg-[rgb(21,21,21)] text-gray-300 h-auto shadow-lg shadow-zinc-800" >
      <div className={`top-0 left-0 h-full w-0.5 ${status} absolute`}></div>
      <h6 className="font-bold ">{time}</h6>
      <p>{task}</p>
    </div>
  );
}
