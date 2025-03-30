import React, { useState } from 'react';
import Layout from '../src/layout/Wrapper';
import styles from '../src/styles/Codes.module.scss';
import { motion } from 'framer-motion';
import { httpStatusCodes } from '../src/data/statusCodes';
import Link from 'next/link';

// Helper function to determine category and color based on status code
const getCategoryAndColor = (code) => {
  if (code >= 100 && code < 200) {
    return { category: 'Informational', color: '#2196F3' };
  } else if (code >= 200 && code < 300) {
    return { category: 'Success', color: '#4CAF50' };
  } else if (code >= 300 && code < 400) {
    return { category: 'Redirection', color: '#FFC107' };
  } else if (code >= 400 && code < 500) {
    return { category: 'Client Error', color: '#F44336' };
  } else if (code >= 500 && code < 600) {
    return { category: 'Server Error', color: '#FF9800' };
  } else {
    return { category: 'Custom', color: '#9E9E9E' };
  }
};

// Process the status codes to include category and color
const processedStatusCodes = httpStatusCodes.map((code) => ({
  ...code,
  title: code.title.trim(),
  description: code.description.split('(')[0].trim(),
  ...getCategoryAndColor(code.code),
}));

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

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>
            {data.code} - {data.title}
          </h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <span
            className={styles.category}
            style={{ backgroundColor: data.color }}
          >
            {data.category}
          </span>
          <p className={styles.description}>{data.description}</p>
          <p className={styles.details}>{data.details}</p>
        </div>
      </div>
    </div>
  );
};

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

const CodesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories for filter
  const categories = [
    'all',
    ...new Set(processedStatusCodes.map((code) => code.category)),
  ];

  // Get color for each category
  const getCategoryColor = (category) => {
    if (category === 'all') return '#666';
    const code = processedStatusCodes.find((c) => c.category === category);
    return code ? code.color : '#666';
  };

  // Filter codes based on search and category
  const filteredCodes = processedStatusCodes.filter((code) => {
    const matchesSearch = searchTerm
      ? code.code.toString().includes(searchTerm) ||
        code.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        code.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    const matchesCategory =
      selectedCategory === 'all' || code.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleMoreInfo = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>HTTP Status Codes</h1>
          <p>
            Explore the complete list of HTTP status codes and their meanings
          </p>
        </div>

        <div className={styles.filters}>
          <input
            type='text'
            placeholder='Search status codes...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  selectedCategory === category ? styles.active : ''
                }`}
                onClick={() => setSelectedCategory(category)}
                style={{
                  '--category-color': getCategoryColor(category),
                  '--category-hover': getCategoryColor(category),
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredCodes.length > 0 ? (
          <div className={styles.grid}>
            {filteredCodes.map((code) => (
              <div key={code.code}>
                <StatusCard {...code} onMoreInfo={handleMoreInfo} />
              </div>
            ))}
          </div>
        ) : (
          <NoResults
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
          />
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
        />
      </div>
    </Layout>
  );
};

export default CodesPage;
