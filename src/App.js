import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { LoginForm } from "./components/Login.js";
import { RegisterForm } from "./components/Register.js";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer.js";
import { Navbar } from "./components/Navigation.js"
import "./App.css";

function App() {

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
