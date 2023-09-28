import React from "react";
import "../App.css";
import { useDisclosure } from "@nextui-org/react";
import Navbar from "../Components/Navbar"
import TaskBox from "../Components/TaskBox";
import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@nextui-org/react";
import AddTask from "../Components/Modal";
export default function TaskPage() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
    <Navbar/>
      <div className="p-2 md:p-4 h-[100vh] max-w-[1200px] m-auto">
        <div className="relative max-h-[90vh]  ">
          {/* <h1 className="text-green-500 p-1 ">Task Manager</h1> */}
          <div className=" bg-[rgb(25,25,25)] p-3 w-auto rounded-md h-full overflow-auto max-h-[89vh]">
            <div className="overflow-hidden=">
              <TaskBox
                task={"Meating with Mr. X on secret Project"}
                time={"Monday, June 10 2024"}
                status={"bg-red-500"}
              />
        
              <TaskBox
                task={"Meating with Mr. X on secret Project"}
                time={"Monday, June 10 2024"}
                status={"bg-red-500"}
              />
            </div>
          </div>
          <Button
            variant="shadow"
            isIconOnly
            size="lg"
            radius="full"
            className="absolute right-8 bottom-5 z-20"
            color="success"
            onPress={onOpen}
          >
            <AddIcon />
          </Button>
          <AddTask isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </>
  );
}
