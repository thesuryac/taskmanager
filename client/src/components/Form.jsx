import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setTodoList, todoList }) => {
  const [todoText, setTodoText] = useState("");
  const [priority, setPriority] = useState("");
  const deadlineDateRef = useRef(null);

  const handleTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    const paddedMonth = month.padStart(2, "0");
    const paddedDay = day.padStart(2, "0");

    return `${paddedDay} / ${paddedMonth} / ${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText === "") return;
    console.log(todoText);
    const deadlineDate = deadlineDateRef.current.value;

    const formatedDate = formatDate(deadlineDate);

    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        isCompleted: false,
        todo: todoText,
        priority: priority,
        deadline: formatedDate,
      },
    ]);
    setTodoText("");
    setPriority("");
    deadlineDateRef.current.value = "";
  };
  console.log(todoList);
  return (
    <form
      onSubmit={handleSubmit}
      className="grid sm:grid-cols-4 sm:grid-rows-1 bg-green-500 mt-[200px] grid-rows-4 grid-cols-1 p-3  h-auto gap-2"
    >
      <input
        type="text"
        name=""
        id=""
        onChange={handleTodoText}
        placeholder="Task to complete"
        value={todoText}
        className="w-full h-full rounded-md"
      />
      <div className="flex flex-col w-full justify-around items-center h-full">
        <div className="">
          <h2>Priority</h2>
        </div>
        <div className="w-full flex gap-1 justify-around items-center">
          <label
            htmlFor="priority-high"
            className={`${
              priority === "high" ? "bg-yellow-700" : " bg-violet-500"
            } flex p-2 rounded-md`}
          >
            <p>High</p>
            <input
              className="hidden"
              type="radio"
              name="priority"
              id="priority-high"
              value="high"
              onChange={handlePriorityChange}
              checked={priority === "high"}
            />
          </label>
          <label
            htmlFor="priority-moderate"
            className={`${
              priority === "moderate" ? "bg-yellow-700" : "bg-violet-500"
            } flex p-2 rounded-md`}
          >
            <p>Moderate</p>
            <input
              className="hidden"
              type="radio"
              name="priority"
              id="priority-moderate"
              value="moderate"
              onChange={handlePriorityChange}
              checked={priority === "moderate"}
            />
          </label>
          <label
            htmlFor="priority-low"
            className={`${
              priority === "low" ? "bg-yellow-700" : " bg-violet-500"
            } flex p-2 rounded-md`}
          >
            <p>Low</p>
            <input
              className="hidden"
              type="radio"
              name="priority"
              id="priority-low"
              value="low"
              onChange={handlePriorityChange}
              checked={priority === "low"}
            />
          </label>
        </div>
      </div>
      <input
        type="date"
        name=""
        id=""
        className="sm:w-[90%] sm:mx-auto w-full rounded-md opacity-60 p-3 h-full"
        ref={deadlineDateRef}
      />
      <button
        type="submit"
        className="w-full opacity-60 bg-inherit rounded-md bg-green-200 h-full"
      >
        submit
      </button>
    </form>
  );
};

export default Form;
