export function getProductImageUrl(
  url: string,
  defaultUrl: string = 'https://s3.us-west-2.amazonaws.com/origins-staging/product-photos/b5f611f0-7f2c-4b15-a008-4da5a85063f0_600x400.jpeg',
) {
  return url || defaultUrl;
}
