import { useState } from "react";

function App() {
  // Commands to use Jest
  // npm i jest -D
  // npx jest --init
  // npm i ts-node -D
  // npm i @types/jest -D
  // npm i @swc/core @swc/jest -D
  // npm install -D jest-environment-jsdom
  // npm i @testing-library/jest-dom
  // npm test --watchAll
  // Ver a Doc -> Video no min 30
  
  const [list, setList] = useState<string[]>(["Diego", "Robson", "Vini"]);

  const addToList = () => setList([...list, "Novo Item"]);

  return (
    <>
      <input type="text" />

      <button onClick={addToList}>Adicionar</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
