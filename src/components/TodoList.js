import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import Todo from "./Todo";
import { crearTodoDB, eliminarTodo, obetenerTodos } from "../api/todo.service";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const todosss = await obetenerTodos();
    setTodos(todosss);
  };

  const addTodo = async (todo) => {
    if (!todo.text) {
      return;
    }
    await crearTodoDB({ text: todo.text });

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = async (id) => {
    await eliminarTodo(id);
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
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
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
