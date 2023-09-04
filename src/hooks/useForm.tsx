import React, { useState } from "react";
import { type ToDo_type } from "../types";

type props = {
  addToDo: ({ todo }: { todo: ToDo_type }) => void;
  editToDo: ({ todo }: { todo: ToDo_type }) => void;
};

//------------------------------------------------------

const useForm = ({ addToDo, editToDo }: props) => {
  const [inputsVal, setInputsVal] = useState<ToDo_type>({
    title: "",
    description: "",
    created: "",
    id: 0,
    done: false,
  });

  function handleInputChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setInputsVal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();

    if (!!!inputsVal.title || !!!inputsVal.description) return;

    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    const hh = time.getHours();
    const mm = time.getMinutes();

    addToDo({
      todo: {
        ...inputsVal,
        id: Math.floor(Math.random() * 1000000),
        created: `${day}/${month}/${year} | ${hh}:${mm}`,
      },
    });

    setInputsVal({
      title: "",
      description: "",
      created: "",
      id: 0,
      done: false,
    });
  }

  function handleEdit(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    editToDo({ todo: inputsVal });
  }

  return {
    inputsVal,
    handleInputChange,
    handleSubmit,
    setInputsVal,
    handleEdit,
  };
};

export default useForm;
