import PlusIcon from "../assets/icons/plus2.svg";
import React, { useState } from "react";

function Form({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");
  const maxTextWidth = 350;
  const handleChange = (e) => {
    const text = e.target.value;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");


    ctx.font = "16px Inter, sans-serif"; 

    const textWidth = ctx.measureText(text).width;

    if (textWidth <= maxTextWidth) {
      setInputValue(text);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;
    if (value.trim() !== "") {
      const newTodo = {
        title: value,
        id: self.crypto.randomUUID(),
        is_completed: false,
      };

      setInputValue("");

      setTodos((prevTodos) => [newTodo, ...prevTodos]);

      const updatedTodoList = JSON.stringify([newTodo, ...todos]);
      console.log(updatedTodoList);
      localStorage.setItem("todos", updatedTodoList);
      event.target.reset();
    }
  };

  return (
    <form className="form container" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
          autoComplete="off"
          onChange={handleChange}
          value={inputValue}
        />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <img src={PlusIcon} alt="Plus" className="plusIcon" draggable={false} />
      </button>
    </form>
  );
}
export default Form;
