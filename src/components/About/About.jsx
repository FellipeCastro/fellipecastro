import fellipecastro from "../../assets/fellipecastro.jpg"
import skills from "../../constants/skills.js";
import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.flexContainer}>
                <img src={fellipecastro} alt="Fellipe Castro" />

                <div className={styles.textContainer}>
                    <h2>Olá Mundo!</h2>
                    <p>
                        Me chamo <strong>Fellipe da Silva Castro</strong>, tenho
                        17 anos e estou cursando o curso técnico em informática
                        para internet na <strong>ETEC</strong>. Há dois anos, entrei no mundo da <strong>fullstack</strong>, com foco no front-end usando <strong>React.js</strong> e no back-end com <strong>Node.js</strong> e <strong>MySQL</strong>. Além
                        dos estudos técnicos, estou aprimorando meu inglês no <strong>CNA</strong>, alcançando um nível intermediário.
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
                        {skills.map((skill, index) => {
                            return (
                                <div className={styles.skill} key={index}>
                                    <img src={skill.src} alt={skill.name} />
                                    <span>{skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </fieldset>
            </div>
        </section>
    );
}

export default About;
