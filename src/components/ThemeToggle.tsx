// reference: https://www.kevinzunigacuellar.com/blog/dark-mode-in-astro/
import { useEffect, useRef, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
  // change favicon according to theme change
  const faviconRef = useRef(document.querySelector('link[rel="icon"]'));
  const logoRef = useRef(document.querySelector('#logo'));

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      faviconRef.current.setAttribute('href', `/logo-light.svg`);
      logoRef.current.setAttribute('src', `/logo-light.svg`);
    } else {
      document.documentElement.classList.remove('dark');
      faviconRef.current.setAttribute('href', `/logo-dark.svg`);
      logoRef.current.setAttribute('src', `/logo-dark.svg`);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={handleClick}
      className="p-3 text-2xl bg-jet-500 rounded-full text-pearl-bush-500 dark:bg-pearl-bush-500 dark:text-jet-500"
    >
      {theme === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </button>
  );
}
