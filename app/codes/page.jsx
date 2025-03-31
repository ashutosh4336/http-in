'use client';

import styles from '@/styles/Codes.module.scss';
import React, { useState } from 'react';
import { httpStatusCodes as statusCodes } from '@/data/statusCodes';
import StatusCard from '@/components/Codes/StatusCard';
import Modal from '@/components/Codes/Modal';
import NoResults from '@/components/Codes/NoResult';
import { getCategoryAndColor } from '@/utils/util';

// Process the status codes to include category and color
const processedStatusCodes = statusCodes.map((code) => ({
  ...code,
  title: code.title.trim(),
  description: code.description.split('(')[0].trim(),
  ...getCategoryAndColor(code.code),
}));

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
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>HTTP Status Codes</h1>
        <p>Explore the complete list of HTTP status codes and their meanings</p>
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
  );
};

export default CodesPage;
