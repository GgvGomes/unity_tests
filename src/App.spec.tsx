import { render, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
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

  it("should be able to add new item", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<App />);

    // debug();

    const input = getByPlaceholderText("Novo Item");
    const addButton = getByText("Adicionar");

    fireEvent.change(input, { target: { value: "Novo Item" } });
    fireEvent.click(addButton);

    // debug();

    // expect(getByText("Novo Item")).toBeInTheDocument();
    // expect(await findByText("Novo Item")).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText("Novo Item")).toBeInTheDocument();
    })
  });

  it("should be able to remove item", async () => {
    const { getByText, getAllByText } = render(<App />);

    const removeButton = getAllByText("Remover");
    fireEvent.click(removeButton[0]);

    await waitForElementToBeRemoved(() => {
      // Passo só o elemento que espero que seja removido
      return getByText("Diego"); 
    });
  });
});
