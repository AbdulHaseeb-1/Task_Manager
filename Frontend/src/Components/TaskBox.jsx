import { DeleteIcon, EditIcon, TriangleDownIcon } from "@chakra-ui/icons";

import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function TaskBox({ task, time, status }) {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <div className=" relative p-2 m-3 bg-[rgb(21,21,21)] text-gray-300 h-auto shadow-md shadow-stone-800 hover:bg-[rgb(30,30,30)]">
          <div className={`top-0 left-0 h-full w-0.5 ${status} absolute`}></div>
          <h6 className="font-bold ">{time}</h6>
          <p>{task}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-transparent ">
        <div>
          <Button
            color="warning"
            variant="shadow"
            className=" m-1 capitalize rounded-full"
            isIconOnly
          >
            <EditIcon />
          </Button>
          <Button
            variant="shadow"
            color="danger"
            className="capitalize m-1 rounded-full"
            isIconOnly
          >
            <DeleteIcon />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
