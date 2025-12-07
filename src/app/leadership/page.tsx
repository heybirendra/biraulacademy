import Image from 'next/image';
import styles from './page.module.css';

export default function LeadershipPage() {
    return (
        <main className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.heading}>Visionary Leadership</h1>
                <p className={styles.subtitle}>
                    Guiding Biraul Academy with decades of experience in the Indian education sector (CBSE & International).
                </p>
            </div>

            <div className={styles.profiles}>
                <div className={styles.profile}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=2670&auto=format&fit=crop"
                            alt="Principal"
                            fill
                            className={styles.image}
                            unoptimized
                        />
                    </div>
                    <div className={styles.info}>
                        <span className={styles.role}>Principal</span>
                        <h2 className={styles.name}>Dr. Arvind Malhotra</h2>
                        <span className={styles.qualification}>Ph.D. Education, M.Sc Physics (Gold Medalist)</span>
                        <p className={styles.bio}>
                            With over 25 years of experience in leading premier CBSE institutions across India, Dr. Malhotra brings a vision
                            of blending traditional Indian values with modern scientific temper. He has been awarded the "National Best Teacher Award"
                            by the President of India.
                        </p>
                        <blockquote className={styles.quote}>
                            "Education is not just about filling a bucket, but lighting a fire. Our goal is to create citizens who think globally but act locally."
                        </blockquote>
                    </div>
                </div>

                <div className={styles.profile}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop"
                            alt="Vice Principal"
                            fill
                            className={styles.image}
                            unoptimized
                        />
                    </div>
                    <div className={styles.info}>
                        <span className={styles.role}>Vice Principal</span>
                        <h2 className={styles.name}>Mrs. Meera Iyer</h2>
                        <span className={styles.qualification}>M.A. English Literature, B.Ed</span>
                        <p className={styles.bio}>
                            A distinguished educator and administrator, Mrs. Iyer focuses on holistic student development and discipline.
                            She manages the academic curriculum and co-curricular activities, ensuring every student discovers their unique potential.
                        </p>
                        <blockquote className={styles.quote}>
                            "Every child is unique. Our responsibility is to provide the soil and sunshine for them to bloom."
                        </blockquote>
                    </div>
                </div>
            </div>
        </main>
    );
}
