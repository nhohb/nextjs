import Layout from 'components/Layout';
import ProductPage from 'components/ProductPage';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Menu() {
  const [pageIndex, setPageIndex] = useState(0);
  const router = useRouter();
  const { storeId } = router.query;

  const currentStoreId = Array.isArray(storeId) ? storeId[0] : storeId || '';

  return (
    <Container className='mt-4'>
      <ProductPage
        filter={{ storeId: currentStoreId }}
        pageIndex={pageIndex}
        onChangePage={(newPageIndex) => setPageIndex(newPageIndex)}
      />
    </Container>
  );
}

Menu.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title='Menu'>{page}</Layout>;
};
export default Menu;
