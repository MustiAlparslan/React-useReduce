function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case "THEME":
      return {
        ...state,
        theme: "light"
      };
    default:
      throw new Error();
  }
}
export default reducer;
