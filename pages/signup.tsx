import Layout from 'components/layout'
import StepOne from 'components/registrationForm/stepOne.component'
import StepTwo from 'components/registrationForm/stepTwo.component'
import TwoSidedWrapper from 'components/twoSidedWrapper'
import Link from 'next/link'
import { useState } from 'react'

export default function SignUp() {
  const [step, setStep] = useState(1)

  const handleSteps = (value: number) => {
    setStep(value)
  }
  const displayTitle = () => {
    switch (step) {
      case 1:
        return 'Create Your Profile'
      case 2:
        return 'What are you looking for ?'
      default:
        return ''
    }
  }
  const displaySubTitle = () => {
    switch (step) {
      case 1:
        return 'Filling out all the information below helps your profile stand out!'
      case 2:
        return 'Set your preferences for your next role to help companies find you.'
      default:
        return ''
    }
  }
  const displayStep = () => {
    switch (step) {
      case 1:
        return <StepOne handleSteps={handleSteps} />
      case 2:
        return <StepTwo handleSteps={handleSteps} />
      default:
        return <StepOne handleSteps={handleSteps} />
    }
  }

  function LeftComponent() {
    return (
      <>
        <div>
          <h2 className="mt-4 mb-2 text-4xl font-extrabold text-gray-900">
            {displayTitle()}
          </h2>
          <span className="text-gray-400">{displaySubTitle()}</span>
          {step === 1 && (
            <p className="mt-6 text-sm text-gray-600">
              Already Have An Account ?
              <Link href="/signin">
                <a className="text-md font-bold  text-black  hover:text-gray-700">
                  Log in
                </a>
              </Link>
            </p>
          )}
        </div>

        <div className="mt-8">
          <div className="mt-6">{displayStep()}</div>
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
