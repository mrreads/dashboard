import { Provider } from 'react-redux';

import Layout from '@/layouts/layout';
import Transition from '@/layouts/transtition';

import { store } from '@/store';

import '@/styles/general.scss';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Transition>
        <Provider store={store}>
          <Component {...pageProps} />    
        </Provider>
      </Transition>
    </Layout>
  )
}