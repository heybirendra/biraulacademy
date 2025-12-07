import styles from './page.module.css';

export default function AdmissionsPage() {
    return (
        <main className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Join the Biraul Academy Family</h1>
                <p className={styles.subtitle}>
                    We are looking for curious minds and future leaders. Explore our admission process
                    for the upcoming academic year.
                </p>
            </div>

            <div className={styles.content}>
                <section className={`glass-panel ${styles.section}`}>
                    <h2>Admission Process</h2>
                    <ol className={styles.stepList}>
                        <li className={styles.step}>
                            <h3>Submit Online Application</h3>
                            <p>Fill out the inquiry form below or download the application package.</p>
                        </li>
                        <li className={styles.step}>
                            <h3>Entrance Assessment</h3>
                            <p>Students from Grade 1 onwards appear for a basic aptitude test interactively.</p>
                        </li>
                        <li className={styles.step}>
                            <h3>Parent Interaction</h3>
                            <p>A meeting with the Principal to align on the student's growth path.</p>
                        </li>
                        <li className={styles.step}>
                            <h3>Document Verification & Fee Payment</h3>
                            <p>Finalize the admission by submitting necessary documents.</p>
                        </li>
                    </ol>
                </section>

                <section className={styles.section}>
                    <h2>Requirements</h2>
                    <div className={styles.requirements}>
                        <div className={`glass-panel ${styles.reqCard}`}>
                            <h3>Age Criteria</h3>
                            <p>Pre-Nursery: 2.5+ Years<br />Grade 1: 5.5+ Years</p>
                        </div>
                        <div className={`glass-panel ${styles.reqCard}`}>
                            <h3>Documents</h3>
                            <p>Birth Certificate, Transfer Certificate, 2 Passport Photos</p>
                        </div>
                    </div>
                </section>

                <div className={styles.applySection}>
                    <h2>Ready to Apply?</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        Applications for 2025-26 are now open.
                    </p>
                    <a href="/files/application_form.txt" download="Biraul_Academy_Application.txt" style={{ textDecoration: 'none' }}>
                        <button className="ctaButton" style={{
                            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-teal))',
                            color: 'white',
                            padding: '1rem 3rem',
                            borderRadius: '2rem',
                            border: 'none',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            cursor: 'pointer'
                        }}>
                            Download Application Form
                        </button>
                    </a>
                </div>
            </div>
        </main>
    );
}
