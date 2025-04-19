'use client';
import styles from '@/styles/Navbar.module.scss';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaCode,
  FaBook,
  FaGithub,
} from 'react-icons/fa';
import { PiBarcodeLight } from 'react-icons/pi';
import { SiJavascript } from 'react-icons/si';

import Logo from '@/components/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    // { name: 'Home', path: '/', icon: FaHome },
    { name: 'UUID', path: '/uuid', icon: PiBarcodeLight },
    { name: 'Status Codes', path: '/codes', icon: FaCode },
    { name: 'Visualizer', path: '/js-visualizer', icon: SiJavascript },
    // { name: 'Documentation', path: '/docs', icon: FaBook },
  ];

  if (!mounted) {
    return (
      <nav className={`${styles.navbar} ${styles.scrolled}`}>
        <div className={styles.container}>
          <Logo />
          <div className={styles.desktopNav} />
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <Logo />

        <div className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`${styles.navLink} ${
                pathname === item.path ? styles.active : ''
              }`}
            >
              <span className={styles.navItem}>
                <item.icon
                  className={`${styles.navIcon} ${
                    item.name === 'Visualizer' ? styles.jsIcon : ''
                  }`}
                />
                {item.name}
              </span>
            </Link>
          ))}
          <a
            href='https://github.com/ashutosh4336/http-in'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.githubLink}
          >
            <span className={styles.navItem}>
              <FaGithub className={styles.navIcon} />
              GitHub
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileNav}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${styles.mobileNavLink} ${
                  pathname === item.path ? styles.active : ''
                }`}
              >
                <span className={styles.mobileNavItem}>
                  <item.icon className={styles.mobileNavIcon} />
                  {item.name}
                </span>
              </Link>
            ))}
            <a
              href='https://github.com/ashutosh4336/http-in'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.mobileNavLink}
            >
              <span className={styles.mobileNavItem}>
                <FaGithub className={styles.mobileNavIcon} />
                GitHub
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
