import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    Accept: 'application/vnd.originscannabis.v2',
  },
});

const defaultFetcher = (url: string) => {
  return axiosInstance.get(url).then((res) => res.data);
};

const productFetcher = (url: string) => {
  axiosInstance.defaults.headers = {
    ...axiosInstance.defaults.headers,
    'x-origins-token': process.env.NEXT_PUBLIC_X_ORIGINS_TOKEN,
  };

  return axiosInstance.get(url).then((res) => res.data);
};

export { defaultFetcher, productFetcher };
