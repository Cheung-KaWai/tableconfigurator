import { FlexHor } from "./components/layouts/FlexHor";
import { TableContextProvider } from "./context/TableContextProvider";
import { RoutingPages } from "./routing/RoutingPages";

function App() {
  return (
    <FlexHor>
      <TableContextProvider>
        <RoutingPages />
      </TableContextProvider>
    </FlexHor>
  );
}

export default App;
