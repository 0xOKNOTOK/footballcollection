import React from 'react'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <main class='h-screen bg-gray-100 dark:bg-gray-900'>
      <section class='h-5/6 text-gray-400  body-font relative'>
        <div class='container px-6 py-24 mx-auto'>
          <div class='flex flex-col text-center w-full mb-12'>
            <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-white'>
              Get In Touch
            </h1>
            <p class='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-300'>
              Spotted something wrong with the site? Need a question answered?
              Send me a message!
            </p>
          </div>
          <div class='lg:w-1/2 md:w-2/3 mx-auto'>
            <div class='flex flex-wrap -m-2'>
              <div class='p-2 w-1/2'>
                <div class='relative'>
                  <label
                    for='name'
                    class='leading-7 text-sm text-gray-600 dark:text-gray-200'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    class='w-full bg-gray-300 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 focus:border-red-500 dark:focus:bg-gray-900 focus:bg-gray-300 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-800 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div class='p-2 w-1/2'>
                <div class='relative'>
                  <label
                    for='email'
                    class='leading-7 text-sm text-gray-600 dark:text-gray-200'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    class='w-full bg-gray-300 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 focus:border-red-500 dark:focus:bg-gray-900 focus:bg-gray-300 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-800 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div class='p-2 w-full'>
                <div class='relative'>
                  <label
                    for='message'
                    class='leading-7 text-sm text-gray-700 dark:text-gray-400'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    class='w-full min-h-100 bg-gray-300 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 focus:border-red-500 dark:focus:bg-gray-900 focus:bg-gray-300 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-800 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>
              <div class='p-2 w-full'>
                <button class='flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                    />
                  </svg>
                </button>
              </div>
              <div class='p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center'>
                <a class='text-red-400' href='https://twitter.com/rossgrDEV'>
                  @rossgrDEV
                </a>
                <p class='leading-normal my-5 text-gray-700 dark:text-gray-300'>
                  Get in touch online at <br></br> _______
                </p>
                <span class='inline-flex'>
                  <a class='text-gray-500' href='https://github.com/rossgr'>
                    <svg
                      fill='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                    </svg>
                  </a>
                  <a class='ml-4 text-gray-500'>
                    <svg
                      fill='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                    </svg>
                  </a>
                  <a class='ml-4 text-gray-500'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <rect
                        width='20'
                        height='20'
                        x='2'
                        y='2'
                        rx='5'
                        ry='5'
                      ></rect>
                      <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                    </svg>
                  </a>
                  <a class='ml-4 text-gray-500'>
                    <svg
                      fill='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default ContactPage
