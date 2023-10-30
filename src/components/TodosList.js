import React, { memo, useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

function TodosList() {
  const { data, next, prev, deleteTodo } = useContext(DataContext);

  return (
    <>
      <div>TodosList</div>
      {data.slice(prev, next).map((item) => {
        return (
          <li key={item.id} style={{ margin: "8px 0" }}>
            {item.title}
            <button onClick={() => deleteTodo(item.id)}>delete</button>
          </li>
        );
      })}
    </>
  );
}

export default memo(TodosList);
