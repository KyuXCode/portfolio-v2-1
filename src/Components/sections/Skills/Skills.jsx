import { useState } from 'react';
import { icons } from '../../../Data.jsx';
import { motion } from 'framer-motion'
import { experiences } from '../../../Data.jsx';
import './skills.scss'

function Skills() {

    const [active, setActive] = useState(1);

    const slide = {
        left: {
            x: [-250, 0],
            opacity: 1,
            transition: {
                duration: .5
            }
        },
        right: {
            x: [250, 0], 
            opacity: 1 ,
            transition: { duration: .5}
        }
    }

    return (
        <div className="container" id="skills">
            <motion.div className="title"
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <span>My Experience</span>
                <h1>Skills & Experience</h1>
            </motion.div>

            <motion.div className="select"
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 1 }}

            >
                <button className={active === 1 ? 'active' : ''}
                    onClick={() => setActive(1)}
                >
                    Skills
                </button>

                <button className={active === 2 ? 'active' : ''}
                    onClick={() => setActive(2)}
                >
                    Experiences
                </button>
            </motion.div>

            <motion.div className="skills"
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
            >
                {active === 1 && icons.map((icon, index) => {
                    return (
                        <motion.div className="tools" key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                        >
                            {icon}
                        </motion.div>
                    )
                })}
            </motion.div>

            <motion.div className="experiences"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                {active === 2 && experiences.map(experience => {
                    return (
                        <motion.div className="experience" key={experience.id}
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{y: [0, 0]}}
                            variants={slide}
                            animate={(experience.id === 0 || experience.id %2 === 0) ? 'right' : 'left'}
                        >
                            <span>{experience.year}</span>
                            <div className="position">
                                <h3>{experience.position}</h3>
                                <p>{experience.company}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div >
    );
}

export default Skills;