import { useState } from "react";

export const Addform = ({ setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue === "") {
      alert("Taskaa oruulna uu!!!");
      return;
    }

    const newTodos = {
      id: Date.now(),
      text: inputValue,
      isDone: false,
    };

    setTodos((prev) => [newTodos, ...prev]);
    setInputValue("");
  };
  return (
    <div>
      <input
        value={inputValue}
        onChange={handleInputValue}
        type="text"
        placeholder="Add a new task"
      ></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
};
