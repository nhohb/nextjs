import type { AppProps } from 'next/app';
import 'styles/index.scss';
import { Page } from 'types/page';
import { SWRConfig } from 'swr';
import { defaultFetcher } from 'libs/axios-fetcher';
import { DEFAULT_SWR_FETCH_INTERVAL } from 'libs/constants/commons';

type Props = AppProps & {
  Component: Page;
};

function NextApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SWRConfig
      value={{
        refreshInterval: DEFAULT_SWR_FETCH_INTERVAL,
        revalidateOnFocus: false,
        fetcher: defaultFetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>,
  );
}
export default NextApp;
