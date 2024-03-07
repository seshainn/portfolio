'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tabs from './_components/Tabs'

const Home = () => {
  const [toggleHam, setToggleHam] = useState(false)
  return (
    <div className='flex flex-col min-h-screen bg-white overflow-x-hidden'>
      <nav>
        <div className='flex flex-row justify-between py-4 px-20 fixed w-full bg-blue-300 items-center z-20'>
          <div className='flex flex-row justify-between space-x-1'>
            <h1 className='font-bold text-2xl'>My Portfolio</h1>
          </div>
          <div className='flex flex-row text-md text-gray-800 tracking-wider space-x-8 uppercase max-md:hidden'>
            <Link href='#about' className='py-2 hover:text-gray-300'>
              About
            </Link>
            <Link href='#projects' className='py-2 hover:text-gray-300'>
              Projects
            </Link>
            <Link href='#techstack' className='py-2 hover:text-gray-300'>
              Tech Stack
            </Link>
            <button
              type='button'
              className='border-2 hover:bg-blue-500 border-softRed px-5 rounded-lg uppercase text-sm py-2 tracking-wider'
            >
              Contact
            </button>
          </div>
          <div className='md:hidden'>
            {/* hamburger menu on screens below md */}
            <button
              type='button'
              id='hamburger'
              className='w-[24px] h-[24px] relative z-40'
              onClick={(e) => {
                e.currentTarget.classList.toggle('open-ham')
                setToggleHam(!toggleHam)
              }}
            >
              <span className='hamburger-top bg-black'></span>
              <span className='hamburger-middle bg-black translate-y-[7px]'></span>
              <span className='hamburger-bottom bg-black translate-y-[14px]'></span>
            </button>
          </div>
        </div>
        {toggleHam && (
          <div className='fixed left-0 top-0 bottom-0 flex flex-col w-full min-h-screen self-end py-40 pl-12 space-y-5 text-lg text-white font-alata uppercase bg-black opacity-70 md:hidden'>
            <Link
              href='#about'
              className='hover:text-gray-500'
              onClick={() => {
                const hambutton = document.querySelector('#hamburger')
                if (hambutton) {
                  hambutton.classList.toggle('open-ham')
                  setToggleHam(!toggleHam)
                }
              }}
            >
              About
            </Link>
            <Link
              href='#projects'
              className='hover:text-gray-500'
              onClick={() => {
                const hambutton = document.querySelector('#hamburger')
                if (hambutton) {
                  hambutton.classList.toggle('open-ham')
                  setToggleHam(!toggleHam)
                }
              }}
            >
              Projects
            </Link>
            <Link
              href='#techstack'
              className='hover:text-gray-500'
              onClick={() => {
                const hambutton = document.querySelector('#hamburger')
                if (hambutton) {
                  hambutton.classList.toggle('open-ham')
                  setToggleHam(!toggleHam)
                }
              }}
            >
              Tech Stack
            </Link>
            <Link
              href='#'
              className='hover:text-gray-500'
              onClick={() => {
                const hambutton = document.querySelector('#hamburger')
                if (hambutton) {
                  hambutton.classList.toggle('open-ham')
                  setToggleHam(!toggleHam)
                }
              }}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
      <section id='about'>
        <div className='container flex flex-col-reverse lg:flex-row mx-auto p-6 lg:mb-0'>
          <div className='flex flex-col mt-40 lg:w-1/2'>
            <h1 className='font-semibold font-sans text-3xl text-black text-center lg:text-4xl'>
              Seshagiri Innamuri
            </h1>
            <p className='max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl '>
              Full stack web developer
            </p>
          </div>
        </div>
      </section>

      <section id='projects'>
        <div className='container mx-auto'>
          <h2 className='text-4xl mt-20 p-6 font-semibold text-center'>
            Projects
          </h2>
          <Tabs />
        </div>
      </section>

      <section id='techstack'>
        <div className='container mx-auto'>
          <h2 className='mt-20 text-3xl font-semibold text-center md:text-4xl'>
            Tech Stack
          </h2>
          <p className='max-w-lg px-6 mx-auto text-center text-graishBlue'>
            What I know
          </p>
        </div>
        <div className='container mx-auto px-20 mb-32'>
          <div className='max-w-2xl m-8 mx-auto overflow-hidden'>
            <div className='py-1 border-b outline-none group' tabIndex={1}>
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                <div className='transition duration-500 ease group-hover:text-red-500'>
                  What is Bookmark?
                </div>

                <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='12'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='3'
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>

              <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-900'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            <div className='py-1 border-b outline-none group' tabIndex={2}>
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                <div className='transition duration-500 ease group-hover:text-red-500'>
                  How can I request a new browser?
                </div>

                <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='12'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='3'
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>

              <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            <div className='py-1 border-b outline-none group' tabIndex={3}>
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                <div className='transition duration-500 ease group-hover:text-red-500'>
                  Is ther a mobile app?
                </div>

                <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='12'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='3'
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>

              <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            <div className='py-1 border-b outline-none group' tabIndex={4}>
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                <div className='transition duration-500 ease group-hover:text-red-500'>
                  What about other Chromium browsers
                </div>

                <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='12'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='3'
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>

              {/* -- Tab Inner Content -- */}
              <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
