import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "./Home.module.css";

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.textContainer}>
                <span>Olá, me chamo</span>
                <h1>Fellipe Castro</h1>
                <div className={styles.flexContainer}>
                    <span>Desenvolvedor Fullstack</span>

                    <div className={styles.links}>
                        <a
                            href="https://github.com/FellipeCastro"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fellipe-castro-ab764a2a7/"
                            target="_blank"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <a href="#portfolio" className={styles.btn}>
                Sobre mim
            </a>
        </section>
    );
}

export default Home;
