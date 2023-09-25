import React from "react";
import "./App.css";
import TaskBox from "./Components/TaskBox";
import {AddIcon} from "@chakra-ui/icons"
export default function App() {
  return (
    <>
      <div className="p-5 md:p-10 h-[100vh]">
        <div className="relative bg-[rgb(25,25,25)] p-3 w-auto rounded-md h-full overflow-auto">
          <div className=" overflow-y-scroll overflow-x-auto">
            <TaskBox
              task={"Meating with Mr. X on secret Project"}
              time={"Monday, June 10 2024"}
              status={"bg-green-500"}
            />
            <TaskBox
              task={"Meating with Mr. X on secret Project"}
              time={"Monday, June 10 2024"}
              status={"bg-green-500"}
            />
            <TaskBox
              task={"Meating with Mr. X on secret Project"}
              time={"Monday, June 10 2024"}
              status={"bg-green-500"}
            />
            <TaskBox
              task={"Meating with Mr. X on secret Project"}
              time={"Monday, June 10 2024"}
              status={"bg-green-500"}
            />
            <TaskBox
              task={"Meating with Mr. X on secret Project"}
              time={"Monday, June 10 2024"}
              status={"bg-green-500"}
            />
            <TaskBox
              task={"Meating with Mr. X on secret Project"}
              time={"Monday, June 10 2024"}
              status={"bg-green-500"}
            />
          </div>
          <div className=" flex flex-col fixed right-5 top-5 ">
            <button className="m-2 outline-green-500 text-white rounded-full w-10 h-10 outline-dashed grid content-center">
              <span className="block">+</span>
            </button>

            <button className="m-2 outline-red-500 text-white rounded-full w-12 h-12 outline-dashed grid content-center">
              <span className="block"><AddIcon/></span>
            </button>

            {/* <button className="m-2 text-center outline-orange-500 text-white rounded-full w-10 h-10 outline grid content-center hover:bg-orange-500 transition">
              <AddIcon />
            </button> */}


          </div>
        </div>
      </div>
    </>
  );
}
