import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import CompanyCard from '../../components/feature/jobs/jobInfo/companyCard';
import DescriptionCard from '../../components/feature/jobs/jobInfo/descriptionCard';
import ApplyCard from '../../components/feature/jobs/jobInfo/applyCard';

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

  const howToApplyLink = data.how_to_apply.match('<a[^>]+href="(.*?)"[^>]*>(.*?)</a>')[1];

  return (
    <>
      <CompanyCard job={data}></CompanyCard>
      <DescriptionCard job={data}></DescriptionCard>
      <ApplyCard job={data}></ApplyCard>
      <div className="p-6 mt-10 bg-white">
        <Link href={howToApplyLink}>
          <button className="w-full py-4 font-bold leading-4 text-white rounded-md bg-violet">
            Apply Now
          </button>
        </Link>
      </div>
    </>
  );
}
