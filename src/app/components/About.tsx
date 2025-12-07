import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/school.png"
                        alt="Biraul Academy Campus"
                        width={600}
                        height={400}
                        className={styles.image}
                        unoptimized
                    />
                </div>

                <div className={styles.content}>
                    <span className={styles.badge}>About Us</span>
                    <h2 className={styles.heading}>A Tradition of Excellence Since 1999</h2>
                    <p className={styles.text}>
                        Founded with a vision to nurture future leaders, Biraul Academy stands as a beacon
                        of educational excellence. We believe in a holistic approach that balances academic rigor
                        with creative expression and character building.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <h4>Holistic Learning</h4>
                            <p>Integrating sports, arts, and technology with core academics.</p>
                        </div>
                        <div className={styles.feature}>
                            <h4>Global Perspective</h4>
                            <p>International exchange programs and global curriculum standards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
