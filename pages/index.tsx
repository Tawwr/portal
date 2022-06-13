import { Menu, Transition } from '@headlessui/react'
import {
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
  PlusSmIcon,
  StarIcon,
} from '@heroicons/react/solid'

import { ShareIcon } from '@heroicons/react/outline'

import Layout from 'components/layout/layout'
import { classNames } from 'lib'
import { Fragment } from 'react'

const tabs = [
  { name: 'Featured', href: '#', current: true },
  { name: 'Most Recent', href: '#', current: false },
]
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

const job = {
  title: '',
  company: {
    name: '',
    description: '',
    logo: '',
    instagramLink: '',
    facebookLink: '',
    twitterLink: '',
  },
  datePosted: '',
  locations: [''],
  level: [''],
  ApplyLink: '',
  html: `
  <p>The world has changed. Why hasn&rsquo;t insurance?<br />
  <br />
  Kin&rsquo;s mission is to reimagine home insurance&nbsp;<strong>For Every New Normal.</strong>&nbsp;While other insurers struggle to handle a fast-changing world, Kin is built for the future and is prepared to meet its challenges head on while helping our customers do the same.<br />
  <br />
  Kin is proud to be one of BuiltIn Chicago&rsquo;s 2021 and 2022 Best Mid Sized Companies to work for, and Forbes 2021 Best Startup Employers in North America. Simply put, our people are what make us great, and we need forward-thinking, inspired game-changers like you to join us in our mission.<br />
  <br />
  <strong>So, what&rsquo;s the role?</strong><br />
  <br />
  We are looking for a creative, hands-on and versatile Product Designer to be a part of our growing design team. As a Product Designer, you&#39;ll be involved in a wide range of activities, from conducting customer research and prototyping design concepts to shipping new product features in collaboration with other designers, product managers, and engineers. You will also contribute by assisting on various customer facing marketing initiatives as needed and help maintain our design system to ensure design quality and consistency across our product development efforts.<br />
  <br />
  <strong>A day in the life could include:</strong></p>
  
  <ul>
    <li>Think holistically about product design from a bird&rsquo;s eye view and dive into solving problems on the interaction/pixel level with great detail</li>
    <li>Work cross-functionally with stakeholders in business, product, marketing and technology to understand business goals and customer needs</li>
    <li>Use an evidence based approach that leverages data and product analytics to inform design decisions</li>
    <li>Design product solutions with a focus on human centered design techniques</li>
    <li>Create specifications, wireframes, prototypes to communicate design vision</li>
    <li>Use brand guidelines and visual direction to inform and create high-fidelity mockups</li>
    <li>Define UI motion and micro animation guidelines</li>
    <li>Define and contribute to the Kin UI design system for mobile and responsive web</li>
    <li>Work with marketing and content partner to ensure tone and voice in the experience is consistent</li>
    <li>Conduct research and usability testing to validate product designs and inform design decisions</li>
    <li>Collaborate with marketing on customer facing advertising<br />
    &nbsp;</li>
  </ul>
  
  <p><strong>I&rsquo;ve got the skills&hellip; but do I have the necessary ones?</strong></p>
  
  <ul>
    <li>Bachelor&#39;s degree in HCI, graphic design, cognitive science or equivalent experience</li>
    <li>2+ years of experience designing products for mobile and responsive web</li>
    <li>Experience working in a test and learn hypothesis driven product environment preferred</li>
    <li>Experience creating and contributing to design systems and working with other designers</li>
    <li>Passion for making complex business tasks easy through user-centered design</li>
    <li>Empathy for customers and passion for helping them solve difficult problems</li>
    <li>Solid communication skills, both written and verbal</li>
    <li>Learning mindset and willingness to absorb lots of new information and context</li>
    <li>Self-starter personality who&rsquo;s lean and eager to take action</li>
    <li>Extremely collaborative work style thriving in a dynamic team environment</li>
    <li>Facilitation and collaboration skills aimed at aligning cross functional peers</li>
    <li>Experience designing and prototyping with Figma is required</li>
    <li>Portfolio of your work highlighting your design process and examples of product design<br />
    &nbsp;</li>
  </ul>
  
  <p><strong>Oh, and don&rsquo;t worry, we&rsquo;ve got you covered!</strong></p>
  
  <ul>
    <li>Medical, Dental and Vision Insurance (including 100% employer-paid plans)</li>
    <li>Flexible PTO policy</li>
    <li>Very generous equity options and 401K</li>
    <li>Parental Leave</li>
    <li>Continuing education and professional development</li>
    <li>Disability and Life Insurance</li>
    <li>The excitement of joining a high-growth Insurtech company and seeing your work make an impact<br />
    &nbsp;</li>
  </ul>
  
  <p><strong>About Kin</strong><br />
  <br />
  In an industry that hasn&#39;t budged in more than 100 years, our technology transforms the user experience, cuts inefficiencies that waste billions of consumer dollars, and customizes coverage homeowners want. We believe insurance was always meant to be a digital product &ndash; we&rsquo;re making that a reality.<br />
  <br />
  Our approach to the industry makes us unique, and the people at Kin help us excel. We&rsquo;re a team of problem solvers, collaborators, builders, and dreamers who are passionate about creating positive change in the lives of our customers and in our industry. Kin is more than just our name &ndash; it&rsquo;s how we treat each other. That&rsquo;s one of the many reasons we&rsquo;ve been recognized as a great place to work by Built In, Forbes, and Fast Company.<br />
  <br />
  <strong>EEOC Statement</strong><br />
  <br />
  Kin is proud to be an Equal Employment Opportunity and Affirmative Action Employer. We don&#39;t just accept difference &ndash; we honor it, nurture it, and celebrate it. We don&rsquo;t discriminate based on race, religion, color, national origin, gender (including pregnancy, childbirth, or related medical conditions), sexual orientation, gender identity, gender expression, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics.</p>
  `,
}
export default function Example() {
  return (
    <Layout pageKey="Jobs">
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full bg-gray-100">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}

        <div className="py-10">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className="lg:col-span-12 xl:col-span-3">
              <div className="px-4 sm:px-0">
                <div className="sm:hidden">
                  <label htmlFor="question-tabs" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="question-tabs"
                    className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav
                    className="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow"
                    aria-label="Tabs"
                  >
                    {tabs.map((tab, tabIdx) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        aria-current={tab.current ? 'page' : undefined}
                        className={classNames(
                          tab.current
                            ? 'text-gray-900'
                            : 'text-gray-500 hover:text-gray-700',
                          tabIdx === 0 ? 'rounded-l-lg' : '',
                          tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                          'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
                        )}
                      >
                        <span>{tab.name}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            tab.current ? 'bg-rose-500' : 'bg-transparent',
                            'absolute inset-x-0 bottom-0 h-0.5'
                          )}
                        />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="sr-only">Recent questions</h1>
                <ul role="list" className="space-y-4">
                  {questions.map((question) => (
                    <li
                      key={question.id}
                      className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                    >
                      <article
                        aria-labelledby={'question-title-' + question.id}
                      >
                        <div>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={question.author.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a
                                  href={question.author.href}
                                  className="hover:underline"
                                >
                                  {question.author.name}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a
                                  href={question.href}
                                  className="hover:underline"
                                >
                                  <time dateTime={question.datetime}>
                                    {question.date}
                                  </time>
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
                                    <DotsVerticalIcon
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
                          <h2
                            id={'question-title-' + question.id}
                            className="mt-4 text-base font-medium text-gray-900"
                          >
                            {question.title}
                          </h2>
                        </div>
                        <div
                          className="mt-2 space-y-4 text-sm text-gray-700"
                          dangerouslySetInnerHTML={{ __html: question.body }}
                        />
                        <div className="mt-6 flex justify-between space-x-8">
                          <div className="flex items-end text-sm">
                            <span className="inline-flex items-center text-sm">
                              <button
                                type="button"
                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                              >
                                <ShareIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span className="font-medium text-gray-900">
                                  Share
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </main>
            <aside className="hidden xl:col-span-8 xl:block">
              <div className="sticky top-20 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                      <div className="flex flex-row items-center">
                        <div className="mr-4 flex-shrink-0">
                          <img
                            className="h-12 w-auto  rounded-xl"
                            src="https://cardea.imgix.net/media/companies/logos/yd8cjuptskvbcxko0ag7_bOX49LP.png?auto=format&fit=fill&fill=solid&fill-color=white&ixlib=react-9.0.3&h=60&w=60&q=50&dpr=2"
                            alt=""
                          />
                        </div>
                        <h2
                          id="who-to-follow-heading"
                          className=" text-xl font-medium text-gray-900"
                        >
                          Software Engineer - Platform for Film Industry
                        </h2>
                        <button
                          type="button"
                          className="ml-4 inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                        >
                          <ShareIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="mt-6">
                        <dt className="text-sm font-medium text-gray-500">
                          About
                        </dt>
                        <dd
                          className="mt-1 space-y-5 text-sm text-gray-900"
                          dangerouslySetInnerHTML={{ __html: job.html }}
                        />
                      </div>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {whoToFollow.map((user) => (
                            <li
                              key={user.handle}
                              className="flex items-center space-x-3 py-4"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a href={user.href}>{user.name}</a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a href={user.href}>{'@' + user.handle}</a>
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  type="button"
                                  className="inline-flex items-center rounded-full bg-rose-50 px-3 py-0.5 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                >
                                  <PlusSmIcon
                                    className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                                    aria-hidden="true"
                                  />
                                  <span>Follow</span>
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  )
}
