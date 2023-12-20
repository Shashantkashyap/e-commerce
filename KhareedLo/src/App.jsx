
import './App.css'

import MainComponent from './Components/Home/MainComponent'
import Navbar from './Components/header/Navbar'
import NewNav from './Components/newNavbar/NewNav'
import Footer from './Components/Footer/footer'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup_Signin/Signup'
import Signin from './Components/Signup_Signin/Signin'
import Cart from './Components/Cart/Cart'
import Buynow from './Components/buynow/Buynow'
import Photo from './Components/Photo/Photo'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <NewNav></NewNav>

      <Routes>
        <Route path='/' element={<MainComponent></MainComponent>} />
        <Route path='/login' element={<Signin></Signin>} />
        <Route path='/register' element={<Signup></Signup>} />
        <Route path='/getproductsone/:id' element={<Cart></Cart>}></Route>
        <Route path='/buynow' element={<Buynow></Buynow>}></Route>
        <Route path='/click' element={<Photo></Photo>}></Route>
      </Routes>
      
      <Footer></Footer>
    </>
  )
}

export default App
