// myForm.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "./TodoForm";

test("simular la accion de ingresar tarea", async () => {
  const handleSubimit = jest.fn();
  render(<TodoForm onSubmit={handleSubimit} />);

  userEvent.type(screen.getByText(/Añade una tarea/i));

  userEvent.click(screen.getByRole("button", { name: /añadir/i }));

  // await waitFor(() =>
  //   expect(handleSubimit).toHaveBeenCalledWith({
  //     id: "",
  //     text: "",
  //   })
  // );
});
