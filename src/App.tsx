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

import { List } from "./components/list";

function App() {
  return <List initialList={["Diego", "Robson", "Vini"]}/>
}

export default App;
