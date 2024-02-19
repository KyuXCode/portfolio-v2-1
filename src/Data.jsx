import {
    FaHtml5,
    FaReact,
    FaSass,
    FaFigma,
    FaPhoneAlt,
    FaUser,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaGithub,
    FaLinkedin,
    FaJava,
    FaPython,
    FaPhp,
    FaNodeJs
} from "react-icons/fa";
import {SiTypescript, SiAdonisjs, SiKotlin, SiFlutter, SiDart, SiJavascript, SiCss3, SiMysql} from "react-icons/si";
import portrait from "./assests/portrait.jpg"
import portrait2 from "./assests/portrait2.jpg"
import comingSoon from "./assests/coming.jpg"
import MongoDB from "./assests/MongoDB_Logomark_SlateBlue.svg?react";
import work from "./assests/work.png"
import demo from "./assests/work1.gif"
import work2 from "./assests/work2.jpg"
import work3 from "./assests/work3.jpg"
import work6 from "./assests/work6.jpg"

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
    {
        icon: <FaLinkedin/>,
        link: "https://www.linkedin.com/in/kai38547"
    },
    {
        icon: <FaGithub/>,
        link: "https://github.com/KyuXCode"
    }
]

export const bios = [
    {
        id: 1,
        icon: <FaUser/>,
        key: "Name",
        value: "Kevin Yu"
    },
    {
        id: 2,
        icon: <FaPhoneAlt/>,
        key: "Phone",
        value: "317-565-3252"
    },
    {
        id: 3,
        icon: <FaPaperPlane/>,
        key: "Email",
        value: "kai38547@gmail.com"
    },
    // {
    //     id: 4,
    //     icon: <BsFileEarmarkPdfFill />,
    //     key: "Resume",
    //     value: "https://kyresume.netlify.app"
    // }
]

// eslint-disable-next-line react/jsx-key
export const icons = [<FaHtml5/>, <SiCss3/>, <FaSass/>, <SiJavascript/>, <FaPhp/>, <SiFlutter/>, <SiDart/>,
    // eslint-disable-next-line react/jsx-key
    <FaReact/>, <SiAdonisjs/>, <SiTypescript/>, <FaNodeJs/>, <SiMysql/>, <MongoDB/>, <SiKotlin/>, <FaJava/>,
    <FaPython/>, <FaFigma/>]

export const experiences = [
    {
        id: 1,
        year: "2022 - Current",
        position: "Development Specialist",
        company: "Digital Corps Digital Agency (Ball State University)"
    },
    {
        id: 2,
        year: "2021 - Current",
        position: "Certified Apple Sales Adviser",
        company: "BestBuy"
    }
]
export const projects = [
    {
        id: 1,
        img: work,
        link: demo,
        name: "SilverScreen",
        category: "School"
    },
    {
        id: 2,
        img: work2,
        link: "https://sound-search-engine.netlify.app/",
        name: "Sound Search Engine",
        category: "Digital Corps"
    },
    {
        id: 3,
        img: work3,
        link: "https://corptube.netlify.app/",
        name: "CorpTube",
        category: "Digital Corps"
    },

    {
        id: 4,
        img: null,
        link: null,
        name: "Corstagram",
        category: "Digital Corps"
    },
    {
        id: 5,
        img: null,
        link: null,
        name: "ReelZen",
        category: "Personal"
    },
    {
        id: 6,
        img: work6,
        link: "https://typing-game-practice.netlify.app/",
        name: "Typing Game",
        category: "Digital Corps"
    },
    {
        id: 7,
        img: null,
        link: "https://remnant-trust.apsoprojects.org",
        name: "The Remnant Trust Timeline",
        category: "Digital Corps"
    },

    {
        id: 8,
        img: null,
        link: null,
        name: "CERES Website",
        category: "Digital Corps"
    }
]


export const workNavs = [
    'All',
    'Digital Corps',
    'School',
    'Personal'
]

export const contacts = [
    {
        id: 1,
        icon: <FaMapMarkerAlt/>,
        infoText: "Zionsville, Indiana"
    },
    {
        id: 2,
        icon: <FaPaperPlane/>,
        infoText: "kai38547@gmail.com"
    },
    {
        id: 3,
        icon: <FaPhoneAlt/>,
        infoText: "317-565-3252"
    }
]