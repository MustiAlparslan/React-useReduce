import { useReducer } from "react";
import todoReducer from "./reducers/todoReducer";

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: "",
    themes: [],
    theme: ""
  });

  const onChange = (e) => {
    // setTodo(e.target.value)
    dispatch({
      type: "SET_TODO",
      value: e.target.value
    });
  };

  const addTodo = () => {
    dispatch({
      type: "ADD_TODO",
      todo: state.todo
    });
    localStorage.setItem("todos", JSON.stringify([...state.todos, state.todo]));
  };

  const changeTheme = () => {
    dispatch({
      type: "THEME",
      theme: state.theme
    });
    console.log(state.themes);
  };

  let getTodoList = localStorage.getItem("todos");
  let parsed = JSON.parse(getTodoList);
  return (
    <div>
      <input type="text" value={state.todo} onChange={onChange} />
      <button disabled={!state.todo} type="submit" onClick={addTodo}>
        Add
      </button>

      <ul>
        {parsed.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
