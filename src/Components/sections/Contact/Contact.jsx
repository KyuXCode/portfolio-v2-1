import { useEffect, useState } from 'react';
import './contact.scss'
import { contacts } from '../../../Data.jsx';
import { socialIcons } from '../../../Data.jsx';
import { motion } from 'framer-motion';


function Contact() {

    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://formsubmit.co/ajax/kai38547@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
        })
            .then(response => response.json())
            .then(setIsSuccess(true))
            .catch(error => setIsSuccess(false))
    }

    return (
        <div className="container" id="contact">
            <motion.div className="title"
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
            >
                <span>get in touch</span>
                <h1>Contact Me</h1>
            </motion.div>

            <form className={`contact-form ${isSuccess ? 'inactive' : 'active'}`} onSubmit={handleSubmit}>

                <motion.h1 className={`title ${isSuccess ? 'active' : 'inactive'}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}
                >
                    Thank you!
                </motion.h1>

                <motion.div className={`contact-left-box ${isSuccess ? 'inactive' : 'active'}`}
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >

                    <h3>Just Say Hi</h3>
                    <p className='contact-text'>Fill out the form and I'll get back to you soon!</p>

                    {contacts.map(contact => {
                        return (
                            <div className='contact-left' key={contact.id}>
                                <div className="icon">
                                    {contact.icon}
                                </div>
                                <p>{contact.infoText}</p>
                            </div>
                        )
                    })}

                    <div className="social-icons">
                        {socialIcons.map((socialIcon, index) => {
                            return (
                                <div key={index}>
                                    <a target="_blank" href={socialIcon.link} rel="noreferrer">{socialIcon.icon}</a>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

                <motion.div className={`contact-right ${isSuccess ? 'inactive' : 'active'}`}
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h3>Get In Touch</h3>

                    <div className="row">
                        <input type="text" name='firstName'
                            placeholder='First Name' required/>
                        <input type="text" name='lastName'
                            placeholder='Last name' required/>
                    </div>

                    <div className="row">
                        <input type="tel" placeholder='Phone' name='phone' size="26" minLength="10" maxLength="11"/>
                        <input type="email" placeholder='Email' name='email' pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required/>
                    </div>

                    <div className="row">
                        <textarea placeholder='Message' name='message'></textarea>
                    </div>

                    <motion.button className="btn" type='submit'
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Send
                    </motion.button>
                </motion.div>
            </form>
        </div >
    )
}


export default Contact;