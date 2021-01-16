import { useState } from 'react';

export default function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className="flex items-center space-x-4">
      <img src="/images/light-theme-icon.svg"></img>
      <div
        className="flex items-center items-center bg-white h-6 w-12 rounded-xl px-1.5 "
        style={{
          justifyContent: darkTheme ? 'flex-end' : 'flex-start',
        }}>
        <div
          className="h-3.5 w-3.5 bg-violet rounded-full hover:bg-light-violet cursor-pointer"
          onClick={() => setDarkTheme(!darkTheme)}></div>
      </div>
      <img src="/images/dark-theme-icon.svg"></img>
    </div>
  );
}
