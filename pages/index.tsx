import React from 'react';
import { Filter } from '../filter';

interface HomeProps {
  title: string,
}

export default function Home(props: HomeProps) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Filter />
    </div>
  );
}