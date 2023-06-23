
import "./App.css";
import TodoList from "./components/TodoList";

function App() {

  const todos = ["Buy groceries", "Clean the house", "Walk the dog"];
  // const todos = [];
  return (
    <>
      <TodoList todos={todos}/>
    </>
  );
}

export default App;
