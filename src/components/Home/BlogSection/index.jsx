'use client';

import styles from './style.module.scss';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import LearnMoreBtn from '@/components/shared/LearnMoreBtn';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{
              publication(host: "ashutosh4336.hashnode.dev") {
                  posts(first: 5) {
                      edges {
                          node {
                              title
                              brief
                              slug
                              coverImage {
                                  url
                              }
                              publishedAt
                          }
                      }
                  }
              }
          }`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }

      const { data } = await response.json();

      setBlogs(data.publication.posts.edges);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (blogs.length === 0 && !loading) return;

  return (
    <section className={styles.blogSection}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Latest Blog Posts
      </motion.h2>
      <div className={styles.blogGrid}>
        {loading ? (
          <div className={styles.loading}>Loading blogs...</div>
        ) : (
          blogs.map(({ node: blog }, index) => (
            <motion.article
              key={blog.slug}
              className={styles.blogCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.blogImageWrapper}>
                <Image
                  src={blog.coverImage.url}
                  alt={blog.title}
                  className={styles.blogImage}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  priority={index < 2}
                />
                <div className={styles.blogHashnodeIcon}>
                  <FaHashnode />
                </div>
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogDate}>
                  {formatDate(blog.publishedAt)}
                </span>
                <h3>{blog.title}</h3>
                <div className={styles.blogBrief}>
                  <p>{blog.brief}</p>
                </div>
                <LearnMoreBtn
                  href={`https://ashutosh4336.hashnode.dev/${blog.slug}`}
                  text='Read More'
                  target='_blank'
                  icon={<FaArrowRight />}
                />
              </div>
            </motion.article>
          ))
        )}
      </div>
    </section>
  );
}
