import type { AppProps } from 'next/app';
import 'styles/index.scss';
import { Page } from 'types/page';

type Props = AppProps & {
  Component: Page;
};

function NextApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
export default NextApp;
