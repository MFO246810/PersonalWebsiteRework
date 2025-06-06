import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project_Exp from './pages/Project&Experience'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/> 
      <main className="mt-17 px-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project_Exp/>}/>
        </Routes>
      </main>
        </BrowserRouter>
      
      
    </>
  )
}

export default App
