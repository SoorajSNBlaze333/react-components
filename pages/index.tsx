import React, { useEffect } from 'react';
import Head from 'next/head'
import Backdrop from '../components/Backdrop';
import CommandExecuter from '../components/CommandExecuter';
import Spotlight from '../components/Spotlight';
import MenuBar from '../components/MenuBar';
import MacOS from '../assets/macOS.jpg';
import Keyboard from '../libs/keyboard';

interface HomeProps {
  title: string,
}

export default function Home(props: HomeProps) {
  const { title } = props;

  useEffect(() => {
    Keyboard.init();
    return () => {
      Keyboard.destroy();
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Backdrop backgroundImage={MacOS}>
        <MenuBar />
        <CommandExecuter /> 
      </Backdrop>
      <Spotlight />
    </>
  );
}