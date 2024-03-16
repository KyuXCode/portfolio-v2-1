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
import {
    SiTypescript,
    SiAdonisjs,
    SiKotlin,
    SiFlutter,
    SiDart,
    SiJavascript,
    SiCss3,
    SiMysql,
    SiDotnet

} from "react-icons/si";
import portrait from "./assests/portrait.jpg"
import portrait2 from "./assests/portrait2.jpg"
import MongoDB from "./assests/MongoDB_Logomark_SlateBlue.svg?react";
import work from "./assests/work.jpg"
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
        value: "Kai Cheng (Kevin) Yu"
    },
    {
        id: 2,
        icon: <FaPaperPlane/>,
        value: "kai38547@gmail.com",
        links: "mailto:kai38547@gmail.com"
    },
    {
        id: 3,
        icon: <FaPhoneAlt/>,
        value: "317-565-3252",
        links: "tel:317-565-3252"
    }
    // {
    //     id: 4,
    //     icon: <BsFileEarmarkPdfFill />,
    //     key: "Resume",
    //     value: "https://kyresume.netlify.app"
    // }
]

// eslint-disable-next-line react/jsx-key
export const icons = [
    {
        name: "HTML",
        component: <FaHtml5/>
    }, {
        name: "CSS",
        component: <SiCss3/>
    }, {
        name: "SASS",
        component: <FaSass/>
    }, {
        name: "JavaScript",
        component: <SiJavascript/>
    },
    {
        name: "SASS",
        component: <FaSass/>
    }, {
        name: "React.js",
        component: <FaReact/>
    }, {
        name: "Adonis.js",
        component: <SiAdonisjs/>
    }, {
        name: "TypeScript",
        component: <SiTypescript/>
    }, {
        name: "Php",
        component: <FaPhp/>
    }, {
        name: "Flutter",
        component: <SiFlutter/>
    }, {
        name: "Dart",
        component: <SiDart/>
    }, {
        name: "Node.js",
        component: <FaNodeJs/>
    }, {
        name: "MySql",
        component: <SiMysql/>
    }, {
        name: "MongoDb",
        component: <MongoDB/>
    }, {
        name: "Kotlin",
        component: <SiKotlin/>
    }, {
        name: "Java",
        component: <FaJava/>
    }, {
        name: "Python",
        component: <FaPython/>
    }, {
        name: "dotNET",
        component: <SiDotnet/>
    }
];

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
        category: "School",
        description: "here's the detail",
        challenges: "",
        solutions: ""
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
        infoText: "kai38547@gmail.com",
        links: "mailto:kai38547@gmail.com"
    },
    {
        id: 3,
        icon: <FaPhoneAlt/>,
        infoText: "317-565-3252",
        links: "tel:317-565-3252"
    }
]