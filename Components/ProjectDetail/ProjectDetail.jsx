import './projectDetail.scss'
import {useParams} from "react-router-dom";
import {projects} from "../../Data.jsx";
import {motion} from "framer-motion";
import {FaExternalLinkAlt} from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import comingSoon from "../../assests/coming.jpg";


function ProjectDetail() {
    const projectId = parseInt(useParams().id);

    const project = projects.find((item) => item.id === projectId)

    return (
        <div className="projects-container container">
            <a href="/#portfolio" id="arrow">
                <FaArrowLeft/>
            </a>
            <div className="project-header">
                <h1>{project.name}</h1>
                {project.link !== null ?
                    (<a href={project.link} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt />
                    </a>) : (<></>)
                }
            </div>

            <div className="project-detail">
                <h1>Detail</h1>
                <div className="img-container">
                    <img src={project.img ? project.img : comingSoon} alt=""/>
                </div>
                <p>{project.description}</p>
            </div>

            <div className="project-challenges">
                <h1>Challenges</h1>
                <p>{project.challenges}</p>
            </div>

            <div className="project-solution">
                <h1>What I Learned...</h1>
                <p>{project.solutions}</p>
            </div>


        </div>
    );
}

export default ProjectDetail;