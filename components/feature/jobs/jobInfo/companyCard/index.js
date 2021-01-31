import Image from 'next/image';
import Link from 'next/link';

export default function CompanyCard({ job }) {
  let { company_logo, company, company_url } = job;

  return (
    <div className="mx-6">
      <div className="relative flex flex-col items-center px-8 pt-10 pb-8 mt-12 space-y-4 break-words bg-white rounded-md cursor-pointer">
        <div className="absolute w-12 h-12 overflow-hidden bg-white -top-6 rounded-2xl">
          <Image
            alt="Job"
            src={company_logo ? company_logo : '/images/logo-placeholder.svg'}
            layout="fill"
            objectFit="cover"></Image>
        </div>

        <h2 className="text-lg font-bold leading-5 text-very-dark-blue">{company}</h2>
        {company_url ? (
          <>
            <Link href={company_url}>
              <a className="leading-4 text-dark-grey">{company_url}</a>
            </Link>

            <Link href={company_url}>
              <button className="py-4 font-bold leading-4 rounded-md w-36 text-violet bg-violet bg-opacity-10 ">
                Company Site
              </button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}
