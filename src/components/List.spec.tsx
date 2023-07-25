import { render, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { List } from "./list";

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

// Get
// Quando mais de um elemento satisfaz a condição, retorna o erro

describe("List Component", () => {
  // it é de uma forma mais semantica
  it("list should have the names inside it", async () => {
    const { getByText, rerender, queryByText } = render(<List initialList={['Diego', 'Robson', 'Vini']} />);

    expect(getByText("Diego")).toBeInTheDocument();
    expect(getByText("Robson")).toBeInTheDocument();
    expect(getByText("Vini")).toBeInTheDocument();

    // await rerender(<List initialList={['Diego', 'Robson']} />);
    // Rerender n rolou

    // expect(getByText("Diego")).toBeInTheDocument();
    // expect(getByText("Robson")).toBeInTheDocument();
    
    // await waitFor(() => {
    //   expect(queryByText("Vini")).not.toBeInTheDocument();
    // });
  });

  it("should be able to add new item", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<List initialList={[]} />);

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
    const { getByText, getAllByText, queryByText } = render(<List initialList={['Diego']} />);

    const removeButton = getAllByText("Remover");
    fireEvent.click(removeButton[0]);

    // await waitForElementToBeRemoved(() => {
    //   // Passo só o elemento que espero que seja removido
    //   return getByText("Diego"); 
    // });

    await waitFor(() => {
      // Passo só o elemento que espero que seja removido
      expect(queryByText("Diego")).not.toBeInTheDocument();
    });
  });
});
