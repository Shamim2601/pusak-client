import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import config from "../config";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos
  const getTodos = async () => {
    try {
      const response = await fetch(`${config.apiBaseUrl}/todos`);
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // Delete todo function
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`${config.apiBaseUrl}/todos/${id}`, {
        method: "DELETE"
      });

      console.log(deleteTodo.status);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // Update todo function
  const updateTodos = () => {
    getTodos(); // Re-fetch todos after an update
  };

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} onUpdate={updateTodos} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
