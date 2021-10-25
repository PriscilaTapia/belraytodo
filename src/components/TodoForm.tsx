import React, { useState, useEffect, useRef } from "react";

export function TodoForm(props: { onSubmit: (arg: { id: number; text: string; }) => void; }) {
  const [input, setInput] = useState("");
  const inputRef = useRef < HTMLInputElement > (null);

  useEffect(() => {
    inputRef?.current?.focus();
  },[]);

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInput(e.target.value);
  };

  const handleSubimit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubimit}>
      <label htmlFor="tarea">Añade una tarea</label>
      <input
        type="text"
        placeholder="Agregar tarea"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button"> añadir</button>
    </form>
  );
}
