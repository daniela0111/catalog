import "@/styles/globals.css";
import React from 'react';
import type { AppProps } from "next/app";
import Layout from '../components/Layout';
import { ReactNode } from 'react';

interface MyAppProps extends AppProps {
  Component: React.ComponentType<{ pageProps: { [key: string]: any } }>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
