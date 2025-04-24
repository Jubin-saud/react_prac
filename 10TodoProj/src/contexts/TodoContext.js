import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    }
  ],
  addTodos: (todo) => {},
  removeTodo: (id) => {},
  toggleTodo: (id) => {},
  updateTodo: (id, todo) => {},
})

export const useTodo = () => {
  return useContext(TodoContext) //custom hook to use todocontext, else we would need to individually export each paramter inside TodoContext
}

export const TodoProvider = TodoContext.Provider

