import Dropdown from 'components/shared/dropdown'
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
      id: 'male',
      name: '🤷🏽‍♂️ Male',
    },
    {
      id: 'female',
      name: '💃🏽 Female',
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

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
      <PhotoUpload
        id="avatarURL"
        name="avatarURL"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.avatarURL}
        setFieldValue={(url) => formik.setFieldValue('avatarURL', url)}
        label="Avatar Photo"
      />
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-3">
          <TTextInput
            formik={formik}
            formikKey="firstName"
            placeholder="James"
            title="First Name"
            required
          />
        </div>

        <div className="col-span-3">
          <TTextInput
            formik={formik}
            formikKey="lastName"
            placeholder="Bond"
            title="Last Name"
            required
          />
        </div>
      </div>
      <Dropdown options={genderOptions} label="Gender" />
      <div>
        <div className="mt-1">
          <TTextInput
            formik={formik}
            formikKey="email"
            type="email"
            placeholder="James.Bond@gmail.com"
            title="Email Address"
            required
          />
        </div>
      </div>
      <div>
        <div className="mt-1">
          <TTextInput
            formik={formik}
            formikKey="password"
            type="password"
            title="Password"
            autoComplete="password"
            required
          />
        </div>
      </div>
      <div>
        <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="col-span-3">
            <div className="mt-1">
              <TTextInput
                formik={formik}
                formikKey="website"
                placeholder="www.me.com"
                title="Website"
              />
            </div>
          </div>

          <div className="col-span-3">
            <div className="mt-1">
              <TTextInput
                formik={formik}
                formikKey="linkedIn"
                placeholder="https://linkedin.com/in/me"
                title="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <TTextInput
          formik={formik}
          formikKey="github"
          placeholder="https://github.com/me"
          title="github"
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
          formik={formik}
          formikKey="companyName"
          placeholder="Enter company name"
          title="Current or most recent employer"
        />
      </div>
      <div className="col-span-3">
        <div className="mt-1">
          <TTextInput
            formik={formik}
            formikKey="jobTitle"
            placeholder="Product Designer"
            title="Job Title"
          />
        </div>
      </div>
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-3">
          <div className="mt-1">
            <TTextInput
              formik={formik}
              formikKey="startDate"
              placeholder="MM/YYYY"
              title="Start Date"
            />
          </div>
        </div>

        <div className="col-span-3 grid gap-2">
          <div className="mt-1">
            <TTextInput
              formik={formik}
              formikKey="endDate"
              placeholder="MM/YYYY"
              title="End Date"
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
            formik={formik}
            formikKey="profileTitle"
            placeholder="Freelancer Product Designer"
            title="Candidate profile title"
          />
        </div>
      </div>
      <div>
        <div className="mt-1">
          <TTextInput
            formik={formik}
            formikKey="bio"
            title="Tell us about yourself"
            isTextArea={true}
            required
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
