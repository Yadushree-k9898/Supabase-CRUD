import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Supabase CRUD</h1>
          <div className="flex space-x-6">
            <Link
              className="text-white text-lg hover:text-blue-300 transition duration-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white text-lg hover:text-blue-300 transition duration-200"
              to="/create"
            >
              Add
            </Link>
            <Link
            className="text-white text-lg hover:text-blue-300 transition duration-200"
            to="/:id"
            >
              Update
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
