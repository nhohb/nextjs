import { productFetcher } from 'libs/axios-fetcher';
import { apiEndpoints } from 'libs/constants/apiEndpoints';
import { DEFAULT_PAGE_SIZE } from 'libs/constants/commons';
import useSWR from 'swr';
import { ProductFilter, ProductType } from 'types/product';

function formatUrl(filter: ProductFilter, pageIndex?: number, pageSize: number = 0) {
  const params = Object.entries(filter).map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.map((item) => `${key}=${item}`).join('&');
    }

    return `${key}=${value}`;
  });

  pageIndex && params.push(`offset=${pageIndex * pageSize}`);
  pageSize && params.push(`limit=${pageSize}`);

  return apiEndpoints.PRODUCT_LIST + '?' + params.join('&');
}

function useProducts(
  filter: ProductFilter,
  pageIndex: number = 0,
  pageSize: number = DEFAULT_PAGE_SIZE,
) {
  const url = formatUrl(filter, pageIndex, pageSize);
  const { data, error } = useSWR<{ data: ProductType[] }>(url, productFetcher);

  return {
    products: data?.data || [],
    isLoading: !error && !data,
    isError: error,
  };
}

export default useProducts;
