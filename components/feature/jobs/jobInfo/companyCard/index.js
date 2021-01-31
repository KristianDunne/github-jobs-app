import Image from 'next/image';
import Link from 'next/link';

export default function CompanyCard({ job }) {
  let { company_logo, company, company_url } = job;

  return (
    <div className="mx-6">
      <div className="relative flex flex-col items-center px-8 pt-10 pb-8 mt-12 space-y-4 break-all bg-white rounded-md md:p-0 md:flex-row md:space-y-0">
        <div className="absolute w-12 h-12 overflow-hidden bg-white -top-6 rounded-2xl md:sticky md:w-36 md:h-36 md:top-0 md:rounded-none ">
          <Image
            alt="Job"
            src={company_logo ? company_logo : '/images/logo-placeholder.svg'}
            layout="fill"
            objectFit="cover"></Image>
        </div>
        <h2 className="text-lg font-bold leading-5 text-very-dark-blue md:hidden md:justify-between ">
          {company}
        </h2>
        {company_url ? (
          <div className="flex flex-col items-center flex-1 space-y-4 md:flex-row md:justify-between md:px-10">
            <div className="flex flex-col md:space-y-4">
              <h2 className="hidden text-lg text-2xl font-bold leading-5 leading-6 text-very-dark-blue md:block ">
                {company}
              </h2>

              <Link href={company_url}>
                <a className="leading-4 text-dark-grey">{company_url}</a>
              </Link>
            </div>

            <Link href={company_url}>
              <button className="py-4 font-bold leading-4 rounded-md w-36 text-violet bg-violet bg-opacity-10 ">
                Company Site
              </button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
