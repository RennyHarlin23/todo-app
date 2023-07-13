import { useState } from "react";
import List from "./components/List";

function App() {
  const [todo, setTodo] = useState("");
  const [arr, setArr] = useState([
    "Click + to add",
    "Click me to cross it",
    "Click - to remove",
  ]);

  function handleChange(event) {
    const value = event.target.value;
    setTodo(value);
  }

  function handleClick(event) {
    setArr((prevVal) => [...prevVal, todo]);
    setTodo("");
    event.preventDefault();
  }

  function handleDelete(event) {
    const value = event.target.value;
    setArr((prevVal) => {
      return prevVal.filter((item) => item !== prevVal[value]);
    });
  }

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <form onSubmit={handleClick}>
        <input
          name="text"
          onChange={handleChange}
          placeholder="Enter your task"
          value={todo}
          autoComplete="off"
        ></input>
        <button type="submit" className="submit">+</button>
      </form>
      <ol>
        {arr.map((item, index) => (
          <List key={index} id={index} title={item} onDelete={handleDelete} />
        ))}
      </ol>
    </div>
  );
}

export default App;
