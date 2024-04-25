import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="max-w-[1500px] mx-auto bg-slate-500">
      <Form setTodoList={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
