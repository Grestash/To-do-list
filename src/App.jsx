import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import Form from "./components/Form";
import TODOList from "./components/TODOList";
import { useState } from "react";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    console.log(storedTodos)
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length

  return (
    <>
      <Header></Header>
      <TODOHero todos_completed={todos_completed} total_todos={total_todos}></TODOHero>
      <Form todos={todos} setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
