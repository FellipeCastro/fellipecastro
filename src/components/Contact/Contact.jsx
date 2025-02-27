import { IoCopy } from "react-icons/io5";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <div class={styles.container}>
                <div class={styles.textContainer}>
                    <h2>Entre em contato comigo!</h2>
                    <p>
                        Me mande um e-mail para trocarmos
                        ideias ou darmos início a um novo projeto!
                    </p>
                </div>
                <div class={styles.emailContainer}>
                    <button>
                        <IoCopy />
                    </button>
                    <span>fehcastru@gmail.com</span>
                </div>
            </div>
        </section>
    );
}

export default Contact;
