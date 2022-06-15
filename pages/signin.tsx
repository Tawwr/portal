import SignInForm from 'components/signInForm'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
      <div className="h-screen	 bg-gray-100">
        <div className="flex min-h-full items-center justify-center">
          <div className="flex w-[750px] flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="flex h-[80vh] w-full flex-col justify-center rounded-3xl bg-white p-10 shadow-lg lg:w-[100%]">
              <div>
                <Link href="/">
                  <a>
                    <img
                      className="h-20 w-auto"
                      src="/logo.png"
                      alt="Workflow"
                    />
                  </a>
                </Link>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  New User ?{' '}
                  <Link href="/signup">
                    <a className="font-medium text-blue-600 hover:text-black">
                      Create New Account
                    </a>
                  </Link>
                </p>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <SignInForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
