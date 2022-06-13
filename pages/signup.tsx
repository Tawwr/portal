import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { classNames } from 'lib'
import { Fragment, useState } from 'react'

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
    <>
      <div className="h-screen	 bg-white">
        <div className="flex min-h-full">
          <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img className="h-20 w-auto" src="/logo.png" alt="Workflow" />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Create a New Account
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Or{' '}
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-black"
                  >
                    sign in to an existing account
                  </a>
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
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                              Gender
                            </Listbox.Label>
                            <div className="relative">
                              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm">
                                <span className="flex items-center">
                                  <span className="text-2xl">
                                    {selected.avatar}
                                  </span>
                                  <span className="ml-3 block truncate">
                                    {selected.name}
                                  </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                  <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opafirstName-100"
                                leaveTo="opafirstName-0"
                              >
                                <Listbox.Options className="ring-opafirstName-5 absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black focus:outline-none sm:text-sm">
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? 'bg-black text-white'
                                            : 'text-gray-900',
                                          'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <span className="text-2xl">
                                              {person.avatar}
                                            </span>
                                            <span
                                              className={classNames(
                                                selected
                                                  ? 'font-semibold'
                                                  : 'font-normal',
                                                'ml-3 block truncate'
                                              )}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? 'text-white'
                                                  : 'text-black',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                              )}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                    <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="Age"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Age
                        </label>
                        <div className="relative mt-1 flex items-center">
                          <input
                            type="text"
                            name="Age"
                            id="Age"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                          />
                          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                            <div className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                              years
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="weight"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Weight
                        </label>
                        <div className="relative mt-1 flex items-center">
                          <input
                            type="text"
                            name="weight"
                            id="weight"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                          />
                          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                            <div className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                              kgs
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="height"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Height
                        </label>
                        <div className="relative mt-1 flex items-center">
                          <input
                            type="text"
                            name="height"
                            id="height"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                          />
                          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                            <div className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                              cm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtvdXR8ZW58MHx8MHx8"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}
