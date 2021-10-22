import { render, screen, fireEvent } from "@testing-library/react";

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

test("boton editar", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Editar</Button>);
  fireEvent.click(screen.getByText(/Editar/i));
  //   expect(handleClick).toHaveBeenCalledTimes(1)
});
test("boton eliminar", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Eliminar</Button>);
  fireEvent.click(screen.getByText(/Eliminar/i));
  //   expect(handleClick).toHaveBeenCalledTimes(1)
});
