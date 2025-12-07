import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <h3>Biraul Academy</h3>
                    <p className={styles.description}>
                        Empowering the next generation of potential leaders through academic excellence,
                        holistic development, and modern innovation.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/#about">About Us</Link></li>
                        <li><Link href="/#academics">Curriculum</Link></li>
                        <li><Link href="#admissions">Admissions</Link></li>
                        <li><Link href="#careers">Careers</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/contact">Near Biraul Chowk</Link></li>
                        <li>Biraul, Bihar</li>
                        <li>+91 7667975976</li>
                        <li>infobiraulacademy@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                &copy; {new Date().getFullYear()} Biraul Academy. All Rights Reserved.
            </div>
        </footer>
    );
}
