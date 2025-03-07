import { IoCopy } from "react-icons/io5";
import styles from "./Contact.module.css";
import { useState } from "react";

function Contact() {
    const [emailCopied, setEmailCopied] = useState(false); 
    const email = "fehcastru@gmail.com";
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2500);
            })
            .catch((err) => console.error("Erro ao copiar e-mail: ", err));
    };

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2>Entre em contato comigo!</h2>
                    <p>
                        Me mande um e-mail para trocarmos
                        ideias ou darmos início a um novo projeto!
                    </p>
                </div>
                <div className={styles.emailContainer}>
                    <button onClick={copyEmailToClipboard}>
                        <IoCopy />
                    </button>
                    <span>
                        {emailCopied ? "E-mail copiado!" : email}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Contact;
