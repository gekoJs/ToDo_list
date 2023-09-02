import FormToDo from "../../components/FormToDo/FormToDo";
import useData from "../../hooks/useData";
import ToDo from "../../components/ToDo";
import styles from "./ToDoWrapper.module.css";
import { AddIcon } from "../../assets/icons";

const ToDoWrapper = () => {
  const {
    data,
    addToDo,
    removeToDo,
    editToDo,
    todoToEdit,
    toggleForm,
    setToggleForm,
    MarkDone,
  } = useData();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>ToDo List</h1>
      </header>

      {!!data.length ? (
        <>
          <button
            className={`${styles.addBtn} ${styles.addBtn_main}`}
            type="button"
            onClick={() => setToggleForm(true)}
          >
            <AddIcon />
          </button>
          <main
            style={{ display: "flex", flexDirection: "column", gap: "1em" }}
          >
            {data.map((toDo) => (
              <ToDo
                key={toDo.id}
                title={toDo.title}
                description={toDo.description}
                created={toDo.created}
                id={toDo.id}
                removeToDo={removeToDo}
                editToDo={editToDo}
                MarkDone={MarkDone}
                done={toDo.done}
              />
            ))}
          </main>
        </>
      ) : (
        !!!toggleForm && (
          <div className={styles.notData}>
            <h3>Create your first ToDo</h3>

            <button
              className={styles.addBtn}
              type="button"
              onClick={() => setToggleForm(true)}
            >
              <AddIcon />
            </button>
          </div>
        )
      )}

      {toggleForm && (
        <FormToDo
          addToDo={addToDo}
          todoToEdit={todoToEdit}
          setToggleForm={setToggleForm}
        />
      )}
    </div>
  );
};

export default ToDoWrapper;
