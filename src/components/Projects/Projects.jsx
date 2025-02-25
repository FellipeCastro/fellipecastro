import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import cellphoneStore from "../../assets/projects/cellphone-store.png";
import devBurger from "../../assets/projects/dev-burger.png";
import taskManager from "../../assets/projects/task-manager.png";
import todoList from "../../assets/projects/todo-list.png";
import styles from "./Projects.module.css";

function Projects() {
    return (
        <section className={styles.projects}>
            <div className={styles.title}>
                <h2>Meus Projetos</h2>
                <hr />
            </div>

            <div className={styles.projectsContainer}>
                <div className={styles.project}>
                    <img src={devBurger} alt="Dev Burger" />

                    <div className={styles.textContainer}>
                        <h3>Dev Burger</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequuntur non consectetur eius incidunt hic
                            quidem similique modi in doloremque, temporibus
                            necessitatibus nesciunt reprehenderit, fugit ducimus
                            possimus placeat commodi aspernatur officia!
                        </p>
                        <div className={styles.technologies}>
                            <span>React js</span>
                            <span>Git</span>
                            <span>GitHub</span>
                        </div>
                        <div className={styles.links}>
                            <a href="#" target="_blank">
                                <FiExternalLink />
                            </a>
                            <a href="#" target="_blank">
                                <FaCode />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={devBurger} alt="Dev Burger" />

                    <div className={styles.textContainer}>
                        <h3>Dev Burger</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequuntur non consectetur eius incidunt hic
                            quidem similique modi in doloremque, temporibus
                            necessitatibus nesciunt reprehenderit, fugit ducimus
                            possimus placeat commodi aspernatur officia!
                        </p>
                        <div className={styles.technologies}>
                            <span>React js</span>
                            <span>Git</span>
                            <span>GitHub</span>
                        </div>
                        <div className={styles.links}>
                            <a href="#" target="_blank">
                                <FiExternalLink />
                            </a>
                            <a href="#" target="_blank">
                                <FaCode />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={devBurger} alt="Dev Burger" />

                    <div className={styles.textContainer}>
                        <h3>Dev Burger</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequuntur non consectetur eius incidunt hic
                            quidem similique modi in doloremque, temporibus
                            necessitatibus nesciunt reprehenderit, fugit ducimus
                            possimus placeat commodi aspernatur officia!
                        </p>
                        <div className={styles.technologies}>
                            <span>React js</span>
                            <span>Git</span>
                            <span>GitHub</span>
                        </div>
                        <div className={styles.links}>
                            <a href="#" target="_blank">
                                <FiExternalLink />
                            </a>
                            <a href="#" target="_blank">
                                <FaCode />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={devBurger} alt="Dev Burger" />

                    <div className={styles.textContainer}>
                        <h3>Dev Burger</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequuntur non consectetur eius incidunt hic
                            quidem similique modi in doloremque, temporibus
                            necessitatibus nesciunt reprehenderit, fugit ducimus
                            possimus placeat commodi aspernatur officia!
                        </p>
                        <div className={styles.technologies}>
                            <span>React js</span>
                            <span>Git</span>
                            <span>GitHub</span>
                        </div>
                        <div className={styles.links}>
                            <a href="#" target="_blank">
                                <FiExternalLink />
                            </a>
                            <a href="#" target="_blank">
                                <FaCode />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
