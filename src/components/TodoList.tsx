import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import Todo from "./Todo";

interface ITodoForm {
  id: number,
  text: string
  isComplete: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<ITodoForm[]>([]);

  const addTodo = (todo: ITodoForm) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId: number, newValue: ITodoForm) => {
    if (!newValue.text) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id: number) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id:number) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodo);
  };
  // console.log(todos);
  return (
    <div className="lista">
      <h1>Tareas para hoy?</h1>

      <TodoForm onSubmit={addTodo} />

      <Todo
        todos={todos}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}
