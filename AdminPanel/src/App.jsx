import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import project from './pages/Project&Experience'

import './App.css'
;
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Project&Experience" element={<project />} />
            <Route path="/servers" element={<servers />} />
            <Route path="/websites" element={<websites />} />
            <Route path="/Bots" element={<bots />} />
          </Routes>
        </BrowserRouter>
      
      
    </>
  )
}

export default App
