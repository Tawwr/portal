import Layout from 'components/layout/layout'
import { ListBox } from 'components/listbox.components'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const people = [
  {
    id: 1,
    name: 'Male',
    avatar: '🤷🏽‍♂️',
  },
  {
    id: 2,
    name: 'Female',
    avatar: '💃🏽',
  },
]

export default function SignUp() {
  const [selected, setSelected] = useState(people[0])

  return (
    <Layout pageKey="SignUp">
      <div className="h-screen	 bg-white">
        <div className="flex w-full min-h-full">
          <div className="flex flex-1 flex-col items-start justify-start py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-16 w-[45%]">
            <div className="w-full lg:w-[90%]">
              <div>
                <h2 className="mt-4 mb-2 text-4xl font-extrabold text-gray-900">
                  Create Your Profile
                </h2>
                <span className='text-gray-400'>Filling out all the information below helps your profile stand out!</span>
                <p className="mt-6 text-sm text-gray-600">
                  Already Have An Account ?{' '}
                  <Link href="/signin">
                    <a className="text-md font-bold  text-blue-400  hover:text-black">
                      Log in
                    </a>
                  </Link>
                </p>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="col-span-3">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                            placeholder='James'
                          />
                        </div>
                      </div>

                      <div className="col-span-3">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                            placeholder='Bond'
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder='James.Bond@gmail.com'
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="col-span-3">
                          <label
                            htmlFor="Website"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Website
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Website"
                              id="Website"
                              autoComplete="address-level2"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                              placeholder='https://markosbahgat.com'
                            />
                          </div>
                        </div>

                        <div className="col-span-3">
                          <label
                            htmlFor="LinkedIn"
                            className="block text-sm font-medium text-gray-700"
                          >
                            LinkedIn
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="LinkedIn"
                              id="LinkedIn"
                              autoComplete="address-level1"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                              placeholder='linkedin.com/in/markosbahgat'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3>Work Experience</h3>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="comments" className="font-medium text-gray-700">
                          I'm Looking
                        </label>
                        <span id="comments-description" className="text-gray-500">
                          <span className="sr-only">New comments </span> for my first job
                        </span>
                      </div>
                    </div>
                    <ListBox />
                    <div className="col-span-3">
                      <label
                        htmlFor="jobTitle"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Title
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="jobTitle"
                          id="jobTitle"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                          placeholder='Product Designer'
                        />
                      </div>
                    </div>
                    <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="col-span-3">
                        <label
                          htmlFor="startDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Start Date
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="startDate"
                            id="startDate"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                            placeholder='MM/YYYY'
                          />
                        </div>
                      </div>

                      <div className="col-span-3">
                        <label
                          htmlFor="endDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          End Date
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="endDate"
                            id="endDate"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                            placeholder='MM/YYYY'
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3>Start your candidate profile</h3>
                    <div className="col-span-3">
                      <label
                        htmlFor="profileTitle"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Candidate Profile Title
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="profileTitle"
                          id="profileTitle"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                          placeholder='Freelancer Product Designer'
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        Tell Us About Yourself
                      </label>
                      <div className="mt-1">
                        <textarea
                          rows={6}
                          name="comment"
                          id="comment"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className='w-full flex flex-row items-center justify-end gap-5'>
                      <button
                        type="submit"
                        className="flex  justify-center rounded-md border border-transparent hover:text-white text-black border-2 border-black py-3 tracking-wide px-4 text-md font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex w-[35%] justify-center rounded-md border tracking-wide font-medium border-transparent bg-indigo-500 py-3 px-4 text-md  text-white shadow-sm hover:bg-transparent hover:border-2 border-indigo-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      >
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center fixed h-full w-[58%] object-cover right-0 bg-gray-100">
              <div className='w-10/12 bg-white h-fit rounded-3xl shadow-lg p-10'>
              <h3 className='text-2xl text-slate-700 font-bold mb-4'>Apply to join Shrimp Society Talent Collective!</h3>
              <p className='text-sm'>Talent collectives are groups of professionals open to new opportunities. They’re designed to help you when you’re searching and leave you be when you’re not. Once accepted you can expect:</p>
              <ul className='list-disc my-6 ml-6'>
                <li>Curated introduction requests from hiring companies vetted by The Shrimp Society</li>
                <li>The ability to remain anonymous or hide yourself from specific companies</li>
                <li>Absolutely no unwanted conversations, all intro requests are fulfilled on your terms</li>
              </ul>
              <span>
              Fill out the form to apply. You can expect a response within a couple of days. Once accepted, you’ll only be messaged when a company is requesting to speak with you.
              </span>
              <p className='mt-10'>Developed By:{'>'} <mark>Markos</mark></p>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
