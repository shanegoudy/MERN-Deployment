import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import New from './views/New';
import Details from './views/Details';
import Edit from './views/Edit';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<New/>} path="/pets/new"/>
          <Route element={<Details/>} path="/pets/:id"/>
          <Route element={<Edit/>} path="/pets/:id/edit"/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
