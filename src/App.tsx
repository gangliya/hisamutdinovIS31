import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Car, Banknote, GiftIcon, ListTodo, UserCircle } from 'lucide-react';
import Login from './pages/Login';
import Register from './pages/Register';
import TodoList from './pages/TodoList';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-800">
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center text-white font-bold text-xl">
                  <GiftIcon className="w-8 h-8 mr-2" />
                  SberTodo
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link to="/login" className="text-white hover:text-red-200 px-3 py-2 rounded-md text-sm font-medium">
                  <UserCircle className="w-5 h-5" />
                </Link>
                <Link to="/todos" className="text-white hover:text-red-200 px-3 py-2 rounded-md text-sm font-medium">
                  <ListTodo className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;