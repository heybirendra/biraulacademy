import styles from './Academics.module.css';

export default function Academics() {
    return (
        <section id="academics" className={styles.section}>
            <h2 className={styles.heading}>Academic Excellence</h2>

            <div className={styles.grid}>
                <div className={`glass-panel ${styles.card}`}>
                    <h3 className={styles.cardTitle}>Primary Years</h3>
                    <p className={styles.cardText}>
                        A foundation built on curiosity and play-based learning. We focus on literacy, numeracy, and social skills.
                    </p>
                    <ul className={styles.curriculumList}>
                        <li>Experiential Learning</li>
                        <li>Arts & Crafts</li>
                        <li>Basic Coding</li>
                        <li>Public Speaking</li>
                    </ul>
                </div>

                <div className={`glass-panel ${styles.card}`}>
                    <h3 className={styles.cardTitle}>Middle School</h3>
                    <p className={styles.cardText}>
                        Transitioning from guided learning to independent inquiry. Emphasis on critical thinking and project work.
                    </p>
                    <ul className={styles.curriculumList}>
                        <li>STEM Integration</li>
                        <li>Foreign Languages</li>
                        <li>Debate & Model UN</li>
                        <li>Robotics Lab</li>
                    </ul>
                </div>

                <div className={`glass-panel ${styles.card}`}>
                    <h3 className={styles.cardTitle}>Senior Secondary</h3>
                    <p className={styles.cardText}>
                        Rigorous preparation for university and beyond. Specialized streams to match career aspirations.
                    </p>
                    <ul className={styles.curriculumList}>
                        <li>Advanced Sciences & Math</li>
                        <li>Commerce & Economics</li>
                        <li>Humanities & Social Sciences</li>
                        <li>Career Counseling</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
