import Layout from 'components/Layout';
import useProductDetail from 'libs/hooks/useProductDetail';
import { getProductImageUrl } from 'libs/productUtils';
import { formatPrice } from 'libs/utils';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Card, Col, Container, Row, Spinner, ToggleButton } from 'react-bootstrap';
import { ProductVariantType } from 'types/product';

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [selectedVariant, setSelectedVariant] = useState<ProductVariantType>();

  const productId = Array.isArray(id) ? id[0] : id || '';

  const { product, isLoading } = useProductDetail(productId);

  useEffect(() => {
    setSelectedVariant(product?.variants[0]);
  }, [product]);

  if (isLoading) {
    return (
      <div className='text-center mt-4'>
        <Spinner animation='grow' variant='dark' />
      </div>
    );
  }

  if (!product) {
    return <div className='text-center text-muted mt-4'>Product does not exist</div>;
  }

  return (
    <Container className='mt-4'>
      <Row>
        <Col xs={12} sm={6}>
          <Card.Img variant='top' src={getProductImageUrl(product?.thumbnail?.small)} />
        </Col>
        <Col xs={12} sm={6}>
          <h2>{product.name}</h2>
          <div>{product.description}</div>

          <div className='mt-4'>
            <ButtonGroup className='mb-2'>
              {product.variants.map((variant) => (
                <ToggleButton
                  key={variant.productVariantId}
                  id={`radio-${variant.productVariantId}`}
                  type='radio'
                  variant='outline-success'
                  name={`radio-${product.productId}`}
                  value={variant.productVariantId}
                  checked={variant.productVariantId === selectedVariant?.productVariantId}
                  onChange={() => setSelectedVariant(variant)}
                >
                  {variant.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>

          {selectedVariant && <small>${formatPrice(selectedVariant.sellingPrice)}</small>}
        </Col>
      </Row>
    </Container>
  );
}

ProductDetail.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title='Menu'>{page}</Layout>;
};

export default ProductDetail;
