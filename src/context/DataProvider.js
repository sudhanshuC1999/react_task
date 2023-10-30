import React, { useEffect, useState } from "react";
import DataContext from "./DataContext";
import axios from "axios";

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [next, setNext] = useState(10);
  const [prev, setPrev] = useState(0);
  const [openTodoForm, setOpenTodoForm] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [showEditTodo, setShowEditTodo] = useState(false);
  const [editTodoTitle, setEditTodoTitle] = useState("");

  const onFormSubmit = (e, data) => {
    e.preventDefault();
    setData((pre) => [
      ...pre,
      {
        id: Math.floor(Math.random() * 90) + 10,
        title: data,
        userId: Math.floor(Math.random() * 90) + 10,
        completed: false,
      },
    ]);
  };

  const handleTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  // open add todo form

  const openForm = () => {
    setOpenTodoForm(true);
  };

  // fetch todos list

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        setData(res.data);
        setFIlteredData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // filter
  const handleFilter = (e) => {
    setFilterValue(e.target.value.replace(/\s/g, "").toLowerCase());
  };

  const onFilter = () => {
    const filteredList = data.filter((item) =>
      item.title.replace(/\s/g, "").toLowerCase().includes(filterValue)
    );
    setData(filteredList);
  };

  const onClear = () => {
    setData(filteredData);
  };

  // pegination

  const onNext = () => {
    if (next === data.length) {
      window.alert("Cannot forward");
    } else {
      setPrev(prev + 10);
      setNext(next + 10);
    }
  };

  // delete todo

  const deleteTodo = (id) => {
    const exceptDeletedTodos = data.filter((val) => val.id !== id);
    setData(exceptDeletedTodos);
  };

  // edit todo
  const editTodo = (id) => {
    setShowEditTodo(true);
  };

  const onPrev = () => {
    if (prev === 0) {
      window.alert("Cannot move back");
    } else {
      setPrev(prev - 10);
      setNext(next - 10);
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        handleFilter,
        onFilter,
        filteredData,
        onClear,
        next,
        setNext,
        prev,
        setPrev,
        onNext,
        onPrev,
        openForm,
        openTodoForm,
        onFormSubmit,
        handleTodoTitle,
        todoTitle,
        deleteTodo,
        editTodo,
        showEditTodo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
