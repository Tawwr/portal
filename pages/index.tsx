/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from '@headlessui/react'
import {
  BriefcaseIcon,
  CodeIcon,
  CurrencyDollarIcon,
  FlagIcon,
  LocationMarkerIcon,
  StarIcon,
} from '@heroicons/react/solid'
import Layout from 'components/layout'
import { classNames } from 'lib'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Dashboard() {
  const jobs = [
    {
      id: '8161',
      name: 'Software Engineer - Platform for Film Industry',
      company: {
        id: '81612',
        imageUrl:
          'https://cardea.imgix.net/media/companies/logos/rycsyng5xax7h7yiyovr?auto=format&fit=fill&fill=solid&fill-color=white&ixlib=react-9.0.3&h=60&w=60&q=50&dpr=2',
        name: 'Assemble',
      },
    },
    {
      id: '1614',
      name: 'Senior Software Engineer',
      company: {
        id: '16142',
        imageUrl:
          'https://cardea.imgix.net/media/companies/logos/jxfjjasfjkpbrng4m9id?auto=format&fit=fill&fill=solid&fill-color=white&ixlib=react-9.0.3&h=60&w=60&q=50&dpr=2',
        name: 'Milo',
      },
    },
    {
      id: '8114',
      name: 'Software Engineer - Backend',
      company: {
        id: '81142',
        imageUrl:
          'https://cardea.imgix.net/media/companies/logos/v4ju9e8pbgqaep43l6wq.png?auto=format&fit=fill&fill=solid&fill-color=white&ixlib=react-9.0.3&h=60&w=60&q=50&dpr=2',
        name: 'Miami Heat',
      },
    },
    {
      id: '614',
      name: 'Junior Frontend Engineer',
      company: {
        id: '6142',
        imageUrl:
          'https://cardea.imgix.net/media/companies/logos/yd8cjuptskvbcxko0ag7_bOX49LP.png?auto=format&fit=fill&fill=solid&fill-color=white&ixlib=react-9.0.3&h=60&w=60&q=50&dpr=2',
        name: 'Hoppin',
      },
    },
  ]
  return (
    <Layout pageKey="Dashboard">
      <div className="min-h-full bg-gray-100">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}

        <div className="py-10">
          <div className="mx-auto max-w-3xl px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className={'lg:col-span-12'}>
              <div className="mt-4">
                <h1 className="sr-only">Recent jobs</h1>
                <ul role="list" className="space-y-4">
                  {jobs.map((job) => (
                    <Link key={job.id} href="">
                      <li
                        // onClick={() => setSelected('detail')}
                        className="rounded-lg bg-white p-6 px-4 py-6 shadow hover:cursor-pointer "
                      >
                        <article aria-labelledby={'job-title-' + job.id}>
                          <div>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={job.company.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a
                                    href={job.company.id}
                                    className="hover:underline"
                                  >
                                    {job.name}
                                  </a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a href={job.id} className="hover:underline">
                                    {job.company.name}
                                  </a>
                                </p>
                              </div>
                              <div className="flex flex-shrink-0 self-center">
                                <Menu
                                  as="div"
                                  className="relative inline-block text-left"
                                >
                                  <div>
                                    <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                                      <span className="sr-only">
                                        Open options
                                      </span>
                                      <StarIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </Menu.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      <div className="py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? 'bg-gray-100 text-gray-900'
                                                  : 'text-gray-700',
                                                'flex px-4 py-2 text-sm'
                                              )}
                                            >
                                              <StarIcon
                                                className="mr-3 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                              <span>Add to favorites</span>
                                            </a>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? 'bg-gray-100 text-gray-900'
                                                  : 'text-gray-700',
                                                'flex px-4 py-2 text-sm'
                                              )}
                                            >
                                              <CodeIcon
                                                className="mr-3 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                              <span>Embed</span>
                                            </a>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? 'bg-gray-100 text-gray-900'
                                                  : 'text-gray-700',
                                                'flex px-4 py-2 text-sm'
                                              )}
                                            >
                                              <FlagIcon
                                                className="mr-3 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                              <span>Report content</span>
                                            </a>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-1">
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BriefcaseIcon
                                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                Full-time
                              </div>
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <LocationMarkerIcon
                                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                Remote
                              </div>
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <CurrencyDollarIcon
                                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                $120k &ndash; $140k
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  )
}
