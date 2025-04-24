// Importing React and necessary hooks from React-Redux
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Importing actions from the todoSlice to handle updates and deletions
import { removeTodo, updateTodo } from "../features/todoSlice";

function Todos() {
  // Accessing the todos state from the Redux store
  const todos = useSelector((state) => state.todos);
  // Getting the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Function to handle updating a todo item
  const handleUpdate = (id, currentText) => {
    // Prompt the user to enter a new text for the todo
    const newText = prompt("Edit your todo:", currentText);
    // If the user provides valid input, dispatch the updateTodo action
    if (newText && newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText.trim() }));
    }
  };

  return (
    <>
      {/* Rendering the list of todos */}
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            // Each todo item is rendered as a list item
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id} // Using the unique ID of the todo as the key
          >
            {/* Displaying the text of the todo */}
            <div className="text-white">{todo.text}</div>
            <div className="flex space-x-2">
              {/* Button to edit the todo */}
              <button
                onClick={() => handleUpdate(todo.id, todo.text)} // Calls handleUpdate with the todo's ID and text
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                📝
              </button>
              {/* Button to delete the todo */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))} // Dispatches the removeTodo action with the todo's ID
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                ⚔️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
