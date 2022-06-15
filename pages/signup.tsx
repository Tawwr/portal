import Layout from 'components/layout'
import StepOne from 'components/registrationForm/stepOne.component'
import StepTwo from 'components/registrationForm/stepTwo.component';
import Link from 'next/link'
import { useState } from 'react'




export default function SignUp() {
  const [step, setStep] = useState(2);

  const handleSteps = (value:number) => {
    setStep(value)
  }
  return (
    <Layout pageKey="SignUp">
      <div className="h-screen	 bg-white">
        <div className="flex min-h-full w-full">
          <div className="flex w-[45%] flex-1 flex-col items-start justify-start py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-16">
            <div className="w-full lg:w-[90%]">
              <div>
                <h2 className="mt-4 mb-2 text-4xl font-extrabold text-gray-900">
                  {step === 2 ? 'What are you looking for ?' : 'Create Your Profile'}
                </h2>
                <span className="text-gray-400">
                {step === 2 ? 'Set your preferences for your next role to help companies find you.' : 'Filling out all the information below helps your profile stand out!'}
                </span>
                {step === 1 && (
                    <p className="mt-6 text-sm text-gray-600">
                      Already Have An Account ?{' '}
                      <Link href="/signin">
                        <a className="text-md font-bold  text-blue-400  hover:text-black">
                          Log in
                        </a>
                      </Link>
                    </p>
                )}
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  
                  {step === 2 ? <StepTwo handleSteps={handleSteps} /> : <StepOne handleSteps={handleSteps} />}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed right-0 hidden h-full w-[58%] flex-col items-center justify-center lg:flex">
            <img
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt=""
            />
            <div className="h-fit w-10/12 rounded-3xl bg-white p-10 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-slate-700">
                Apply to join the Tawwr Talent Portal!
              </h3>
              <p className="text-sm">
                The Tawwr Talent Portal is a group of professionals open to new
                opportunities. The portal is designed to help you when you're
                searching and leave you be when you're not. Once accepted you
                can expect:
              </p>
              <ul className="my-6 ml-6 list-disc">
                <li>
                  Curated introduction requests from hiring companies vetted by
                  Tawwr
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
              <span>
                Fill out the form to apply. You can expect a response within a
                couple of days. Once accepted, you'll only be messaged when a
                company is requesting to speak with you.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
