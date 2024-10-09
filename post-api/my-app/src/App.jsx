import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/headerComp/header'
import HomePage from './pages/homePage/homePage'
import PostPage from './pages/postPage/postPage'
import deletePage from './pages/deletePage/deletePage'

function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/postPage' element={<PostPage />} />
          <Route path='/deletePage' element={<deletePage />} />
      </Routes>
    </div>
  )
}

export default App
