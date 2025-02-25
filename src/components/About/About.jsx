import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.flexContainer}>
                <img src="" alt="" />

                <div className={styles.textContainer}>
                    <h2>Olá! Me chamo Fellipe</h2>
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
        </section>
    );
}

export default About;
