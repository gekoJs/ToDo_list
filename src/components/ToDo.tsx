import {
  CheckDoneIcon,
  CheckNotDoneIcon,
  DeleteIcon,
  EditIcon,
  UnfoldIcon,
} from "../assets/icons";
import styles from "./ToDo.module.css";
import { useState } from "react";

type props = {
  title: string;
  description: string;
  created: string;
  removeToDo: ({ id }: { id: number }) => void;
  editToDo: ({ id }: { id: number }) => void;
  MarkDone: ({ id }: { id: number }) => void;
  id: number;
  done: boolean;
};

//------------------------------------------------

const ToDo = ({
  title,
  description,
  created,
  id,
  removeToDo,
  editToDo,
  MarkDone,
  done,
}: props) => {
  const [unfold, setUnfold] = useState(false);

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
            <span>{created}</span>
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
        <button onClick={() => editToDo({ id })} className={styles.btn}>
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
