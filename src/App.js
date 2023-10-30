import Filter from "./components/Filter";
import Pegination from "./components/Pegination";
import TodosList from "./components/TodosList";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <Filter />
        <TodosList />
        <Pegination />
      </DataProvider>
    </>
  );
}

export default App;
