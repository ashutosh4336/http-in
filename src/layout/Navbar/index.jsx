import styles from '@/styles/Navbar.module.scss';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaCode,
  FaBook,
  FaGithub,
} from 'react-icons/fa';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    // { name: 'Home', path: '/', icon: FaHome },
    { name: 'Status Codes', path: '/codes', icon: FaCode },
    { name: 'Documentation', path: '/docs', icon: FaBook },
  ];

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
                router.pathname === item.path ? styles.active : ''
              }`}
            >
              <span className={styles.navItem}>
                <item.icon className={styles.navIcon} />
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
                  router.pathname === item.path ? styles.active : ''
                }`}
              >
                <span
                  className={styles.navItem}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className={styles.navIcon} />
                  {item.name}
                </span>
              </Link>
            ))}
            <a
              href='https://github.com/yourusername/http-in'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.navItem}>
                <FaGithub className={styles.navIcon} />
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
