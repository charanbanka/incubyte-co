import React from 'react'
import Home from './components/images/Home'
import Navbar from './components/images/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Container } from '@material-ui/core'
import Word from './components/images/Word'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container style={{marginTop:"5rem"}}>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/word" element={<Word/>} exact />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App