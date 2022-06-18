import  Dropdown  from 'components/shared/dropdown'
import PhotoUpload from 'components/shared/photoUpload'
import { useFormik } from 'formik'
import { websiteValidation } from 'lib'
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

  const initialValues = {
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
    companyName: '',
    avatarURL: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(8, 'Must be 8 characters or more'),
      website: websiteValidation,
      linkedIn: websiteValidation,
      github: websiteValidation,
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      handleSteps(2)
    },
  })

  function errorMessage(key: keyof typeof initialValues) {
    return Boolean(formik.touched[key]) && Boolean(formik.errors[key])
      ? formik.errors[key]
      : undefined
  }
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
      <PhotoUpload
        id="avatarURL"
        name="avatarURL"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.avatarURL}
        setFieldValue={(url) => formik.setFieldValue('avatarURL', url)}
      />
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-3">
          <TTextInput
            type="text"
            id="firstName"
            autoComplete="true"
            placeholder="James"
            title="First Name"
            name="firstName"
            error={errorMessage('firstName')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            error={errorMessage('lastName')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            error={errorMessage('email')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
        </div>
      </div>
      <Dropdown options={genderOptions} label="Gender" />
      <div>
        <div className="mt-1">
          <TTextInput
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            title="Password"
            error={errorMessage('password')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
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
                placeholder="https://me.com"
                autoComplete="website"
                title="Website"
                required={false}
                error={errorMessage('website')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                placeholder="linkedin.com/in/me"
                title="LinkedIn"
                required={false}
                error={errorMessage('linkedIn')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
          placeholder="https://github.com/me"
          title="Github"
          required={false}
          error={errorMessage('github')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
      <div className="mt-1">
        <TTextInput
          type="text"
          name="companyName"
          id="companyName"
          autoComplete="job-role"
          placeholder="Enter company name"
          title="Current or most recent employer"
          error={errorMessage('companyName')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyName}
        />
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
            error={errorMessage('jobTitle')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
              error={errorMessage('startDate')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              error={errorMessage('endDate')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
            placeholder="Freelancer Product Designer"
            title="Candidate profile title"
            error={errorMessage('profileTitle')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.profileTitle}
          />
        </div>
      </div>
      <div>
        <div className="mt-1">
          <TTextInput
            id="bio"
            name="bio"
            title="Tell us about yourself"
            error={errorMessage('bio')}
            isTextArea={true}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bio}
          />
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-end gap-5">
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
