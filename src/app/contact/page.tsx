import styles from './page.module.css';

export default function ContactPage() {
    return (
        <main className={styles.container}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>
                    Have questions? We'd love to hear from you. Visit us or send a message.
                </p>
            </div>

            <div className={styles.grid}>
                <div className={`glass-panel ${styles.infoCard}`}>
                    <div className={styles.infoItem}>
                        <h3>Address</h3>
                        <p>
                            Biraul Academy Campus<br />
                            123 Education Lane, Knowledge Park<br />
                            Cityville, State 12345
                        </p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>Contact Info</h3>
                        <p>
                            Phone: +1 (555) 123-4567<br />
                            Email: admissions@biraulacademy.edu
                        </p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>Office Hours</h3>
                        <p>
                            Monday - Friday: 8:00 AM - 4:00 PM<br />
                            Saturday: 9:00 AM - 1:00 PM
                        </p>
                    </div>
                </div>

                <div className={`glass-panel ${styles.formCard}`}>
                    <form>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Student Name</label>
                            <input type="text" className={styles.input} placeholder="Enter student's name" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Parent Email</label>
                            <input type="email" className={styles.input} placeholder="your@email.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Grade Interested In</label>
                            <select className={styles.input} style={{ appearance: 'none' }}>
                                <option>Pre-Primary</option>
                                <option>Primary (1-5)</option>
                                <option>Middle (6-8)</option>
                                <option>High School (9-12)</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Message</label>
                            <textarea className={styles.textarea} placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className={styles.submitBtn}>Send Message</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
