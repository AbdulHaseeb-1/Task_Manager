import React, { useState } from "react";
import "../App.css";
import { useDisclosure } from "@nextui-org/react";
import  { AuthNavigationBar, GuestNavigationBar } from "../Components/Navbars"
import TaskBox from "../Components/TaskBox";
import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@nextui-org/react";
import NewTask from "../Components/NewTaskModal";


export default function TaskPage() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [IsAuth,setAuth] = useState(false)

  return (
    <>
    {IsAuth ? <AuthNavigationBar/> : <GuestNavigationBar/>}
 
      <div className=" p-2 md:p-4 h-[100vh] max-w-[1200px] m-auto">
        <div className="relative max-h-[90vh] ">
          {/* <h1 className="text-green-500 p-1 ">Task Manager</h1> */}
          <div className="min-h-[90px] bg-[rgb(25,25,25)] p-3 w-auto rounded-md h-full overflow-auto max-h-[89vh]">
            <div className="overflow-hidden ">
              {/* {/* <TaskBox
                task={"Meating with Mr. X on secret Project"}
                time={"Monday, June 10 2024"}
                status={"bg-red-500"}
              /> */}
        
              {/* <TaskBox
                task={"Meating with Mr. X on secret Project"}
                time={"Monday, June 10 2024"}
                status={"bg-red-500"}
              /> */}
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
          <NewTask isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </>
  );
}
