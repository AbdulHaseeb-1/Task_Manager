import React from "react";
import "./App.css";
import TaskBox from "./Components/TaskBox";
import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@nextui-org/react";
export default function App() {
  return (
    <>
      <div className="p-2 md:p-10 h-[100vh]">
     
          <div className="relative bg-[rgb(25,25,25)] p-3 w-auto rounded-md h-full overflow-auto">
            <h1 className="text-green-500">Task Manager</h1>
            <div className=" overflow-y-scroll overflow-x-auto">
              <TaskBox
                task={"Meating with Mr. X on secret Project"}
                time={"Monday, June 10 2024"}
                status={"bg-red-500"}
              />
              <TaskBox
                task={"Meating with Mr. X on secret Project"}
                time={"Monday, June 10 2024"}
                status={"bg-green-500"}
              />

            
              
            </div>
           
        </div>
          <Button
            variant="shadow"
            isIconOnly
            size="lg"
            radius="full"
            className="absolute right-5 bottom-5"
            color="success"
            >
            <AddIcon />
          </Button>
      </div>
    </>
  );
}
