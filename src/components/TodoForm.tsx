import React, { useState, useEffect, useRef } from "react";

interface TodoFormProps { 
  onSubmit: (arg: { id: number; text: string; isComplete:boolean }) => void; 
}

export function TodoForm(props: TodoFormProps) {
  const [input, setInput] = useState("");

  const inputRef = useRef < HTMLInputElement > (null);

  useEffect(() => {
    inputRef?.current?.focus();
  },[]);

  const handleChange = (e: React.FormEvent<HTMLInputElement> ) => {
    setInput(e.currentTarget.value);
  };

  const handleSubimit = (e: React.FormEvent) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
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
