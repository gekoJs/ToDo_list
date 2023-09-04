import {
  CheckDoneIcon,
  CheckNotDoneIcon,
  DeleteIcon,
  EditIcon,
  UnfoldIcon,
} from "../assets/icons";
import { type ToDo_type } from "../types";
import styles from "./ToDo.module.css";
import { Dispatch, SetStateAction, useState } from "react";

type props = {
  title: string;
  description: string;
  created: string;
  removeToDo: ({ id }: { id: number }) => void;
  MarkDone: ({ id }: { id: number }) => void;
  id: number;
  done: boolean;
  setToggleEdit: Dispatch<SetStateAction<boolean>>;
  setInputsVal: Dispatch<SetStateAction<ToDo_type>>;
  getById: ({ id }: { id: number }) => ToDo_type;
};

//------------------------------------------------

const ToDo = ({
  title,
  description,
  created,
  id,
  removeToDo,
  MarkDone,
  done,
  getById,
  setToggleEdit,
  setInputsVal,
}: props) => {
  const [unfold, setUnfold] = useState(false);

  function handleEdit() {
    setToggleEdit(true);
    const toDo = getById({ id });
    setInputsVal(toDo);
  }

  return (
    <div
      className={styles.container}
      style={{
        minHeight: unfold ? "200px" : "0px",
      }}
    >
      <div className={styles.contentWrapper}>
        <h3 className={done ? styles.done : ""}>{title}</h3>
        {unfold && (
          <>
            <p className={done ? styles.done : ""}>{description}</p>
            <span>
              <strong> {created}</strong>
            </span>
          </>
        )}
      </div>
      <div className={styles.wrapperBtns}>
        <button
          className={styles.btn}
          onClick={() => setUnfold((prev) => !prev)}
          style={{ transform: unfold ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <UnfoldIcon />
        </button>

        <button className={styles.btn} onClick={() => MarkDone({ id })}>
          {done ? <CheckDoneIcon /> : <CheckNotDoneIcon />}
        </button>
        <button onClick={handleEdit} className={styles.btn}>
          <EditIcon />
        </button>
        <button onClick={() => removeToDo({ id })} className={styles.btn}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
