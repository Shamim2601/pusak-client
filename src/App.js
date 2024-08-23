import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from "./components/Partials/Header";
import Footer from "./components/Partials/Footer";
import InputTodo from "./components/Events/InputTodo";
import ListTodos from "./components/Events/ListTodos";
import AddMemberForm from "./components/Members/AddMemberForm";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/events" 
            element={
              <div>
                <InputTodo />
                <ListTodos />
              </div>
            } 
          />
          <Route 
            path="/add-member" 
            element={<AddMemberForm />} 
          />
          <Route 
            path="/admin-login" 
            element={<AdminLogin />} 
          />
          <Route 
            path="/admin-dashboard" 
            element={<AdminDashboard />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
