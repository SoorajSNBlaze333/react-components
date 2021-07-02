import React, { useEffect } from 'react';
import Head from 'next/head'
import Backdrop from '../components/Backdrop';
import CommandExecuter from '../components/CommandExecuter';
import Spotlight from '../components/Spotlight';
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
      <Backdrop backgroundImage={MacOS}>
        <CommandExecuter /> 
      </Backdrop>
      <small className="fixed bottom-1 text-center text-gray-300 font-semibold inset-x-0">
        Made with NextJS, React, Tailwind and 🤍
      </small>
      <Spotlight />
    </>
  );
}