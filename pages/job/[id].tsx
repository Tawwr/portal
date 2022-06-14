import { ShareIcon } from '@heroicons/react/outline'
import {
  ArrowNarrowLeftIcon,
  BriefcaseIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/solid'
import Layout from 'components/layout'

function JobDetail() {
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
    companyPosted: '',
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
        <li>Conduct research and usability testing to valicompany product designs and inform design decisions</li>
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
  return (
    <Layout pageKey="Detail">
      <div className="min-h-full bg-gray-100">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}

        <div className="py-10">
          <div className="mx-auto max-w-3xl px-6 lg:grid lg:max-w-full lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className={'lg:col-span-12 xl:col-span-8'}>
              <div className="mb-6 flex">
                <a
                  href="#"
                  className="group inline-flex space-x-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  <ArrowNarrowLeftIcon
                    //   onClick={() => setSelected('list')}
                    className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-600"
                    aria-hidden="true"
                  />
                  <span>Back to Jobs</span>
                </a>
              </div>
              <div className="sticky top-20 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                      <div className="flex flex-row items-center justify-between">
                        <div className="mr-4 flex flex-shrink-0 flex-row items-center">
                          <div>
                            <img
                              className="h-12 w-auto  rounded-xl mr-4"
                              src="https://cardea.imgix.net/media/companies/logos/yd8cjuptskvbcxko0ag7_bOX49LP.png?auto=format&fit=fill&fill=solid&fill-color=white&ixlib=react-9.0.3&h=60&w=60&q=50&dpr=2"
                              alt=""
                            />
                          </div>
                          <h2
                            id="who-to-follow-heading"
                            className=" text-xl font-medium text-gray-900"
                          >
                            Junior Frontend Engineer
                          </h2>
                          <button
                            type="button"
                            className="ml-4 inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                          >
                            <ShareIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>

                        <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 items-center">
                          
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                          >
                            
                            <span>Apply now</span>
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-8">
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
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <CalendarIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          posted 2 months ago
                        </div>
                      </div>

                      <div className="mt-6">
                        <dd
                          className="mt-1 space-y-5 text-sm text-gray-900"
                          dangerouslySetInnerHTML={{ __html: job.html }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default JobDetail
