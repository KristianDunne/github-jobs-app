import useSWR from 'swr';
import JobCard from '../../../shared/jobCard/';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Positions({ page }) {
  const jobsAPI = `https://jsonp.afeld.me/?url=https://jobs.github.com/positions.json?page=${page}`;
  const { data, error } = useSWR(jobsAPI, fetcher);

  if (!data) {
    return (
      <h2 className="mt-8 text-lg font-bold leading-5 text-center text-very-dark-blue">
        Loading...
      </h2>
    );
  }

  return data.map((job) => <JobCard key={job.id} job={job}></JobCard>);
}
