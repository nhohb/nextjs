import { productFetcher } from 'libs/axios-fetcher';
import { apiEndpoints } from 'libs/constants/apiEndpoints';
import { formatString } from 'libs/utils';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ProductType } from 'types/product';

export function formatProductDetailUrl(productId: string, storeId: string) {
  return formatString(apiEndpoints.PRODUCT_DETAIL, { productId }) + `?storeId=${storeId}`;
}

function useProductDetail(productId: string) {
  const router = useRouter();
  const { storeId } = router.query;
  const currentStoreId = Array.isArray(storeId) ? storeId[0] : storeId || '';

  const url = formatProductDetailUrl(productId, currentStoreId);
  const { data, error } = useSWR<{ data: ProductType }>(url, productFetcher);

  return {
    product: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useProductDetail;
