"use client";
import { useBoardStore } from "@/store/BoardStore";
import { XCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type TodoCardsProps = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | undefined | null;
};

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: TodoCardsProps) => {
  const deleteTask = useBoardStore((state) => state.deleteTask);

  return (
    <div
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
      className="bg-white rounded-md space-y-2 p-2 drop-shadow-sm"
    >
      <div className="flex justify-between items-center p-5">
        <p>{todo.title}</p>
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => deleteTask(index, todo, id)}
        >
          <XCircleIcon className="h-8 w-8 ml-5" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
