import { useRouter } from 'next/router';
import useSWR from 'swr';
import CompanyCard from '../../components/feature/jobs/jobInfo/companyCard';
import DescriptionCard from '../../components/feature/jobs/jobInfo/descriptionCard';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const jobsAPI = `https://jsonp.afeld.me/?url=https://jobs.github.com/positions/${id}`;
  const { data, error } = useSWR(jobsAPI, fetcher);

  if (!data) {
    return (
      <h2 className="mt-8 text-lg font-bold leading-5 text-center text-very-dark-blue">
        Loading...
      </h2>
    );
  }

  return (
    <>
      <CompanyCard job={data}></CompanyCard>
      <DescriptionCard job={data}></DescriptionCard>
    </>
  );
}
