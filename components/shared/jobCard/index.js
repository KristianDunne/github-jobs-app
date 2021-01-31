import Image from 'next/image';
import Link from 'next/link';

var moment = require('moment');

export default function JobCard(props) {
  const { id, company_logo, created_at, type, title, company, location } = props.job;
  const createdAt = moment(created_at).fromNow();

  return (
    <Link href={`/job/${id}`}>
      <div className="relative px-8 pt-10 pb-8 mt-12 space-y-4 break-words bg-white rounded-md cursor-pointer ">
        <div className="absolute w-12 h-12 overflow-hidden bg-white -top-6 rounded-2xl">
          <Image
            alt="Job"
            src={company_logo ? company_logo : '/images/logo-placeholder.svg'}
            layout="fill"
            objectFit="cover"></Image>
        </div>
        <p className="leading-4 text-dark-grey">
          {createdAt} <span className="px-3 text-2xl font-bold">.</span> {type}
        </p>
        <h2 className="text-lg font-bold leading-5 text-very-dark-blue">{title}</h2>
        <h3 className="leading-4 text-dark-grey">{company}</h3>
        <p className="text-sm font-bold leading-5 text-violet">{location}</p>
      </div>
    </Link>
  );
}
