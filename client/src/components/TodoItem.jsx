import React, { useState } from "react";

const TodoItem = ({ todo, handleCheck }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const handleChange = (e) => {
    setIsChecked(!isChecked);
    handleCheck(todo, e.target.checked);
  };
  return (
    <label className="bg-yellow-500 flex justify-around items-center w-full rounded-md">
      <input
        type="checkbox"
        name=""
        id=""
        checked={isChecked}
        onChange={handleChange}
      />
      <p
        className={`${
          todo.isCompleted ? "line-through opacity-50" : ""
        } w-[80%] bg-cyan-400 flex justify-around items-center p-2`}
      >
        <span className=" break-words w-[60%]">{todo.todo}</span>{" "}
        <span className="w-[20%] items-center">{todo.priority}</span>
        <span className="w-[20%] items-center">{todo.deadline}</span>
      </p>

      <div className="h-full w-[10%] flex justify-around items-center">
        <button className="bg-blue-500 h-full p-2">E</button>
        <button className="bg-red-500 h-full p-2">D</button>
      </div>
    </label>
  );
};

export default TodoItem;
