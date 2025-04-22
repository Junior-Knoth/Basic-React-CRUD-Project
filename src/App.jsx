import React, { useState, useEffect } from "react";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Componentes
import Header from "./components/Header/index.JSX";
import Create from "./pages/Create";
import ListDisplay from "./pages/ListDisplay";

function App() {
  // STYLES
  const titleSize = '50px'
  const mainColor = "#d6c1ff"

  //STATES
  const [form, setForm] = useState({
    id: '',
    title: '',
    desc: ''
  })
  const [formList, setFormList] = useState([])

  useEffect(() => {
    console.log(formList)
  }, [formList])
  
  return (
    <>
    <BrowserRouter>
      <div className="app-layout">
        <Header />

        <Routes>
          <Route path="/create" element={<Create form={form} setForm={setForm} titleSize={titleSize} mainColor={mainColor} setFormList={setFormList} formList={formList}/>}></Route>
          <Route path="/list" element={<ListDisplay formList={formList} mainColor={mainColor} titleSize={titleSize}/>}></Route>
        </Routes> 
      </div>
    </BrowserRouter>
    </>
  )
}

export default App