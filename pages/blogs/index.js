import Layout from '@/src/layouts/Wrapper';
import React from 'react';
import styles from '@/styles/blogs.module.scss';

const Blogs = () => {
  const handleRedirect = () => {
    window.location.href = 'https://blog.thehttp.in';
  };

  return (
    <Layout
      title='TheHTTP Blogs'
      keywords={`Blogs, blog, dev blog, http https, web javascript, aws, nodejs, web3, api, react, angular, microservice, security, azure`}
      description={`TheHTTP Blogs for developers. Blogs on web development, javascript, aws, nodejs, web3, api, react, angular, microservice, security, azure`}
    >
      <div className={styles['blogs-page']}>
        <h1>Blogs on TheHTTP</h1>
        <p>Visit</p>
        <pre onClick={handleRedirect} className={styles.link}>
          https://blog.thehttp.in
        </pre>
      </div>
    </Layout>
  );
};

// export async function getStaticProps(context) {
//   return {
//     redirect: {
//       permanent: true,
//       destination: 'https://blog.thehttp.in',
//     },
//   };
// }

export default Blogs;
