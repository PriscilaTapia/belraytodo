import React, { Fragment, useState } from "react";
import { TodoForm } from "./TodoForm";
import {ITodoForm} from './TodoList';

interface ToDo {
  id: any;
  text: string;
  isComplete: boolean
}

interface TodoProps{
  todos: ToDo[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, newValue: ITodoForm) => void;
}

export default function Todo({ todos, completeTodo, removeTodo, updateTodo,}: TodoProps):JSX.Element {
  const [isEditingTodo, setIsEditingTodo] = useState<number | null>(null)

  const submitUpdate = (value : ToDo) => {
    updateTodo(value?.id, value);
    setIsEditingTodo(null)
  };

  if (isEditingTodo) {
    return <TodoForm onSubmit={submitUpdate} />;
  }

  return  <Fragment> {todos.map((todo, index) => (
   
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <button
          onClick={() => setIsEditingTodo(todo.id)}
          className="edit"
        >
          Editar
        </button>

        <button onClick={() => removeTodo(todo.id)} className="delete">
          Eliminar
        </button>
      </div>
    </div>    
  ))}
  </Fragment>
  ;
}
