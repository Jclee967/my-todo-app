import { useState } from "react";

interface Props {
  todos: string[];
}

function TodoList({ todos}: Props) {
    
  const [chosen, setChosen] = useState("");

  return todos.length ? (
    <>
      <ul className="list-group">
        <h5 className="mb-1">Todo List</h5>
        {todos.map((todo, index) => (
          <li className={chosen === todo ? "list-group-item active" : "list-group-item"} key={index} onClick={()=>setChosen(todo)} >
            {todo}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p>Todo list is empty.</p>
  );
}

export default TodoList;
