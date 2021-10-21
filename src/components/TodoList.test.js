import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("To Do List", () => {
  render(<TodoList />);
  screen.debug();
  const todo = screen.getByText(/añadir tarea/i);
  expect(todo).toBeInTheDocument();
});
