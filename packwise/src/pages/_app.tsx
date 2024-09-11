import "@/styles/globals.css";
import React from 'react';
import type { AppProps } from "next/app";
import Header from '../components/Header';
import Layout from '../components/Layout'; // Import Layout component
import { ReactNode } from 'react';

interface MyAppProps extends AppProps {
  Component: React.ComponentType<{ pageProps: { [key: string]: any } }>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
