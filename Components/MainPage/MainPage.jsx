import Navbar from "../navbar/navbar.jsx";
import Home from "../sections/Home/Home.jsx";
import About from "../sections/About/About.jsx";
import Skills from "../sections/Skills/Skills.jsx";
import Portfolio from "../sections/Portfolio/Portfolio.jsx";
import Contact from "../sections/Contact/Contact.jsx";

function MainPage() {
    return (
        <div>
            <Home/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default MainPage;