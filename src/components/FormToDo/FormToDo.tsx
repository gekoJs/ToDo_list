import { useEffect, useId, useState, Dispatch, SetStateAction } from "react";
import { AddIcon, CloseIcon } from "../../assets/icons";
import { type ToDo_type } from "../../types";
import styles from "./FormToDo.module.css";

type props = {
  addToDo: ({ todo }: { todo: ToDo_type }) => void;
  todoToEdit: ToDo_type | undefined;
  setToggleForm: Dispatch<SetStateAction<boolean>>;
};

//----------------------------------------------------------

const FormToDo = ({ addToDo, todoToEdit, setToggleForm }: props) => {
  const [inputsVal, setInputsVal] = useState<ToDo_type>({
    title: "",
    description: todoToEdit?.description || "",
    created: "",
    id: 0,
    done: false,
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
      done: false,
    });
  }

  const titleToDoId = useId();
  const descriptionToDoId = useId();

  return (
    <div className={styles.container}>
      <form className={styles.form_wrapper} onSubmit={handleSubmit}>
        <button
          className={styles.closeBtn}
          onClick={() => setToggleForm(false)}
        >
          <CloseIcon />
        </button>
        <div className={styles.input_wrapper}>
          <label htmlFor={titleToDoId} className={styles.label}>
            Title:
          </label>
          <input
            type="text"
            value={inputsVal.title}
            id={titleToDoId}
            name="title"
            className={styles.input}
            onChange={handleInputChange}
            autoComplete={"off"}
          />
        </div>

        <div className={`${styles.input_wrapper} ${styles.input_wrapper2}`}>
          <label htmlFor={descriptionToDoId} className={styles.label}>
            Description:
          </label>
          <textarea
            name="description"
            id={descriptionToDoId}
            className={styles.textarea}
            onChange={handleInputChange}
            value={inputsVal.description}
          ></textarea>
        </div>

        <button className={styles.addBtn} onClick={handleSubmit}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};

export default FormToDo;
