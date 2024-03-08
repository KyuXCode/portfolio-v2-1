import {useEffect, useState} from 'react';

import {motion} from 'framer-motion';
import {bios} from '../../../Data.jsx'
import portrait from "../../../assests/portrait.jpg"
import portrait2 from "../../../assests/portrait2.jpg"
import resume from "../../../assests/KaiChengYu.pdf"

import './about.scss'


function About() {


    return (
        <div className="container" id="about">
            <motion.div className="title"
                        initial={{opacity: 0}}
                        whileInView={{y: [-50, 0], opacity: 1}}
            >

                <span>Who I AM</span>
                <h1>About Me</h1>

            </motion.div>

            <div className="about-box">
                <motion.div className="about-left"
                            initial={{x: 0}}
                            transition={{duration: 1}}
                >

                    <motion.img
                        src={portrait2}
                        whileHover={{x: -45, y: -38}}
                        transition={{duration: 0.3}}
                    />

                </motion.div>

                <motion.div className="about-right"
                            initial={{opacity: 0, x: 0}}
                            whileInView={{x: [250, 0], opacity: 1}}
                            transition={{duration: 1}}
                >

                    {bios.map(bio => (

                        <div className="bio" key={bio.id}>
                            <span className="bioKey">{bio.icon}</span>
                                <span className="bioValue"><a href={bio.links}>{bio.value}</a></span>
                        </div>

                    ))}

                    <motion.a target="_blank" href={resume}
                              onClick="return confirm('You want to download Kevin\'s resume?')"
                              whileHover={{scale: 1.1}}
                              transition={{duration: 0.3}}
                    >Resume
                    </motion.a>
                </motion.div>

            </div>
        </div>
    );
}

export default About;