import React from 'react'

const Navigation = () => {
  return (
    <nav class='bg-gray-800 shadow light:bg-white'>
      <div class='container px-5 py-6 mx-auto md:flex'>
        <div class='flex items-center justify-between'>
          <div>
            <a
              class='text-2xl font-bold text-white  light:text-gray-800 lg:text-3xl hover:text-gray-300 light:hover:text-gray-700'
              href='#'
            >
              FC
            </a>
          </div>

          <div class='flex md:hidden'>
            <button
              type='button'
              class=' text-gray-200 light:text-gray-500 hover:text-gray-400 light:hover:text-gray-600 focus:outline-none focus:text-gray-400 dark:focus:text-gray-600'
              aria-label='toggle menu'
            >
              <svg viewBox='0 0 24 24' class='w-6 h-6 fill-current'>
                <path
                  fill-rule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class='w-full md:flex md:items-center md:justify-between'>
          <div class='flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0'>
            <a
              href='#'
              class='px-2 py-1 text-sm font-medium text-gray-200 transition-colors duration-200 transform rounded light:text-gray-700 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
            >
              Home
            </a>
            <a
              href='#'
              class='px-2 py-1 text-sm font-medium text-gray-200 transition-colors duration-200 transform rounded light:text-gray-700 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
            >
              About
            </a>
            <a
              href='#'
              class='px-2 py-1 text-sm font-medium text-gray-200 transition-colors duration-200 transform rounded light:text-gray-700 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
            >
              Contact
            </a>
          </div>

          <div class='relative'>
            <span class='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                class='w-5 h-5 text-gray-400'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </span>

            <input
              type='text'
              class='w-full py-2 pl-10 pr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-500 dark:focus:border-red-500 focus:outline-none '
              placeholder='Search'
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
