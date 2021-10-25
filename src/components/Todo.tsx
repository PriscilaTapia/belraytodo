import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
// import { RiCloseCircleLine } from "react-icons/ri";
// import { TiEdit } from "react-icons/ti";

interface ToDo {
  id: number;
  text: string;
  isComplete: boolean
}


interface TodoProps{
  todos: ToDo[];
  completeTodo: any;
  removeTodo: any;
  updateTodo: any;
}

export default function Todo({ todos, completeTodo, removeTodo, updateTodo,}: TodoProps):JSX.Element {
  const [edit, setEdit] =  useState<ToDo | null>(null)

  const submitUpdate = (value: TodoProps) => {
    updateTodo(edit?.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit?.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  console.log(todos);

  return todos.map((todo:ToDo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit"
        >
          Editar
        </button>

        <button onClick={() => removeTodo(todo.id)} className="delete">
          Eliminar
        </button>
      </div>
    </div>
  ));
}
