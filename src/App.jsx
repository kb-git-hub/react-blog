import { useState, useEffect } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'

// Five different options to route to. 

function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Header title='React Blog'/>
      <Nav search={search} setSearch={setSearch}/>
      <Home/>
      <NewPost/>
      <PostPage/>
      <About/>
      <Missing/>
      <Footer/>
    </div>
  )
}

export default App
