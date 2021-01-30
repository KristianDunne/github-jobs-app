import Head from 'next/head';
require('typeface-kumbh-sans');
import { useState } from 'react';
import Positions from '../components/feature/jobs/positions';

export default function Home() {
  const [pageIndex, setPageIndex] = useState(2);
  const pages = [<Positions page={1} key={1} />];

  for (let i = 2; i < pageIndex; i++) {
    pages.push(<Positions page={i} key={i} />);
  }

  return (
    <div>
      <Head>
        <title>devjobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center mb-16">
        <div className="mx-6 top-24 md:grid-cols-2 md:gap-2.5 md:grid md:px-10 xl:grid-cols-3 xl:gap-8 lg:px-40">
          {pages}
        </div>
        <button
          className="w-32 py-4 mt-8 font-bold leading-4 text-white rounded-md bg-violet"
          onClick={() => setPageIndex(pageIndex + 1)}>
          Load More
        </button>
      </div>
    </div>
  );
}
