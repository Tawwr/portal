import { Menu, Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { classNames } from 'lib'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { Fragment } from 'react'

const user = {
  name: 'Moustafa Elhadary',
  email: 'moustafa@tawwr.com',
  imageUrl: '/Avatar.jpeg',
}
const navigation = [{ name: 'Dashboard', href: '/' }] as const

const invisiblePages = [
  { name: 'Detail', href: '/' },
  { name: 'SignUp', href: '/signup' },
  { name: 'SignIn', href: '/signin' },
] as const

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '#' },
] as const

type props = {
  children: React.ReactNode
  pageKey: typeof navigation[number]['name'] &
    typeof userNavigation[number]['name'] &
    typeof invisiblePages[number]['name']
  needsAuth?: boolean
}

export default function Layout({ children, pageKey, needsAuth = true }: props) {
  return (
    <>
      <NextSeo
        title={'Tawwr Hiring Portal - ' + pageKey}
        description="Hire the best, fast."
        canonical="https://tawwr-portal.vercel.app/"
        openGraph={{
          url: 'https://tawwr-portal.vercel.app/',
          title: 'Tawwr Hiring Portal',
          description: 'Hire the best, fast.',
          images: [
            {
              url: '/og.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          site_name: 'tawwr.com',
        }}
        twitter={{
          handle: '@joinTawwr',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 bg-white shadow">
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <Popover className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <a>
                      <img
                        className="h-8 w-auto"
                        src="/logo.png"
                        alt="Workflow"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"></div>
              {needsAuth && (
                <>
                  <div className="flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Transition.Root as={Fragment}>
                    <div className="lg:hidden">
                      <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Overlay
                          className="fixed inset-0 z-20 bg-black bg-opacity-25"
                          aria-hidden="true"
                        />
                      </Transition.Child>

                      <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel
                          focus
                          className="absolute top-0 right-0 z-30 w-full max-w-none origin-top transform p-2 transition"
                        >
                          <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="pt-3 pb-2">
                              <div className="flex items-center justify-between px-4">
                                <div>
                                  <img
                                    className="h-8 w-auto"
                                    src="/logo.png"
                                    alt="Workflow"
                                  />
                                </div>
                                <div className="-mr-2">
                                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>
                                </div>
                              </div>
                            </div>
                            <div className="pt-4 pb-2">
                              <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={user.imageUrl}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3">
                                  <div className="text-base font-medium text-gray-800">
                                    {user.name}
                                  </div>
                                  <div className="text-sm font-medium text-gray-500">
                                    {user.email}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                  >
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition.Child>
                    </div>
                  </Transition.Root>
                </>
              )}
              {needsAuth && (
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
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
                      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link href={item.href}>
                                <a
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              )}
            </Popover>
          </div>
        </header>

        <main className="relative flex-grow bg-gray-100">{children}</main>
      </div>
    </>
  )
}
