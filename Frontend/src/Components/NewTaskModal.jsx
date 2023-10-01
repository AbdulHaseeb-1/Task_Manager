import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

function NewTask({ isOpen, onClose }) {
const categories = [{id:1,value:""},{id:2,value:"Personal"},{id:3,value:"Work"},{id:4,value:"Wishlist"}]

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="top-center"
      backdrop="blur"
      className="bg-[rgb(21,21,21)] text-white"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Add Task</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Task"
                placeholder="Enter new task here...."
                variant="underlined"
              />

<Select 
        label="Select an category" 
        variant="underlined"
        className="max-w-xs  text-white" 
        classNames={{listbox:"bg-[rgb(21,21,21)]",popover:"bg-[rgb(21,21,21)] text-white"}}
      >
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.value}>
            {category.value}
          </SelectItem>
        ))}
      </Select>


              {/* <input type="datetime-local" className="bg-transparent " /> */}
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="success" onPress={onClose}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default NewTask;
