import { type ToDo_type } from "../types";
import { useState } from "react";

const useData = () => {
  const [data, setData] = useState<ToDo_type[]>(
    JSON.parse(window.localStorage.getItem("allToDos") || "[]")
  );
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);

  function addToDo({ todo }: { todo: ToDo_type }) {
    const newVal = [...data, { ...todo }];
    setData(newVal);
    setToggleForm(false);
    window.localStorage.setItem("allToDos", JSON.stringify(newVal));
  }

  function removeToDo({ id }: { id: number }) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    window.localStorage.setItem("allToDos", JSON.stringify(newData));
  }

  function MarkDone({ id }: { id: number }) {
    const toDo = data.findIndex((item) => item.id === id);
    data[toDo].done = !data[toDo].done;
    setData([...data]);
    window.localStorage.setItem("allToDos", JSON.stringify([...data]));
  }

  function getById({ id }: { id: number }) {
    const toDo = data.findIndex((item) => item.id === id);
    return data[toDo];
  }

  function editToDo({ todo }: { todo: ToDo_type }) {
    const toDoToEdit = data.findIndex((item) => item.id === todo.id);
    data[toDoToEdit] = todo;
    setData([...data]);
    window.localStorage.setItem("allToDos", JSON.stringify([...data]));
    setToggleEdit(false);
  }

  return {
    data,
    addToDo,
    removeToDo,
    toggleForm,
    setToggleForm,
    MarkDone,
    toggleEdit,
    setToggleEdit,
    getById,
    editToDo,
  };
};

export default useData;
