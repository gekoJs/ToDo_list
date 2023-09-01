import { useEffect, useId, useState } from "react";
import { AddIcon } from "../assets/icons";
import "./AddToDo.css";
import { type ToDo_type } from "../types";

const FormToDo = ({
  addToDo,
  todoToEdit,
}: {
  addToDo: ({ todo }: { todo: ToDo_type }) => void;
  todoToEdit: ToDo_type | undefined;
}) => {

  const [inputsVal, setInputsVal] = useState<ToDo_type>({
    title: "",
    description: todoToEdit?.description || "",
    created: "",
    id: 0,
  });

  useEffect(() => {
    if (todoToEdit) {
      setInputsVal(todoToEdit);
    }
  }, [todoToEdit]);
  
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
    var hh = time.getHours();
    var mm = time.getMinutes();
    var ss = time.getSeconds();
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();

    addToDo({
      todo: {
        ...inputsVal,
        id: Math.floor(Math.random() * 1000000),
        created: `${day}/${month}/${year} | ${hh}:${mm}:${ss}`,
      },
    });
    setInputsVal({
      title: "",
      description: "",
      created: "",
      id: 0,
    });
  }

  const titleToDoId = useId();
  const descriptionToDoId = useId();
  return (
    <div className="container">
      <form className="form_wrapper" onSubmit={handleSubmit}>
        <div className="input_wrapper">
          <label htmlFor={titleToDoId} className="label">
            Title:
          </label>
          <input
            type="text"
            value={inputsVal.title}
            id={titleToDoId}
            name="title"
            className="input"
            onChange={handleInputChange}
            autoComplete={"off"}
          />
        </div>

        <div className="input_wrapper input_wrapper2">
          <label htmlFor={descriptionToDoId} className="label">
            Description:
          </label>
          <textarea
            name="description"
            id={descriptionToDoId}
            className="textarea"
            onChange={handleInputChange}
            value={inputsVal.description}
          ></textarea>
        </div>

        <button className="addBtn" onClick={handleSubmit}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};

export default FormToDo;
