import React from 'react';
import { QuickSearch } from '../components/quicksearch';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <QuickSearch data={[
        { keywords: ['About', 'routes', 'path'], item: <Link href="/about"><a className="p-4 w-full h-full">About</a></Link> }
      ]}/>
    </div>
  );
}
