import html from "../../assets/skills/html-5.png";
import css from "../../assets/skills/css-3.png";
import javascript from "../../assets/skills/js.png";
import react from "../../assets/skills/react-js.png";
import node from "../../assets/skills/node-js.png";
import mysql from "../../assets/skills/mysql.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";
import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.flexContainer}>
                <img src="" alt="" />

                <div className={styles.textContainer}>
                    <h2>Olá Mundo!</h2>
                    <p>
                        Me chamo <strong>Fellipe da Silva Castro</strong>, tenho 17 anos e estou
                        cursando o curso técnico em informática para internet na
                        <strong>ETEC</strong>. Há dois anos, entrei no mundo da programação e,
                        atualmente, atuo como desenvolvedor <strong>fullstack</strong>, com foco
                        no front-end usando <strong>React.js</strong> e no back-end com <strong>Node.js</strong> e
                        <strong>MySQL</strong>. Além dos estudos técnicos, estou aprimorando meu
                        inglês no <strong>CNA</strong>, alcançando um nível intermediário.
                    </p>
                    <p>
                        Sou apaixonado pela resolução de problemas e pela
                        colaboração com outros entusiastas de tecnologia.
                        Acredito que a inovação surge da troca de ideias e da
                        busca constante por novos conhecimentos. Estou
                        entusiasmado em continuar explorando o mundo da
                        programação e contribuir com soluções criativas e
                        impactantes.
                    </p>
                </div>
            </div>
            <div className={styles.skills}>
                <fieldset>
                    <legend>Habilidades</legend>
                    <div className={styles.skillsList}>
                        <div className={styles.skill}>
                            <img src={html} alt="HTML 5" />
                            <span>HTML 5</span>
                        </div>
                        <div className={styles.skill}>
                            <img src={css} alt="CSS 3" />
                            <span>CSS 3</span>
                        </div>
                        <div className={styles.skill}>
                            <img src={javascript} alt="Javascript" />
                            <span>Javascript</span>
                        </div>
                        <div className={styles.skill}>
                            <img src={react} alt="React js" />
                            <span>React js</span>
                        </div>
                        <div className={styles.skill}>
                            <img src={node} alt="Node js" />
                            <span>Node js</span>
                        </div>
                        <div className={styles.skill}>
                            <img src={mysql} alt="MySQL" />
                            <span>MySQL</span>
                        </div>
                        <div className={styles.skill}>
                            <img src={git} alt="Git" />
                            <span>Git</span>
                        </div>
                        <div className={styles.skill}>
                            <img src={github} alt="GitHub" />
                            <span>GitHub</span>
                        </div>
                    </div>
                </fieldset>
            </div>
        </section>
    );
}

export default About;
