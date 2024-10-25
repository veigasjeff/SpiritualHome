import Link from 'next/link'; // Import Link from Next.js
import styles from '@styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Welcome to SpiritualHome</h1>
        <p>Your Sanctuary for Spiritual Growth</p>
        <Link href="/daily-mass"> {/* Add Link component here */}
          <button className={styles.exploreButton}> Come and Explore </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
  