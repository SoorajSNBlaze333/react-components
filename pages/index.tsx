import React from 'react';
import Head from 'next/head'
import * as Components from '../components/misc';
import MacOS from '../assets/macOS.jpg';

interface HomeProps {
  title: string,
}

export default function Home(props: HomeProps) {
  const { title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Components.Backdrop backgroundImage={MacOS}>
        <Components.MenuBar />
        <Components.Terminal />
        <Components.CommandExecuter />
      </Components.Backdrop>
    </>
  );
}