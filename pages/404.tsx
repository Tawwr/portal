import Link from 'next/link'

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <>
      <main
        className="min-h-screen bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80")',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-lg font-semibold uppercase tracking-wide text-black">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="rounded-2xl bg-black bg-opacity-20 py-10 px-6 sm:p-10 ">
              Uh oh! I think you&apos;re lost.
            </span>
          </h1>
          <p className="mt-2 text-lg font-medium text-white">
            It looks like the page you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-6">
            <Link href="/">
              <a className="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
                Go back home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
