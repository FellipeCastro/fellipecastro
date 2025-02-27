import { FaRegCopyright } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>CopyRight 2025 By Fellipe Castro</p>
            <FaRegCopyright />
        </footer>
    );
}

export default Footer;
