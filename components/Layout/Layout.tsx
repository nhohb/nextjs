import Footer from 'components/Footer';
import Header from 'components/Header';
import Head from 'next/head';
import React, { Fragment } from 'react';
import styles from './Layout.module.scss';
import { LayoutProps } from './types';

function Layout(props: LayoutProps) {
  const { title } = props;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        {/* Add meta tags here */}
      </Head>

      <div className={styles.layout}>
        <Header />

        <main className={styles.pageContent}>{props.children}</main>

        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
