import React, { memo, useContext, useState } from "react";
import DataContext from "../context/DataContext";

function AddTodos() {
  const { todoTitle, handleTodoTitle, onFormSubmit } = useContext(DataContext);
  return (
    <div
      style={{
        border: "3px solid green",
        width: "20%",
        margin: "32px 0",
        padding: "32px",
      }}
    >
      <form onSubmit={(e) => onFormSubmit(e, todoTitle)}>
        <h3>Add Todos</h3>
        <label>Title:</label>
        <input type="text" value={todoTitle} onChange={handleTodoTitle} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default memo(AddTodos);
