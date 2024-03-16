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
import flocktalk from "./assests/flocktalk.png"
import remnantTrust from "./assests/remnant-trust.png"
import ceres from "./assests/ceres.png"

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
        name: "Asp.NET",
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
        description: "A movie Tinder app built with flutter that allow user to swipe to save movie and to the watchlist, favorites, or dislikes. A project for CS222, Advance Programming, at Ball State University.",
        challenges: "At the time I took this class, it was my second year learning programming, with limiting knowledge only with Java and Python. In this class, I was introduced to a lot of proper programing practices like proper git flow, abstraction, and working with an api. Using Clean Code as the main material, the course focus on software craftsmanship and learning building web/mobile app with flutter and dart at the same time.",
        solutions: "After the course, I love the app my group created and the process of creating it. It boosted my interest in software development more and more"
    },
    {
        id: 2,
        img: work2,
        link: "https://sound-search-engine.netlify.app/",
        name: "Sound Search Engine",
        category: "Digital Corps",
        description: "A spotify clone but for random sound. Built during the training at the Digital Corps",
        challenges: "First website using react, introduced to a lot of new concept like context, useState, useEffect and more.",
        solutions: "After this part of the training I felt like I strating to get a hold of how react work and ready to learn more"
    },
    {
        id: 3,
        img: work3,
        link: "https://corptube.netlify.app/",
        name: "CorpTube",
        category: "Digital Corps",
        description: "A spotify clone but for random sound. Built during the training at the Digital Corps",
        challenges: "First website using react, introduced to a lot of new concept like context, useState, useEffect and more.",
        solutions: "After this part of the training I felt like I strating to get a hold of how react work and ready to learn more"
    },

    // {
    //     id: 4,
    //     img: null,
    //     link: null,
    //     name: "Corstagram",
    //     category: "Digital Corps"
    // },
    {
        id: 6,
        img: flocktalk,
        link: "https://flocktalk.apsoprojects.org/podcasts/2",
        name: "FlockTalk",
        category: "Digital Corps",
        description: "A podcast dashboard for Ball State University faculty and student's to host and upload their podcast to Apple and Spotify.",
        challenges: "The design of the database and the security standard is the most challenging part of the project. In order to keep up university security stander and maintain its performance in a university scale, me and one other developer implemented Ball State Single-Sign-On system along with OAuth security like JWT Token and middleware to attach showing that the user has permission to to the payload.",
        solutions: "Throughout the process of building this site, I learned how to handle uploading and managing files on AWS S3 bucket. I also learned a lot from my co-worker, Drew, who taught me and how to implement all the security measure to a system. Most importantly, I learned a lot on how to communicate with other developer using proper technical terms, learning nd cooperating with others to build a system."

    },
    {
        id: 7,
        img: remnantTrust,
        link: "https://remnant-trust.apsoprojects.org",
        name: "The Remnant Trust Timeline",
        category: "Digital Corps",
        description: "A website designed by Ball State EMDD program graduate students, for a non-profit organization called Remnant Trust. They collect historical documents and literatures, make it easier for people to access it. This website will help them reached a group of audience who aren't able to physically look at their collections but they can browse through it online. ",
        challenges: "This was my first project at the Digital Corps. This site used wordpress and php to customize it. Both the tech was not include in the training so I got like 30 hours to build a wordpress site with php and deploy it.",
        solutions: "I was able to finish that before the due date. On top of that me and my co-worker was invited to present this with the EMDD team to the board of the Remnant Trust. I learned how to present explain technical terms to non technical audience."
    },

    {
        id: 8,
        img: ceres,
        link: null,
        name: "CERES Website",
        category: "Digital Corps",
        description: "A website for the Center for Energy Research/Education/Service at Ball State University. this website display the history of the people who pushed for the green initiative in the architecture program.",
        challenges: "The design were ambiguous but yet really innovated. As a developer, built the website as close as the designer imagine is the hardest yet the fascinating part. Learning GSAP library is another thing that were challenging, new concept plus having to visualize the result.",
        solutions: "This is one of my favorite project at the Digital Corps. This really highlighted one of the Corps' value, interdisciplinary learning. The whole process involved a lot of communication with design and user experience team. I learned a lot about design principle and explain technical concept to others as well."
    }
]


export const workNavs = [
    'All',
    'Digital Corps',
    'School',
    // 'Personal'
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