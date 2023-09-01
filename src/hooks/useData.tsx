import { type ToDo_type } from "../types";
import { useState } from "react";

const useData = () => {
  const [data, setData] = useState<ToDo_type[]>(
    JSON.parse(window.localStorage.getItem("allToDos") || "[]")
  );
  const [todoToEdit, setTodoToEdit] = useState<ToDo_type>();

  function addToDo({ todo }: { todo: ToDo_type }) {
    const newVal = [...data, { ...todo }];
    setData(newVal);
    window.localStorage.setItem("allToDos", JSON.stringify(newVal));
  }
  function removeToDo({ id }: { id: number }) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    window.localStorage.setItem("allToDos", JSON.stringify(newData));
  }

  function editToDo({ id }: { id: number }) {
    const toDo = data.findIndex((item) => item.id === id);
    setTodoToEdit(data[toDo]);
  }

  return { data, addToDo, removeToDo, editToDo, todoToEdit };
};

export default useData;
