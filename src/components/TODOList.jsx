import TrashIcon from "../assets/icons/trash.svg";
import EditIcon from "../assets/icons/edit.svg";
import React, { useOptimistic } from "react";

function TODOList({ todos, setTodos }) {
  return (
    <ol className="todo_list container">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}
export default TODOList;

function Item({ item, todos, setTodos }) {
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);

  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
  };
  const handleEdit = () => {
    setEditing(true);
  };
  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();

      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);
  const handleInputSubmit = (event) => {
    event.preventDefault();
    const value = event.target["edit-todo"].value;
    if (value.trim() !== "") {
      const updatedTodos = JSON.stringify(todos);
      localStorage.setItem("todos", updatedTodos);
      setEditing(false);
    }
  };
  const handleInputBlur = () => {
    const value = inputRef.current.value.trim();

    if (!value) {
      inputRef.current.focus();
      return;
    }

    const updatedTodos = todos.map((todo) =>
      todo.id === item.id ? { ...todo, title: value } : todo
    );

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setEditing(false);
  };
  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));

    const updatedTodos = JSON.stringify(
      todos.filter((todo) => todo.id !== item.id)
    );
    localStorage.setItem("todos", updatedTodos);
    console.log(updatedTodos);
  };

  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInputSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo_items_left" onClick={completeTodo}>
            <svg fill={item.is_completed ? "#8bc34a" : "#1f2937"}>
              <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
            </svg>
            <p
              style={
                item.is_completed ? { textDecoration: "line-through" } : {}
              }
            >
              {item?.title}
            </p>
          </button>
          <div className="todo_items_right">
            <button style={{ paddingTop: 2.5 }} onClick={handleEdit}>
              <img
                src={EditIcon}
                alt="Edit"
                style={{ height: 25, width: 25 }}
              />
            </button>
            <button onClick={handleDelete}>
              <img src={TrashIcon} alt="" style={{ height: 25, width: 25 }} />
            </button>
          </div>
        </>
      )}
    </li>
  );
}
