import { useState } from "react";

interface ListProps {
  initialList: string[];
}

export function List({ initialList }: ListProps) {
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

  const [newItem, setNewItem] = useState<string>("");
  const [list, setList] = useState<string[]>(initialList);

  const addToList = () => {
    setTimeout(() => {
      setList([...list, newItem]);
    }, 500);
  };

  const removeFromList = (item: string) => {
    setTimeout(() => {
      setList((state) => state.filter((listItem) => listItem !== item));
    }, 500);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Novo Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={addToList}>Adicionar</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
