import { productFetcher } from 'libs/axios-fetcher';
import useSWR from 'swr';
import { ProductType } from 'types/product';

export function formatProductDetailUrl(productId: string, storeId: string) {
  return `products/${productId}/detail?storeId=${storeId}`;
}

function useProductDetail(productId: string, storeId: string) {
  const url = formatProductDetailUrl(productId, storeId);
  const { data, error } = useSWR<{ data: ProductType }>(url, productFetcher);

  return {
    product: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useProductDetail;
