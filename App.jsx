import "./App.scss"
import About from './Components/sections/About/About'
import Contact from './Components/sections/Contact/Contact'
import Home from './Components/sections/Home/Home'
import Portfolio from './Components/sections/Portfolio/Portfolio'
import Skills from './Components/sections/Skills/Skills'
import Navbar from './Components/navbar/Navbar'
import {createBrowserRouter, RouterProvider, Routes} from "react-router-dom";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail.jsx";
import MainPage from "./Components/MainPage/MainPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/projects/:id",
        element: <ProjectDetail/>
    }
])

const App = () => {
    return (
        <>
            <Navbar/>
            <RouterProvider router={router}/>
        </>
    )
}

export default App