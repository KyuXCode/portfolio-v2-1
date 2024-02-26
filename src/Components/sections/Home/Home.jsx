import portrait from "../../../assests/portrait.jpg"
import portrait2 from "../../../assests/portrait2.jpg"
import './home.scss'


function Home() {
    return (
        <div className="container" id="home">
            <div className="profile">
                <img src={portrait} alt="portrait-img" />
            </div>

            <div className="profile-text">
                <h3 className="name">
                    Hi, I&apos;m <span>Kai Cheng Yu</span>
                </h3>
                <span className="job">Software Developer</span>
                <span className="text">Passionate <br />
                    about crafting <br />
                    advanced software
                </span>

                <a href="#contact">connect with me</a>
            </div>

        </div>
    );
}

export default Home;