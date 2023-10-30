import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import AddTodos from "./AddTodos";

function Filter() {
  const {
    handleFilter,
    filterValue,
    onFilter,
    onClear,
    openForm,
    openTodoForm,
  } = useContext(DataContext);

  return (
    <>
      <div>Filter</div>
      <input
        type="search"
        value={filterValue}
        onChange={(e) => handleFilter(e)}
      />
      <button onClick={onFilter}>Submit</button>
      <button onClick={onClear}>Clear</button>
      <br />
      <h2>Click on Add todo for create new todo</h2>
      <button onClick={openForm}>Add todo</button>
      {openTodoForm && <AddTodos />}
    </>
  );
}

export default Filter;
