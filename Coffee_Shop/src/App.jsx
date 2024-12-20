import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './pages/Layout'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
