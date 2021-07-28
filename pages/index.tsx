import React from 'react';
import { QuickSearch } from '../components/quicksearch';

export default function Home() {
  const handleSelect = (val: any) => {
    console.log(val)
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <QuickSearch data={[
        { key: 'Hello', category: 'text', value: 'hello', onSelect: handleSelect },
      ]}/>
    </div>
  );
}
