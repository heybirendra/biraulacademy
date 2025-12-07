import styles from './NoticeBoard.module.css';
import noticesData from '../data/notices.json';

// Define the Notice type
type Notice = {
    id: number;
    title: string;
    date: string;
    type: string;
};

export default function NoticeBoard() {
    // We duplicate the notices to create a seamless infinite scroll effect
    const notices: Notice[] = [...noticesData, ...noticesData];

    return (
        <section className={styles.section} id="notices">
            <h2 className={styles.heading}>Latest Announcements</h2>

            <div className={`glass-panel ${styles.board}`}>
                <div className={styles.noticeList}>
                    {notices.map((notice, index) => (
                        <div
                            key={`${notice.id}-${index}`}
                            className={styles.card}
                            data-type={notice.type}
                        >
                            <span className={styles.date}>{notice.date} • {notice.type}</span>
                            <h3 className={styles.title}>{notice.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
