// components/TestCard.js
// components/TestCard.js
import Image from 'next/image';
import styles from './TestCard.module.css';

const TestCard = () => {
  return (
    <div className={styles.card}>
      {/* Left Section for the Image */}
      <div className={styles.leftSection}>
        <Image 
          src="/jaya-profile.jpg" // Replace with the correct image path
          alt="Jaya Sinha"
          width={170}
          height={170}
          className={styles.profileImage}
        />
        <div className={styles.companyName}>
          <p>amazon</p>
        </div>
      </div>

      {/* Right Section for Text */}
      <div className={styles.rightSection}>
        <div className={styles.hikeBadge}>150% Hike</div> {/* Hike Badge at the top right */}
        <h2>Jaya Sinha</h2>
        <h3>Data Scientist</h3>
        <p>
          Transitioning from a non-tech role, LearnBay's 
          IBM data science certification equipped me 
          with the skills needed in today's market. The course's 
          interactive sessions and personalized guidance 
          from Abhishek sir were invaluable.
        </p>

        {/* Footer Section with YouTube link */}
        <div className={styles.footer}>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.watchLink}
          >
            <span>Watch on</span>
            <img src="/yu.jpg" alt="YouTube" className={styles.youtubeIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
