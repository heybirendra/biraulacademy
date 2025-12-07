"use client";

import Image from 'next/image';
import { useState } from 'react';
import styles from './Gallery.module.css';

const galleryImages = [
    { src: "/images/gallery_assembly.png", caption: "Morning Assembly" },
    { src: "/images/classroom_interaction.jpg", caption: "Classroom Interaction" },
    { src: "/images/rural_outreach.jpg", caption: "Rural Outreach Program" },
    { src: "/images/art_creativity.jpg", caption: "Art & Creativity" },
    { src: "/images/group_study.jpg", caption: "Student Group Study" },
    { src: "/images/technology_lab.jpg", caption: "Technology & Lab" },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="gallery" className={styles.section}>
            <h2 className={styles.heading}>Life at Biraul Academy</h2>

            <div className={styles.grid}>
                {galleryImages.map((img, index) => (
                    <div
                        key={index}
                        className={styles.item}
                        onClick={() => setSelectedImage(img.src)}
                    >
                        <Image
                            src={img.src}
                            alt={img.caption}
                            width={400}
                            height={300}
                            className={styles.image}
                            unoptimized
                        />
                        <div className={styles.overlay}>
                            <p className={styles.caption}>{img.caption}</p>
                            <span className={styles.expandIcon}>Click to Expand</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Gallery Preview"
                            width={1000}
                            height={800}
                            className={styles.lightboxImage}
                            unoptimized
                        />
                        <button
                            className={styles.closeButton}
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
