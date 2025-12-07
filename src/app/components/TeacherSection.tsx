import Image from 'next/image';
import styles from './TeacherSection.module.css';
import teachersData from '../data/teachers.json';

type Teacher = {
    id: number;
    name: string;
    role: string;
    subject: string;
    image: string;
};

export default function TeacherSection() {
    // Duplicate the list for seamless scrolling
    const teachers = [...teachersData, ...teachersData];

    return (
        <section className={styles.section} id="faculty">
            <h2 className={styles.heading}>Meet Our Faculty</h2>

            <div className={styles.marqueeContainer}>
                <div className={styles.track}>
                    {teachers.map((teacher, index) => (
                        <div key={`${teacher.id}-${index}`} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={teacher.image}
                                    alt={teacher.name}
                                    width={400}
                                    height={500}
                                    className={styles.image}
                                    unoptimized
                                />
                            </div>
                            <div className={styles.info}>
                                <span className={styles.role}>{teacher.role}</span>
                                <h3 className={styles.name}>{teacher.name}</h3>
                                <p className={styles.subject}>{teacher.subject}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
