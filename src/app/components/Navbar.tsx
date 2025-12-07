"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navContainer} ${scrolled ? styles.navScrolled : ''}`}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.logo}>
                    Biraul Academy
                </Link>

                <div className={styles.links}>
                    <Link href="/#about" className={styles.link}>About</Link>
                    <Link href="/leadership" className={styles.link}>Leadership</Link>
                    <Link href="/#academics" className={styles.link}>Academics</Link>
                    <Link href="/#faculty" className={styles.link}>Faculty</Link>
                    <Link href="/#gallery" className={styles.link}>Gallery</Link>
                    <Link href="/admissions" className={styles.link}>Admissions</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                    <Link href="/admissions">
                        <button className={styles.ctaButton}>Apply Now</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
