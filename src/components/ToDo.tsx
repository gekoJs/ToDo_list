import { DeleteIcon, EditIcon } from "../assets/icons";
import styles from "./ToDo.module.css";
type props = {
  title: string;
  description: string;
  created: string;
  removeToDo: ({ id }: { id: number }) => void;
  editToDo: ({ id }: { id: number }) => void;
  id: number;
};

const ToDo = ({
  title,
  description,
  created,
  id,
  removeToDo,
  editToDo,
}: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h3>Title: {title}</h3>
        <p>Description: {description}</p>
        <span>Created: {created}</span>
      </div>
      <div className={styles.wrapperBtns}>
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
