import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

const mockedSetTodo = jest.fn();

describe("Agregar una entrada", () => {
  it("placeholder cambia", async () => {
    render(<TodoList todos={[]} setTodos={mockedSetTodo} />);
    const placeholderelement = screen.getByPlaceholderText(/Agregar tarea/i);
    expect(placeholderelement).toBeInTheDocument();
  });
});
