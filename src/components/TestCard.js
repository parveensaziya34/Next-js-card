// components/TestCard.js
import Image from 'next/image';
import styles from './TestCard.module.css';

const TestCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.leftSection}>
        <Image 
          src="/jaya-profile.jpg" 
          alt="Jaya Sinha"
          width={170}
          height={170}
          className={styles.profileImage}
        />
        <div className={styles.companyName}>
          <p>amazon</p>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.hikeBadge}>150% Hike</div>
        <h2>Jaya Sinha</h2>
        <h3>Data Scientist</h3>
        <p>
          Transitioning from a non-tech role, LearnBay&apos;s 
          IBM data science certification equipped me 
          with the skills needed in today&apos;s market. The course&apos;s 
          interactive sessions and personalized guidance 
          from Abhishek sir were invaluable.
        </p>

        <div className={styles.footer}>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.watchLink}
          >
            <span>Watch on</span>
            <Image 
              src="/yu.jpg" 
              alt="YouTube" 
              width={30}  
              height={30} 
              className={styles.youtubeIcon} 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
