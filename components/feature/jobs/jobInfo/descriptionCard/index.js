import Link from 'next/link';
var moment = require('moment');

import styles from './styles.module.css';

export default function CompanyCard({ job }) {
  const { created_at, type, title, location, description, how_to_apply } = job;

  const createdAt = moment(created_at).fromNow();

  const howToApplyLink = job.how_to_apply.match('<a[^>]+href="(.*?)"[^>]*>(.*?)</a>')[1];

  return (
    <div className="mx-6">
      <div className="flex flex-col px-8 pt-10 pb-8 mt-6 break-words bg-white rounded-md">
        <div className="space-y-2 ">
          <p className="leading-4 text-dark-grey">
            {createdAt} <span className="px-3 text-2xl font-bold">.</span> {type}
          </p>
          <h2 className="text-lg font-bold leading-5 text-very-dark-blue">{title}</h2>
          <p className="text-sm font-bold leading-5 text-violet">{location}</p>
        </div>
        <Link href={howToApplyLink}>
          <button className="w-full py-4 mt-8 font-bold leading-4 text-white rounded-md cursor-pointer bg-violet">
            Apply Now
          </button>
        </Link>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  );
}
