import Head from 'next/head';
require('typeface-kumbh-sans');
import useSWR from 'swr';
import JobCard from '../components/shared/jobCard';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const jobsAPI = 'https://jsonp.afeld.me/?url=https://jobs.github.com/positions.json';
  const { data, error } = useSWR(jobsAPI, fetcher);
  return (
    <div>
      <Head>
        <title>devjobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-6 top-24">
        {data ? data.map((job) => <JobCard key={job.id} job={job}></JobCard>) : null}
      </div>
    </div>
  );
}
