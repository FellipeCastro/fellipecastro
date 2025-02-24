import styles from "./Home.module.css";

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.textContainer}>
                <h2>Desenvolvedor Fullstack</h2>
                <h1>Portfolio</h1>
                <span>2025</span>
            </div>
            <h2 className={styles.name}>
                Fellipe Castro
            </h2>
        </section>
    )
}

export default Home;
