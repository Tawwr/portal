import { ListBox } from 'components/listbox'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import TTextInput from '../shared/textInput'

interface Props {
  handleSteps: (value: number) => void
}

const StepOne: React.FC<Props> = ({ handleSteps }) => {
  const genderOptions = [
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
  const user = {
    name: 'Moustafa Elhadary',
    handle: 'deblewis',
    email: 'Moustafa@tawwr.com',
    imageUrl: '/Avatar.jpeg',
  }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      website: '',
      linkedIn: '',
      github: '',
      profileTitle: '',
      jobTitle: '',
      bio: '',
      startDate: '',
      endDate: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      handleSteps(2)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
      <div className="mt-6 flex-grow lg:mt-0 ">
        <p className="text-sm font-medium text-gray-700" aria-hidden="true">
          Upload Photo
        </p>
        <div className="mt-1 lg:hidden">
          <div className="flex items-center">
            <div
              className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
              aria-hidden="true"
            >
              <img
                className="h-full w-full rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </div>
            <div className="ml-5 rounded-md shadow-sm">
              <div className="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                <label
                  htmlFor="mobile-user-photo"
                  className="pointer-events-none relative text-sm font-medium leading-4 text-gray-700"
                >
                  <span>Change</span>
                  <span className="sr-only"> user photo</span>
                </label>
                <input
                  id="mobile-user-photo"
                  name="user-photo"
                  type="file"
                  className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden overflow-hidden rounded-full lg:flex">
          <img
            className="relative ml-5 mt-3 mb-5 h-20 w-20 rounded-full"
            src={user.imageUrl}
            alt=""
          />
          <label
            htmlFor="desktop-user-photo"
            className="absolute inset-0 ml-5 mt-3 mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-black bg-opacity-75 text-xs font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
          >
            <span>Change</span>
            <span className="sr-only"> user photo</span>
            <input
              type="file"
              id="desktop-user-photo"
              name="user-photo"
              className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
            />
          </label>
        </div>
      </div>
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-3">
          <TTextInput
            type="text"
            id="firstName"
            autoComplete="true"
            placeholder="James"
            title="First Name"
            name="firstName"
            error={
              formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : undefined
            }
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>

        <div className="col-span-3">
          <TTextInput
            type="text"
            id="lastName"
            autoComplete="lastName"
            placeholder="Bond"
            required
            title="Last Name"
            name="lastName"
            error={
              formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : undefined
            }
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
      </div>

      <div>
        <div className="mt-1">
          <TTextInput
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="James.Bond@gmail.com"
            title="Email Address"
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : undefined
            }
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
      </div>
      <ListBox options={genderOptions} label="Gender" />
      <div>
        <div className="mt-1">
          <TTextInput
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            title="Password"
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : undefined
            }
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
      </div>
      <div>
        <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="col-span-3">
            <div className="mt-1">
              <TTextInput
                type="text"
                name="website"
                id="Website"
                placeholder="https://markosbahgat.com"
                autoComplete="address-website"
                title="Website"
                required={false}
                error={
                  formik.touched.website && formik.errors.website
                    ? formik.errors.website
                    : undefined
                }
                onChange={formik.handleChange}
                value={formik.values.website}
              />
            </div>
          </div>

          <div className="col-span-3">
            <div className="mt-1">
              <TTextInput
                type="text"
                name="linkedIn"
                id="linkedIn"
                placeholder="linkedin.com/in/markosbahgat"
                autoComplete="address-linkedin"
                title="LinkedIn"
                required={false}
                error={
                  formik.touched.linkedIn && formik.errors.linkedIn
                    ? formik.errors.linkedIn
                    : undefined
                }
                onChange={formik.handleChange}
                value={formik.values.linkedIn}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <TTextInput
          type="text"
          name="github"
          id="github"
          placeholder="https://github.com/markosbahgat"
          autoComplete="address-linkedin"
          title="Github"
          required={false}
          error={
            formik.touched.github && formik.errors.github
              ? formik.errors.github
              : undefined
          }
          onChange={formik.handleChange}
          value={formik.values.github}
        />
      </div>
      <hr />
      <h3>Work Experience</h3>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="checkFirstJob"
            aria-describedby="checkFirstJob-description"
            name="checkFirstJob"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="checkFirstJob" className="font-medium text-gray-700">
            I&apos;m Looking for my first job
          </label>
        </div>
      </div>

      <div className="col-span-3">
        <div className="mt-1">
          <TTextInput
            type="text"
            name="jobTitle"
            id="jobTitle"
            autoComplete="job-role"
            placeholder="Product Designer"
            title="Job Title"
            error={
              formik.touched.jobTitle && formik.errors.jobTitle
                ? formik.errors.jobTitle
                : undefined
            }
            onChange={formik.handleChange}
            value={formik.values.jobTitle}
          />
        </div>
      </div>
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-3">
          <div className="mt-1">
            <TTextInput
              type="text"
              name="startDate"
              id="startDate"
              autoComplete="start-date"
              placeholder="MM/YYYY"
              title="Start Date"
              error={
                formik.touched.startDate && formik.errors.startDate
                  ? formik.errors.startDate
                  : undefined
              }
              onChange={formik.handleChange}
              value={formik.values.startDate}
            />
          </div>
        </div>

        <div className="col-span-3 grid gap-2">
          <div className="mt-1">
            <TTextInput
              type="text"
              name="endDate"
              id="endDate"
              autoComplete="end-date"
              placeholder="MM/YYYY"
              title="End Date"
              error={
                formik.touched.startDate && formik.errors.startDate
                  ? formik.errors.startDate
                  : undefined
              }
              onChange={formik.handleChange}
              value={formik.values.endDate}
            />
          </div>
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="checkWorkingHere"
                aria-describedby="checkWorkingHere-description"
                name="checkWorkingHere"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="checkWorkingHere"
                className="font-medium text-gray-700"
              >
                I&apos;m Currently Working Here
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h3>Start your candidate profile</h3>
      <div className="col-span-3">
        <div className="mt-1">
          <TTextInput
            type="text"
            name="profileTitle"
            id="profileTitle"
            autoComplete="start-date"
            placeholder="Freelancer Product Designer"
            title="Candidate Profile Title"
            error={
              formik.touched.profileTitle && formik.errors.profileTitle
                ? formik.errors.profileTitle
                : undefined
            }
            onChange={formik.handleChange}
            value={formik.values.profileTitle}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="profileTitle"
          className="block text-sm font-medium text-gray-700"
        >
          Tell Us About Yourself
        </label>
        <div className="mt-1">
          <TTextInput
            id="bio"
            name="bio"
            autoComplete="bio-description"
            error={
              formik.touched.bio && formik.errors.bio
                ? formik.errors.bio
                : undefined
            }
            isTextArea={true}
            onChange={formik.handleChange}
            value={formik.values.bio}
          />
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-end gap-5">
        <button
          type="submit"
          className="text-md  flex justify-center rounded-md border-2 border-transparent border-black py-3 px-4 font-medium tracking-wide text-black shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-md flex w-[35%] justify-center rounded-md border border-transparent border-black bg-black py-3 px-4 font-medium  tracking-wide text-white shadow-sm hover:border-2 hover:bg-transparent hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Create Account
        </button>
      </div>
    </form>
  )
}

export default StepOne
