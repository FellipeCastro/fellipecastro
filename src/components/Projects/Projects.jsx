import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import projects from "../../projects";
import styles from "./Projects.module.css";

function Projects() {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.title}>
                <h2>Meus Projetos</h2>
                <hr />
            </div>

            <div className={styles.projectsContainer}>
                {projects.map((project, index) => {
                    return (
                        <div className={styles.project} key={index}>
                            <img src={project.src} alt={project.name} />

                            <div className={styles.textContainer}>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className={styles.technologies}>
                                    {project.technologies.map(
                                        (technologie, index) => {
                                            return (
                                                <span key={index}>
                                                    {technologie}
                                                </span>
                                            );
                                        }
                                    )}
                                </div>
                                <div className={styles.links}>
                                    <a href={project.link} target="_blank">
                                        <FiExternalLink />
                                    </a>
                                    <a href={project.code} target="_blank">
                                        <FaCode />
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;
