import React, { useEffect, useState } from "react";

import All from "./All";

const TodoList = ({ todoList, setTodoList }) => {
  const [highPriorityTodos, setHighPriorityTodos] = useState([]);
  const [moderatePriorityTodos, setModeratePriorityTodos] = useState([]);
  const [lowPriorityTodos, setLowPriorityTodos] = useState([]);
  const [prioritySort, setPrioritySort] = useState("all");

  const handlePrioritySort = (e) => {
    setPrioritySort(e.target.value);
  };

  useEffect(() => {
    setHighPriorityTodos(todoList.filter((todo) => todo.priority === "high"));
    setModeratePriorityTodos(
      todoList.filter((todo) => todo.priority === "moderate")
    );
    setLowPriorityTodos(todoList.filter((todo) => todo.priority === "low"));
  }, [todoList, prioritySort]);
  const handleCheck = (todo, isChecked) => {
    const updatedTodoList = todoList.map((item) =>
      item.id === todo.id ? { ...item, isCompleted: isChecked } : item
    );
    setTodoList(updatedTodoList);
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className=" flex justify-around items-center w-full h-20">
        <label
          htmlFor="prioritySort-all"
          className={`${
            prioritySort === "all" ? "bg-yellow-500" : " bg-violet-500"
          } flex p-2 rounded-md`}
        >
          <p>All</p>
          <input
            className="hidden"
            type="radio"
            name="prioritySort"
            id="prioritySort-all"
            value="all"
            onChange={handlePrioritySort}
            checked={prioritySort === "all"}
          />
        </label>
        <label
          htmlFor="prioritySort-high"
          className={`${
            prioritySort === "high" ? "bg-yellow-500" : " bg-violet-500"
          } flex p-2 rounded-md`}
        >
          <p>High</p>
          <input
            className="hidden"
            type="radio"
            name="prioritySort"
            id="prioritySort-high"
            value="high"
            onChange={handlePrioritySort}
            checked={prioritySort === "high"}
          />
        </label>
        <label
          htmlFor="prioritySort-moderate"
          className={`${
            prioritySort === "moderate" ? "bg-yellow-500" : "bg-violet-500"
          } flex p-2 rounded-md`}
        >
          <p>Moderate</p>
          <input
            className="hidden"
            type="radio"
            name="prioritySort"
            id="prioritySort-moderate"
            value="moderate"
            onChange={handlePrioritySort}
            checked={prioritySort === "moderate"}
          />
        </label>
        <label
          htmlFor="prioritySort-low"
          className={`${
            prioritySort === "low" ? "bg-yellow-500" : " bg-violet-500"
          } flex p-2 rounded-md`}
        >
          <p>Low</p>
          <input
            className="hidden"
            type="radio"
            name="prioritySort"
            id="prioritySort-low"
            value="low"
            onChange={handlePrioritySort}
            checked={prioritySort === "low"}
          />
        </label>
      </div>
      {prioritySort === "all" && (
        <All
          setTodoList={setTodoList}
          todoList={todoList}
          handleCheck={handleCheck}
        />
      )}
      {prioritySort === "high" && (
        <All
          setTodoList={setHighPriorityTodos}
          todoList={highPriorityTodos}
          handleCheck={handleCheck}
        />
      )}
      {prioritySort === "moderate" && (
        <All
          setTodoList={setModeratePriorityTodos}
          todoList={moderatePriorityTodos}
          handleCheck={handleCheck}
        />
      )}
      {prioritySort === "low" && (
        <All
          setTodoList={setLowPriorityTodos}
          todoList={lowPriorityTodos}
          handleCheck={handleCheck}
        />
      )}
    </div>
  );
};

export default TodoList;
