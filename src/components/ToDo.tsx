import { DeleteIcon, EditIcon, UnfoldIcon } from "../assets/icons";
import styles from "./ToDo.module.css";
import { useState } from "react";

type props = {
  title: string;
  description: string;
  created: string;
  removeToDo: ({ id }: { id: number }) => void;
  editToDo: ({ id }: { id: number }) => void;
  id: number;
};

//------------------------------------------------

const ToDo = ({
  title,
  description,
  created,
  id,
  removeToDo,
  editToDo,
}: props) => {
  const [unfold, setUnfold] = useState(false);

  return (
    <div
      className={styles.container}
      style={{
        alignItems: unfold ? "flex-start" : "center",
        minHeight: unfold ? "200px" : "",
      }}
    >
      <div className={styles.contentWrapper}>
        <h3>{title}</h3>
        {unfold && (
          <>
            <p>{description}</p>
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
