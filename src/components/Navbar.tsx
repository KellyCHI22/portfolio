import { useState } from 'react';
import { BsX, BsList } from 'react-icons/bs';
import ThemeToggle from './ThemeToggle';
import clsx from 'clsx';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu((prev) => !prev);
  const logoTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';

  return (
    <>
      {showMenu && (
        <div
          className="backdrop-blur w-screen h-screen fixed top-0 left-0 z-10"
          onClick={handleShowMenu}
        />
      )}

      <nav
        className={clsx(
          'fixed bg-alabaster-500  dark:bg-jet-500 dark:text-alabaster-500 z-20',
          {
            'border-8 border-vermilion-500 top-0 left-0 w-screen': showMenu,
            'border-t-8 top-0 border-vermilion-500 left-[8px] w-[calc(100vw-16px)]':
              !showMenu,
          }
        )}
      >
        <div className="flex justify-between p-3 items-center">
          <a href="#">
            <img id="logo" src={`/logo-${logoTheme}.svg`} />
          </a>

          {showMenu ? (
            <BsX
              className="text-5xl block cursor-pointer"
              onClick={handleShowMenu}
            />
          ) : (
            <BsList
              className="text-4xl block m-1 cursor-pointer"
              onClick={handleShowMenu}
            />
          )}
        </div>
        {showMenu ? (
          <>
            <div>
              <ul className="text-center space-y-5 text-lg">
                <li onClick={handleShowMenu}>
                  <a
                    href="#"
                    className="font-semibold border-b-4 border-alabaster-500 hover:border-vermilion-500
                  dark:border-jet-500
                  dark:hover:border-vermilion-500"
                  >
                    Home
                  </a>
                </li>
                <li onClick={handleShowMenu}>
                  <a
                    href="#projects"
                    className="font-semibold border-b-4 border-alabaster-500 hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-vermilion-500"
                  >
                    Projects
                  </a>
                </li>
                <li onClick={handleShowMenu}>
                  <a
                    href="#resume"
                    className="font-semibold border-b-4 border-alabaster-500 hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-vermilion-500"
                  >
                    Resume
                  </a>
                </li>
                <li onClick={handleShowMenu}>
                  <a
                    href="#contact"
                    className="font-semibold border-b-4 border-alabaster-500 hover:border-vermilion-500 dark:border-jet-500
                  dark:hover:border-vermilion-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-end p-3">
              <p>ENG | CN</p>
              <ThemeToggle />
            </div>
          </>
        ) : null}
      </nav>
    </>
  );
}
