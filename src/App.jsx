import { Scene } from "./components/canvas/Scene";
import { Configurator } from "./components/configurator/Configurator";
import { FlexHor } from "./components/layouts/FlexHor";
import { TableContextProvider } from "./context/TableContextProvider";

function App() {
  return (
    <FlexHor>
      <TableContextProvider>
        <Scene />
        <Configurator />
      </TableContextProvider>
    </FlexHor>
  );
}

export default App;
