import styles from '@/styles/Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export function SimpleCard({ title, children }) {
  return (
    <div className={styles.cardContainer}>
      <h4 className={`${styles.footerSectionHeader} text-center`}>{title}</h4>
      <div className='text-center'>{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className='footerSection bg-gray-100 text-gray-700'>
      <div className='p-12 grid grid-flow-row sm:grid-flow-col gap-3'>
        <div>
          <SimpleCard title='Help'>
            <div>
              <Link href='/about'>
                <a className={styles.footerLinks}>About</a>
              </Link>
            </div>

            <div>
              <Link href='/contact'>
                <a className={styles.footerLinks}>Contact</a>
              </Link>
            </div>
          </SimpleCard>
        </div>

        <div>
          <SimpleCard title='Browse'>
            <div>
              <Link href='/blogs'>
                <a className={styles.footerLinks}>Articles</a>
              </Link>
            </div>
            <div>
              <Link href='/developers'>
                <a className={styles.footerLinks}>Developers</a>
              </Link>
            </div>
          </SimpleCard>
        </div>

        <div>
          <SimpleCard title='Community'>
            <div>
              <a
                href='https://twitter.com/ashutosh4336'
                className={styles.footerLinks}
                target='_blank'
                rel='noreferrer'
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                href='https://linkedin.com/in/ashutosh4336'
                className={styles.footerLinks}
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>
            </div>
          </SimpleCard>
        </div>
      </div>

      <div className={`${styles.footerText} flex justify-center text-center`}>
        <Image
          src='https://res.cloudinary.com/thirus/image/upload/v1632162912/logos/chat_ys7mog.svg'
          alt='logo'
          width={50}
          height={50}
        ></Image>

        <div>Copyright &copy; TheHTTP {new Date().getFullYear()} </div>
      </div>
    </footer>
  );
}

// <footer className={`globals  ${styles.footer} py-4`}>
//   <p>Copyright &copy; TheHTTP {new Date().getFullYear()} </p>
// </footer>
