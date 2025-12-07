import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}></div>

            <div className={styles.content}>
                <div className={styles.badge}>Admissions Open for 2025-26</div>

                <h1 className={styles.title}>
                    Empowering<br />
                    Future Leaders
                </h1>

                <p className={styles.subtitle}>
                    Biraul Academy combines world-class academics with holistic development
                    to prepare students for a rapidly evolving global landscape.
                </p>

                <div className={styles.actions}>
                    <Link href="/admissions">
                        <button className={styles.primaryBtn}>Apply for Admission</button>
                    </Link>
                    <Link href="/contact">
                        <button className={styles.secondaryBtn}>Schedule a Tour</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
