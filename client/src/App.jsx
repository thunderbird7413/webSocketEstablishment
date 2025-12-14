import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import NewRoute from './newRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webSocketCheck" element={<NewRoute />} />
      </Routes>
    </>
  )
}

export default App
