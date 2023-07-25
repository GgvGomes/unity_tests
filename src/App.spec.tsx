import { render } from "@testing-library/react";
import App from "./App";

// test("sum", () => {
//   expect(1 + 2).toBe(3);
// }); // Simple test

test("sum", () => {
  const { getByText } = render(<App />);

    expect(getByText("Hello World")).toBeTruthy();
}); 
