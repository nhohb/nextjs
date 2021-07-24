import Product from 'components/Product';
import useProducts from 'libs/hooks/useProducts';
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import { ProductFilter } from 'types/product';
import Link from 'next/link';

type Props = {
  filter: ProductFilter;
  onChangePage(newPageIndex: number): void;
  pageIndex?: number;
  pageSize?: number;
};

function ProductPage(props: Props) {
  const { filter, pageIndex = 0, pageSize, onChangePage } = props;

  const { products, isLoading } = useProducts(filter, pageIndex, pageSize);

  if (isLoading) {
    return (
      <div className='text-center'>
        <Spinner animation='grow' variant='dark' />
      </div>
    );
  }

  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
        {products.map((product) => (
          <Col key={product.productId}>
            <Link
              href={{
                pathname: `/products/${product.productId}`,
                query: { storeId: filter.storeId },
              }}
              passHref
            >
              <a>
                <Product product={product} />
              </a>
            </Link>
          </Col>
        ))}
      </Row>

      <div className='text-center mt-4'>
        <Button onClick={() => onChangePage(pageIndex + 1)}>Load more</Button>
      </div>
    </>
  );
}

export default ProductPage;
