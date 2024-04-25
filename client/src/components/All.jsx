import React from "react";
import TodoItem from "./TodoItem";
import { Reorder } from "framer-motion";

const All = ({ setTodoList, todoList, handleCheck }) => {
  return (
    <Reorder.Group values={todoList} onReorder={setTodoList}>
      {todoList.map((todo) => (
        <Reorder.Item key={todo.id} value={todo}>
          <TodoItem todo={todo} handleCheck={handleCheck} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default All;
