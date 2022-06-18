import Layout from 'components/layout'
import MultiSelect from 'components/shared/multiSelect'
import TTextInput from 'components/shared/textInput'
import TwoSidedWrapper from 'components/layout/twoSidedWrapper'
import React from 'react'

export default function SignUp() {
  const options = [
    {
      id: 1,
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      desc: 'Leslie Alexander is a software engineer at Tawwr.',
    },
    {
      id: 2,
      name: 'Leslie ',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: ' Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More users...
  ]
  function LeftComponent() {
    return (
      <>
        <div>
          <h2 className="mt-4 mb-2 text-4xl font-extrabold text-gray-900">
            Hello World
          </h2>
          <span className="text-gray-400">Hello Two</span>
        </div>

        <div className="mt-8">
          <div>
            <div className="my-10 flex flex-col gap-5">
              <div>
                <MultiSelect options={options} />
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-end gap-5">
              <button
                type="submit"
                className="text-md flex w-[35%] justify-center rounded-md border border-transparent border-black bg-black py-3 px-4 font-medium  tracking-wide text-white shadow-sm hover:border-2 hover:bg-transparent hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  function RightComponent() {
    return (
      <>
        <h3 className="mb-4 text-2xl font-bold text-slate-700">
          Apply to join the Tawwr Talent Portal!
        </h3>
        <p className="">
          The Tawwr Talent Portal is a group of professionals open to new
          opportunities. The portal is designed to help you when you&apos;re
          searching and leave you be when you&apos;re not. Once accepted you can
          expect:
        </p>
        <ul className="my-6 ml-6">
          <li>
            Curated introduction requests from hiring companies vetted by Tawwr
          </li>
          <li>
            The ability to remain anonymous or hide yourself from specific
            companies
          </li>
          <li>
            Absolutely no unwanted conversations, all intro requests are
            fulfilled on your terms
          </li>
        </ul>
        <p>
          Fill out the form to apply. You can expect a response within a couple
          of days. Once accepted, you&apos;ll only be messaged when a company is
          requesting to speak with you.
        </p>
      </>
    )
  }

  return (
    <Layout pageKey="SignUp" needsAuth={false}>
      <TwoSidedWrapper
        LeftComponent={<LeftComponent />}
        RightComponent={<RightComponent />}
        imageURL={
          'https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
        }
      />
    </Layout>
  )
}
