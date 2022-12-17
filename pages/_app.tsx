import Layout from '@/layouts/layout';
import Transition from '@/layouts/transtition';

import '@/styles/general.scss';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Transition>
        <Component {...pageProps} />    
      </Transition>
    </Layout>
  )
}