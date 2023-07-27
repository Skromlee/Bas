import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import CreateStore from './CreateStore';
import Stores from './Stores';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Create a New Store</Link>
          </li>
          <li>
            <Link to="/stores">All Stores</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CreateStore />} />
        <Route path="/stores" element={<Stores />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
