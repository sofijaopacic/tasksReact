import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TasksPage from './components/TasksPage';
import CreateTaskPage from './components/CreateTaskPage';
import Navbar from './components/Navbar';
axios.defaults.baseURL = 'http://localhost:8000'
function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return (
      <LoginPage
        setUser={setUser}
      />
    )
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/new' element={(<CreateTaskPage />)} />
        <Route path='/' element={(<TasksPage />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
