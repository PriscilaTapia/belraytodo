import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

test("Boton añadir tarea", () => {
  render(<TodoForm />);
  fireEvent.click(screen.getByRole("button", { name: /añadir tarea/i }));
});
