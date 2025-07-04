import Image from 'next/image';
import styles from './../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <Image
        src="/hero.jpg"
        alt="Hotel Terrace"
        width={1400}
        height={900}
        className={styles.heroImage}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Moments that matter
        </h1>
      </div>
    </div>
  );
}