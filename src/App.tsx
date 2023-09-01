import FormToDo from "./components/FormToDo";
import useData from "./hooks/useData";
import ToDo from "./components/ToDo";

const App = () => {
  const { data, addToDo, removeToDo, editToDo, todoToEdit } = useData();
  return (
    <div>
      <header>
        <h1>ToDo List</h1>
      </header>

      <main style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        {!!data.length &&
          data.map((toDo) => (
            <ToDo
              key={toDo.id}
              title={toDo.title}
              description={toDo.description}
              created={toDo.created}
              id={toDo.id}
              removeToDo={removeToDo}
              editToDo={editToDo}
            />
          ))}
      </main>

      <FormToDo addToDo={addToDo} todoToEdit={todoToEdit} />
      {/* <FormToDo type={"edit"} addToDo={addToDo} todoToEdit={todoToEdit} /> */}
    </div>
  );
};

export default App;
