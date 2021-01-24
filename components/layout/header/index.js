import Image from 'next/image';
import ThemeToggle from '../../shared/themeToggle/';

export default function Header() {
  return (
    <div className="flex items-start justify-between px-6 pt-8 bg-no-repeat bg-cover bg-header-mobile h-header-mobile">
      <Image alt="Dev Jobs" src="/images/logo.svg" width="115" height="32"></Image>
      <ThemeToggle></ThemeToggle>
    </div>
  );
}
