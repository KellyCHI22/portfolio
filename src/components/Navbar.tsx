import { useState } from 'react';
import { BsX, BsList } from 'react-icons/bs';
import ThemeToggle from './ThemeToggle';
import clsx from 'clsx';
import LogoDark from '../icons/logo-dark.svg';
import LogoLight from '../icons/logo-light.svg';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu((prev) => !prev);
  const theme = localStorage.getItem('theme');

  return (
    <>
      {showMenu && (
        <div
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
          <div className="flex items-center justify-between p-3">
            <a href="#">
              <img id="logo" src={theme === 'dark' ? LogoLight : LogoDark} />
            </a>
            <div className="hidden lg:block">
              <ul className="flex gap-6">
                <li>
                  <a
                    href="#"
                    className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500
                  dark:border-jet-500
                  dark:hover:border-asparagus-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#resume"
                    className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative hidden lg:block">
              <span className="absolute right-12 top-3 w-28">
                ENG | FR | CN
              </span>
              <ThemeToggle />
            </div>

            {showMenu ? (
              <BsX
                className="block cursor-pointer text-5xl lg:hidden"
                onClick={handleShowMenu}
              />
            ) : (
              <BsList
                className="m-1 block cursor-pointer text-4xl lg:hidden"
                onClick={handleShowMenu}
              />
            )}
          </div>
          {showMenu ? (
            <>
              <div>
                <ul className="space-y-5 text-center text-lg">
                  <li onClick={handleShowMenu}>
                    <a
                      href="#"
                      className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500
                  dark:border-jet-500
                  dark:hover:border-asparagus-500"
                    >
                      Home
                    </a>
                  </li>
                  <li onClick={handleShowMenu}>
                    <a
                      href="#projects"
                      className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                    >
                      Projects
                    </a>
                  </li>
                  <li onClick={handleShowMenu}>
                    <a
                      href="#resume"
                      className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                    >
                      Resume
                    </a>
                  </li>
                  <li onClick={handleShowMenu}>
                    <a
                      href="#contact"
                      className="border-b-4 border-pearl-bush-500 font-semibold hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-asparagus-500"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-end justify-between p-3">
                <p>ENG | FR | CN</p>
                <ThemeToggle />
              </div>
            </>
          ) : null}
        </nav>
      </div>
    </>
  );
}
