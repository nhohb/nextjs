import Header from 'components/Header';
import Head from 'next/head';
import React, { Fragment } from 'react';
import Footer from '../Footer';
import styles from './Layout.module.scss';
import { LayoutProps } from './types';

function Layout(props: LayoutProps) {
  const { title } = props;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
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
