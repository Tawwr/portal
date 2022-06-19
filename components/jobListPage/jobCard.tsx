import { Menu } from '@headlessui/react'
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon
} from '@heroicons/react/solid'
import { Hit } from 'instantsearch.js'
import Link from 'next/link'
import { DummyJob } from 'types'
export default function JobCard({ job }: { job: Hit<DummyJob> }) {
  return (
    <Link href={'jobs/' + job.id}>
      <li className="rounded-lg bg-white p-6 px-4 py-6 shadow hover:cursor-pointer ">
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
                  <a href={job.company.id} className="hover:underline">
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
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                      <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
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
  )
}
