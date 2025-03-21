import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import projects from "../../constants/projects";
import styles from "./Projects.module.css";

function Projects() {
    return (
        <section className={styles.projects}>
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
                                    <abbr title="Site">
                                        <a href={project.link} target="_blank">
                                            <FiExternalLink />
                                        </a>
                                    </abbr>
                                    <abbr title="Código">
                                        <a href={project.code} target="_blank">
                                            <FaCode />
                                        </a>
                                    </abbr>
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
