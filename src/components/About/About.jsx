import html from "../../assets/skills/html-5.png";
import css from "../../assets/skills/css-3.png";
import javascript from "../../assets/skills/js.png";
import react from "../../assets/skills/react-js.png";
import node from "../../assets/skills/node-js.png";
import mysql from "../../assets/skills/mysql.png";
import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.flexContainer}>
                <img src="" alt="" />

                <div className={styles.textContainer}>
                    <h2>Olá Mundo!</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consectetur ipsam error rerum repellat, eius
                        inventore alias consequatur eveniet. Ullam, quidem.
                        Dolorem veniam in itaque ut voluptate, ipsum fugit hic
                        expedita.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse exercitationem obcaecati eveniet possimus fugiat ratione mollitia minima id rem neque et delectus autem optio quod beatae aliquid nostrum, sint amet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias recusandae illo accusantium! Deleniti quisquam
                        culpa recusandae accusamus qui itaque quis harum
                        voluptate officiis maxime omnis, dolore voluptas in
                        optio fuga?
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
                    </div>
                </fieldset>
            </div>
        </section>
    );
}

export default About;
