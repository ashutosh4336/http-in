import styles from '@/styles/Codes.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

const StatusCard = ({
  code,
  title,
  description,
  category,
  color,
  details,
  onMoreInfo,
}) => {
  // Convert category to class name (lowercase and remove spaces)
  const categoryClass = category.toLowerCase().replace(/\s+/g, '');

  return (
    <motion.div
      className={`${styles.card} ${styles[categoryClass]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        '--button-color': color,
        '--button-hover-bg': color,
        '--button-hover-text': '#ffffff',
      }}
    >
      <div className={styles.cardImage} style={{ backgroundColor: color }}>
        <div className={styles.statusCode}>{code}</div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3>{title}</h3>
          <span className={styles.category} style={{ backgroundColor: color }}>
            {category}
          </span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.cardActions}>
          <button
            className={styles.moreButton}
            onClick={() =>
              onMoreInfo({ code, title, description, category, color, details })
            }
          >
            Quick View
          </button>

          <Link href={`/codes/${code}`}>
            <button className={styles.moreButton}>View Details</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default StatusCard;
