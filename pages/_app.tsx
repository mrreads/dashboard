import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { store } from '@/store';

import Layout from '@/layouts/layout';
import Transition from '@/layouts/transtition';

import '@/styles/general.scss';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Transition>
          <Provider store={store}>
            <Component {...pageProps} />    
          </Provider>
        </Transition>
      </Layout>
    </ThemeProvider>
  )
}