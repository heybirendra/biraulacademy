import styles from './Stats.module.css';

export default function Stats() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className={styles.number}>25+</span>
                    <span className={styles.label}>Years of Excellence</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.number}>50+</span>
                    <span className={styles.label}>Expert Faculty</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.number}>100%</span>
                    <span className={styles.label}>University Placements</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.number}>30+</span>
                    <span className={styles.label}>Sports & Clubs</span>
                </div>
            </div>
        </section>
    );
}
