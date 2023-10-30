import React, { useContext } from "react";
import DataContext from "../context/DataContext";

function Pegination() {
  const { prev, onNext, next, onPrev } = useContext(DataContext);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <button onClick={(e) => onPrev(next)}>{"<"}</button>
      <button onClick={(e) => onNext(prev)}>{">"}</button>
    </div>
  );
}

export default Pegination;
