import { Scene } from "./components/canvas/Scene";
import { TableContextProvider } from "./context/TableContextProvider";

function App() {
  return (
    <>
      <TableContextProvider>
        <Scene />
      </TableContextProvider>
    </>
  );
}

export default App;
