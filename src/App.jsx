import {Route, Routes} from 'react-router-dom'
import { DataProvider } from './context/DataContext'

import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Layout from './Layout'
import EditPost from './EditPost'

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='post'>
            <Route index element={<NewPost/>}/>
            <Route path=':id' element={<PostPage />}/>
          </Route>
          
          <Route path='edit'>
            <Route path=':id'>
              <Route index element={<EditPost/>}/>
            </Route>
          </Route>

          <Route path='about' element={<About/>}/>
          <Route path='*' element={<Missing/>}/>
        </Route>
      </Routes>
    </DataProvider>
  )
}

export default App
