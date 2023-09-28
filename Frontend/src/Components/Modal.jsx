import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";

function AddTaskModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center" backdrop="blur" className="bg-[rgb(21,21,21)] text-white" >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Add Task</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Task Name"
                placeholder="Enter task name"
                variant="underlined"
                
              />

              <input type="datetime-local" className="bg-transparent " />


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

export default AddTaskModal;
