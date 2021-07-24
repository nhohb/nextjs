export type ProductVariantType = {
  productVariantId: string;
  name: string;
  description: string;
  collectExciseTax: number;
  latestSku: null;
  currentDiscount: null;
  discountType: null;
  discountTypeDescription: null;
  isSale: boolean;
  isOriginsCeritifed: boolean;
  gbID: null;
  posID: string;
  storeId: string;
  quantity: number;
  sellingPrice: number;
  updatedAt: string;
  originalPrice: null;
};

export type ProductThumbnailType = {
  original: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
};

export type ProductType = {
  productId: string;
  name: string;
  description: string;
  productImage: string;
  lifestyleId: string;
  lifestyleName: string;
  productTypeId: string;
  productTypeName: string;
  productTypeGroupId: string;
  subTypeId: string;
  subTypeName: string;
  brandId: string;
  brandName: string;
  ratio: string;
  categoryId: string;
  categoryName: string;
  labResultLink: null;
  storeId: string;
  isReviewed: null;
  isFeatured: boolean;
  variants: ProductVariantType[];
  potency: number;
  thcPercentage: null;
  attributes: null;
  thumbnail: ProductThumbnailType;
  productDetailPage: string;
};

export type ProductFilter = {
  storeId: string;
  keyword?: string;
  productTypeIds?: string[];
};
