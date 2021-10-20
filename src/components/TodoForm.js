import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.valued);
  };

  const handleSubimit = (e) => {
    e.preventDafault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubimit}>
      <input
        type="text"
        placeholder="Agregar tarea"
        value=""
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">añadir tarea</button>
    </form>
  );
}
