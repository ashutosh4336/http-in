import styles from '@/styles/Codes.module.scss';

const NoResults = ({ searchTerm, selectedCategory }) => {
  return (
    <div className={styles.noResults}>
      <div className={styles.noResultsContent}>
        <h2>No Status Codes Found</h2>
        <p>
          {searchTerm
            ? `No status codes found matching "${searchTerm}"`
            : selectedCategory !== 'all'
            ? `No status codes found in the ${selectedCategory} category`
            : 'No status codes available'}
        </p>
        <div className={styles.noResultsImage}>
          <div className={styles.noResultsCode}>404</div>
        </div>
      </div>
    </div>
  );
};

export default NoResults;
