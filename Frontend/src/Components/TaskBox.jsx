import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button } from "@nextui-org/react";
import React from "react";

export default function TaskBox({ task, time, status }) {
  return (
    <div className=" relative p-2 m-3 bg-[rgb(21,21,21)] text-gray-300 h-auto shadow-md shadow-stone-800 hover:bg-[rgb(24,24,24)]">
      <div className="absolute right-5 top-3">
        <Button isIconOnly radius="full" size="sm" className="m-1 text-red-500  border-transparent"  variant="ghost">
          <DeleteIcon />
        </Button>
        <Button isIconOnly radius="full" size="sm" color="warning" className="m-1  border-transparent" variant="ghost">
          <EditIcon />
        </Button>
      </div>
      <div className={`top-0 left-0 h-full w-0.5 ${status} absolute`}></div>
      <h6 className="font-bold ">{time}</h6>
      <p>{task}</p>
    </div>
  );
}
