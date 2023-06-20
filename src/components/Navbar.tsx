import { useState } from 'react';
import { BsX, BsList } from 'react-icons/bs';
import ThemeToggle from './ThemeToggle';
import clsx from 'clsx';
import LogoDark from '../icons/logo-dark.svg';
import LogoLight from '../icons/logo-light.svg';

import { t } from 'i18next';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu((prev) => !prev);
  const theme = localStorage.getItem('theme');
  const pathname = window.location.pathname;
  const translation = {
    '/': {
      home: 'Home',
      projects: 'Projects',
      resume: 'Resume',
      contact: 'Contact',
      english: 'English',
      chinese: 'Chinese',
      french: 'French',
    },
    '/zh': {
      home: '首頁',
      projects: '專案作品',
      resume: '履歷',
      contact: '與我聯繫',
      english: '英文',
      chinese: '中文',
      french: '法文',
    },
    '/fr': {
      home: 'Accueil',
      projects: 'Projets',
      resume: 'CV',
      contact: 'Contact',
      english: 'Anglais',
      chinese: 'Chinois',
      french: 'Français',
    },
  };

  return (
    <>
      {showMenu && (
        <div
          aria-label="close menu"
          className="fixed left-0 top-0 z-10 h-screen w-screen backdrop-blur"
          onClick={handleShowMenu}
        />
      )}
      <div className="container">
        <nav
          className={clsx(
            'fixed z-20 bg-pearl-bush-500 dark:bg-jet-500 dark:text-pearl-bush-500',
            {
              'left-0 top-0 w-screen border-8 border-vermilion-500 dark:border-asparagus-500':
                showMenu,
              'left-[8px] top-0 w-[calc(100vw-16px)] border-t-8 border-vermilion-500 dark:border-asparagus-500':
                !showMenu,
            }
          )}
        >
          <div className="relative flex items-center justify-end p-3 lg:justify-center lg:py-5 lg:pt-6">
            <a
              href="#"
              aria-label="Navigate to home section"
              className="absolute left-3 top-3"
            >
              <img
                id="logo"
                alt="logo"
                src={theme === 'dark' ? LogoLight : LogoDark}
              />
            </a>
            <div className="hidden lg:block">
              <ul className="flex gap-6">
                <li>
                  <a
                    href="#"
                    aria-label="Navigate to home section"
                    className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500
                  dark:border-jet-500
                  dark:hover:border-asparagus-500"
                  >
                    {translation[pathname].home}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    aria-label="Navigate to projects section"
                    className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                  >
                    {translation[pathname].projects}
                  </a>
                </li>
                <li>
                  <a
                    href="#resume"
                    aria-label="Navigate to resume section"
                    className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                  >
                    {translation[pathname].resume}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    aria-label="Navigate to contact section"
                    className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                  >
                    {translation[pathname].contact}
                  </a>
                </li>
              </ul>
            </div>
            <div className="absolute right-3 top-3 hidden lg:flex lg:items-center">
              <span className="mr-5 flex gap-2">
                <a href="/">{translation[pathname].english}</a>
                {'|'}
                <a href="/fr">{translation[pathname].french}</a>
                {'|'}
                <a href="/zh">{translation[pathname].chinese}</a>
              </span>
              <ThemeToggle />
            </div>

            {showMenu ? (
              <button
                aria-label="close menu"
                onClick={handleShowMenu}
                className="cursor-pointer text-5xl lg:hidden"
              >
                <BsX aria-label="close icon" />
              </button>
            ) : (
              <button
                aria-label="open menu"
                onClick={handleShowMenu}
                className="m-1 block cursor-pointer text-4xl lg:hidden"
              >
                <BsList aria-label="menu icon" />
              </button>
            )}
          </div>
          {showMenu ? (
            <>
              <div>
                <ul className="space-y-5 text-center text-lg">
                  <li onClick={handleShowMenu}>
                    <a
                      href="#"
                      aria-label="Navigate to home section"
                      className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500
                  dark:border-jet-500
                  dark:hover:border-asparagus-500"
                    >
                      {translation[pathname].home}
                    </a>
                  </li>
                  <li onClick={handleShowMenu}>
                    <a
                      href="#projects"
                      aria-label="Navigate to projects section"
                      className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                    >
                      {translation[pathname].projects}
                    </a>
                  </li>
                  <li onClick={handleShowMenu}>
                    <a
                      href="#resume"
                      aria-label="Navigate to resume section"
                      className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                    >
                      {translation[pathname].resume}
                    </a>
                  </li>
                  <li onClick={handleShowMenu}>
                    <a
                      href="#contact"
                      aria-label="Navigate to contact section"
                      className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                    >
                      {translation[pathname].contact}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-end justify-between p-3">
                <p className="flex gap-2">
                  <a href="/">EN</a>
                  {'|'}
                  <a href="/fr">FR</a>
                  {'|'}
                  <a href="/zh">ZH</a>
                </p>
                <ThemeToggle />
              </div>
            </>
          ) : null}
        </nav>
      </div>
    </>
  );
}
