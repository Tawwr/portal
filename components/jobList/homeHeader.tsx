import JobSearchBox from './jobSearchBox'
export default function HomeHeader() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 opacity-50 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Taking your career to the next level?{' '}
          </h1>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 ">
          <div className="flex flex-col rounded-2xl bg-white shadow-xl">
            <div className="relative flex-1 px-6 pt-12 pb-8 md:px-8">
              <JobSearchBox />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
