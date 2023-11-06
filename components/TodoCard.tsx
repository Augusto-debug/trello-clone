import React from "react";

type TodoCardsProps = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: any;
  draggableProps: any;
  dragHandleProps: any;
};

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: TodoCardsProps) => {
  {
    console.log(todo);
  }
  return <div>{todo.title}</div>;
};

export default TodoCard;
