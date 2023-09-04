import FormToDo from "../../components/FormToDo/FormToDo";
import useData from "../../hooks/useData";
import ToDo from "../../components/ToDo";
import styles from "./ToDoWrapper.module.css";
import { AddIcon } from "../../assets/icons";
import useForm from "../../hooks/useForm";

const ToDoWrapper = () => {
  const {
    data,
    addToDo,
    removeToDo,
    toggleForm,
    setToggleForm,
    MarkDone,
    toggleEdit,
    setToggleEdit,
    getById,
    editToDo,
  } = useData();

  const {
    inputsVal,
    handleInputChange,
    handleSubmit,
    setInputsVal,
    handleEdit,
  } = useForm({
    addToDo,
    editToDo,
  });

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
                done={toDo.done}
                id={toDo.id}
                removeToDo={removeToDo}
                MarkDone={MarkDone}
                getById={getById}
                setToggleEdit={setToggleEdit}
                setInputsVal={setInputsVal}
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
          type="create"
          setToggleForm={setToggleForm}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          inputsVal={inputsVal}
        />
      )}
      {toggleEdit && (
        <FormToDo
          type="edit"
          setToggleForm={setToggleEdit}
          handleInputChange={handleInputChange}
          handleSubmit={handleEdit}
          inputsVal={inputsVal}
        />
      )}
    </div>
  );
};

export default ToDoWrapper;
