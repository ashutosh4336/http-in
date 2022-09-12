import styles from '@/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`globals  ${styles.footer} py-4`}>
      <p>Copyright &copy; TheHTTP {new Date().getFullYear()} </p>
    </footer>
  );
}
