import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// test("sum", () => {
//   expect(1 + 2).toBe(3);
// }); // Simple test

// test("sum", () => {
//   const { getByText } = render(<App />);
//   // Query n da pau caso o elemento n exista
//   // Find busca o elemento depois da reenderização

//   // expect(getByText("Hello World")).toBeTruthy();
//   expect(getByText("Novo Item")).toBeInTheDocument();
//   expect(getByText("Hello World")).toHaveProperty('className', 'test');
// });



describe("App Component", () => {
  // it é de uma forma mais semantica
  it("list should have the names inside it", () => {
    const { getByText } = render(<App />);

    expect(getByText("Diego")).toBeInTheDocument();
    expect(getByText("Robson")).toBeInTheDocument();
    expect(getByText("Vini")).toBeInTheDocument();
  });

  it("should be able to add new item", () => {
    const { getByText, debug } = render(<App />);

    // debug();

    const addButton = getByText("Adicionar");
    fireEvent.click(addButton);

    // debug();

    expect(getByText("Novo Item")).toBeInTheDocument();
  });
});
