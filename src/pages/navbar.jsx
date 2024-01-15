import { useState } from 'react';
import { Link, animateScroll as scroller } from 'react-scroll';

export default function NavBar({ show }) {
  const [navbar, setNavbar] = useState(false);

  const handleScrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 700,
      smooth: 'easeInOutQuart',
    });
  };

  return (
      <nav
        className={`fixed w-full -my-12 lg:-my-8 bg-white dark:bg-gray-800 z-10 transition-transform ${
          show ? 'translate-y-0' : '-translate-y-16'
      }`}
    >
      <div className="justify-between px-4 md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-5 md:py-5 md:block">
            <Link
              to="mainContent"
              smooth={true}
              offset={-60} // Adjust this offset as needed
              onClick={() => handleScrollTo('mainContent')}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300 cursor-pointer">
                Hey There!
              </h2>
            </Link>
            <div className="md:hidden">
            <button
  className="p-2 text-gray-800 dark:text-gray-300  rounded-md outline-none focus:border-gray-400 focus:border"
  onClick={() => setNavbar(!navbar)}
>
  {navbar ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-black" // Change the color to black
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-black" // Change the color to black
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )}
</button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer">
              <li className="text-gray-800 dark:text-gray-300  hover:text-indigo-200">
                <Link
                  to="mainContent"
                  smooth={true}
                  offset={-50} // Adjust this offset as needed
                  onClick={() => handleScrollTo('mainContent')}
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-800 dark:text-gray-300  hover:text-indigo-200">
                <Link
                  to="portfolio"
                  smooth={true}
                  onClick={() => handleScrollTo('portfolio')}
                >
                  Portfolio
                </Link>
              </li>
              <li className="text-gray-800 dark:text-gray-300  hover:text-indigo-200">
                <Link
                  to="contactMe"
                  smooth={true}
                  onClick={() => handleScrollTo('contactMe')}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
