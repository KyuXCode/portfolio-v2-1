import {useEffect, useState} from 'react';
import {workNavs} from '../../../Data.jsx';
import './portfolio.scss'
import {projects} from '../../../Data.jsx';
import {motion, AnimatePresence} from 'framer-motion';
import comingSoon from '../../../assests/coming.jpg'
import {Link} from "react-router-dom";

function Portfolio() {
    const [tab, setTab] = useState({name: 'all'});
    const [works, setWorks] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (tab.name === "all") {
            setWorks(projects)
        } else {
            const newWork = projects.filter(project => {
                return project.category.toLowerCase() === tab.name.toLowerCase();
            })
            setWorks(newWork)
        }
    }, [tab])


    const activeTab = (e, index) => {
        setTab({name: e.target.textContent.toLowerCase()});
        setActive(index)
    }

    return (
        <div className="container" id="portfolio">
            <motion.div className="title"
                        initial={{opacity: 0}}
                        whileInView={{y: [-50, 0], opacity: 1}}
            >
                <h1>My Work</h1>
                <span>Awesome Projects</span>
            </motion.div>

            <motion.div className="work-tabs"
                        initial={{opacity: 0}}
                        whileInView={{y: [-50, 0], opacity: 1}}
            >
                {workNavs.map((workType, index) => (
                        <button className={`${active === index ? "active" : ""}`}
                                key={index}
                                onClick={(e) => activeTab(e, index)}
                        >
                            {workType}
                        </button>
                    )
                )}
            </motion.div>

            <AnimatePresence>
                <motion.div className='projects-grid'>

                    {works && works.map((work) => (
                            <Link key={work.id} to={`/projects/${work.id}`}>
                                <motion.div className="work-box"
                                            layout
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.3
                                                }
                                            }}
                                            key={work.id}
                                >
                                    <motion.a href={work.link} target='_blank'>
                                        < motion.img src={work.img ? work.img : comingSoon} alt=""/>
                                    </motion.a>

                                    <motion.h2>
                                        {work.name}
                                    </motion.h2>

                                </motion.div>

                            </Link>
                        )
                    )}
                </motion.div>
            </AnimatePresence>


        </div>
    );
}

export default Portfolio;