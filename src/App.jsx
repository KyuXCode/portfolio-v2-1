import "./App.scss"
import About from './Components/sections/About/About'
import Contact from './Components/sections/Contact/Contact'
import Footer from './Components/sections/Footer/Footer'
import Home from './Components/sections/Home/Home'
import Portfolio from './Components/sections/Portfolio/Portfolio'
import Skills from './Components/sections/Skills/Skills'
import Navbar from './Components/navbar/Navbar'
import {Router, Route, Routes} from 'react-router-dom'


const App = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App