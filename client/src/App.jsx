import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//pages
import Home from '../src/pages/Home'
import Nintendo from '../src/pages/Nintendo'
import Sony from '../src/pages/Sony'
import Microsoft from '../src/pages/Microsoft'
//login
import Write from './pages/Write'
import Single from './pages/Single'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='nintendo' element={<Nintendo/>}/>
          <Route exact path='sony' element={<Sony/>}/>
          <Route exact path='microsoft' element={<Microsoft/>}/>

          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/post/:id' element={<Single/>} />
          <Route exact path='/write' element={<Write/>}/>
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App
