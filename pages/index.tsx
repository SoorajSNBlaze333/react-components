import React from 'react';
import { QuickSearch } from '../components/quicksearch';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <QuickSearch 
        data={[
          { keywords: ['About'], item: <Link href="/about"><a className="p-4 w-full h-full focus:bg-gray-100 focus:outline-none">About</a></Link> },
          { keywords: ['Github'], item: <a className="p-4 w-full h-full focus:bg-gray-100 focus:outline-none" href="https://github.com/SoorajSNBlaze333" target="_blank" rel="noreferrer">Github</a> }
        ]}
        emptyContent={<div className="w-full p-4 text-gray-400">No results found</div>}
      />
    </div>
  );
}
