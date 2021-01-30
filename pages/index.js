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
      <div className="px-6 top-24">{pages}</div>
    </div>
  );
}
