import { getProductImageUrl } from 'libs/productUtils';
import { formatPrice } from 'libs/utils';
import React, { useState } from 'react';
import { ButtonGroup, Card, ToggleButton } from 'react-bootstrap';
import { ProductType, ProductVariantType } from 'types/product';
import styles from './Product.module.scss';

type Props = {
  product: ProductType;
};

function Product(props: Props) {
  const { product } = props;

  const [selectedVariant, setSelectedVariant] = useState<ProductVariantType>(product.variants[0]);

  return (
    <Card className={styles.product}>
      <Card.Img variant='top' src={getProductImageUrl(product.thumbnail.small)} />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text className={styles.description}>{product.description}</Card.Text>

        <Card.Text>
          <ButtonGroup className='mb-2'>
            {product.variants.map((variant) => (
              <ToggleButton
                key={variant.productVariantId}
                id={`radio-${variant.productVariantId}`}
                type='radio'
                variant='outline-success'
                name={`radio-${product.productId}`}
                value={variant.productVariantId}
                checked={variant.productVariantId === selectedVariant.productVariantId}
                onChange={() => setSelectedVariant(variant)}
              >
                {variant.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Card.Text>

        <Card.Text className={styles.price}>
          <small>${formatPrice(selectedVariant.sellingPrice)}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
