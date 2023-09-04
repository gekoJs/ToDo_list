import { useId, Dispatch, SetStateAction } from "react";
import { AddIcon, CloseIcon } from "../../assets/icons";
import styles from "./FormToDo.module.css";

type props = {
  setToggleForm: Dispatch<SetStateAction<boolean>>;
  type: "Create" | "Edit";
  inputsVal: any;
  handleInputChange: any;
  handleSubmit: any;
};

//----------------------------------------------------------

const FormToDo = ({
  setToggleForm,
  type,
  inputsVal,
  handleInputChange,
  handleSubmit,
}: props) => {
  const titleToDoId = useId();
  const descriptionToDoId = useId();

  return (
    <div className={styles.container}>
      <form className={styles.form_wrapper} onSubmit={handleSubmit}>
        <h3 className={styles.type}>{type} toDo</h3>
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
