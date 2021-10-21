import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

beforeEach(() => render(<TodoList />));

test("input agregar tarea", () => {
  render(<TodoList />);
  screen.debug();
  //   const btnAgregarTarea = screen.getByRole("button", { name: /añadir tarea/i });
  //   expect(btnAgregarTarea).toBeInTheDocument();
});
