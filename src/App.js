import React from "react";
import "./App.css";
import InputTodo from "./components/Events/InputTodo";
import ListTodos from "./components/Events/ListTodos";


function App() {
  return (
    <div className="container">
      <InputTodo />
      <ListTodos />
    </div>
  );
};

export default App;
