import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Resume from "./MarkResume.pdf";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="bg-blue-300 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href={"/"} className="flex items-center">
              {/* <img
                src={Logo}
                className="mr-3 h-6 sm:h-10 bg-black"
                alt="Mark Okoth Logo"
              /> */}
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                MARK OKOTH
              </span>
            </a>
            <div className="flex md:order-2">
              <a href={Resume} rel="noreferrer" target={"_blank"}>
                <button
                  type="button"
                  className="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  RESUME
                </button>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                data-collapse-toggle="mobile-menu-4"
                type="button"
                className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-4"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-4"
            >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href={'/'}
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href={"/"}
                    className="block py-2 pr-4 pl-3 text-white  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href={"#skills"}
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    SKILLS
                  </a>
                </li>
                <li>
                  <a
                    href={"#projects"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    PROJECTS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(e) => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  e={e}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase"
                >
                  <a
                    href={"/"}
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    HOME
                  </a>

                  <a
                    href={"/"}
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    ABOUT
                  </a>

                  <a
                    href="#skills"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Skills
                  </a>

                  <a
                    href={"/"}
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    PROJECTS
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
