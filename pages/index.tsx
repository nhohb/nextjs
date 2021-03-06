import Layout from 'components/Layout';
import React from 'react';

const Home = () => {
  return <div>Home</div>;
};

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title='Home'>{page}</Layout>;
};

export default Home;
