import Dropdown from 'components/shared/dropdown'
import MultiSelect from 'components/shared/multiSelect'
import React from 'react'
import TTextInput from '../shared/textInput'
import { NewJobPost } from 'types'
import { FormikProps } from 'formik'

interface Props {
  formik: FormikProps<NewJobPost>
}

const JobForm: React.FC<Props> = ({ formik }) => {
  const companies = [
    {
      id: 'Microsoft',
      name: 'Microsoft',
      details: 'Microsoft is a company that makes computers and software',
      avatar:
        'https://shoutcommunications.co.uk/wp-content/uploads/2019/06/new-microsoft-logo-SIZED-SQUARE-1-e1560780411673.jpg',
    },
    {
      id: 'Google',
      name: 'Google',
      details: 'Google is a company that makes computers and software',
      avatar:
        'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png',
    },
    {
      id: 'Facebook',
      name: 'Facebook',
      details: 'Facebook is a company that makes computers and software',
      avatar:
        'https://logos-world.net/wp-content/uploads/2021/11/Meta-Symbol.png',
    },
  ]
  const currency = [
    {
      id: 'EGP',
      name: '🇪🇬 EGP',
    },
    {
      id: 'USD',
      name: '🇺🇸 USD',
    },
  ]

  const jobOptions = [
    {
      id: 1,
      name: 'Full Time',
    },
    {
      id: 2,
      name: 'Part Time',
    },
  ]

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-6 mt-1">
          <TTextInput
            formik={formik}
            formikKey="jobTitle"
            placeholder="Name of position"
            title="Job Title"
            required
          />
        </div>
      </div>
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-6">
          <TTextInput
            formik={formik}
            formikKey="apply_url"
            placeholder="https://www.facebook.com/carrers"
            title="Link / email to apply"
            required
          />
        </div>
      </div>
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-6">
          <Dropdown
            options={companies}
            label="Company"
            placeholder="Search or enter company"
          />
        </div>
      </div>
      <Dropdown options={jobOptions} label="Job Type" />
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-2 mt-1">
          <Dropdown options={currency} label="Currency" />
        </div>
        <div className="col-span-2 mt-1">
          <TTextInput
            formik={formik}
            formikKey="minSalary"
            placeholder="$2500"
            title="Min Salary"
            required
          />
        </div>
        <div className="col-span-2 mt-1">
          <TTextInput
            formik={formik}
            formikKey="maxSalary"
            placeholder="$5000"
            title="Max Salary"
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
                placeholder="https://me.com"
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
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="checkIsRemoteJob"
            aria-describedby="checkIsRemoteJob-description"
            name="checkIsRemoteJob"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="checkIsRemoteJob"
            className="font-medium text-gray-700"
          >
            Is this a remote job?
          </label>
        </div>
      </div>
      <div className="col-span-3"></div>
      {/* <hr />
      <h3>Start your candidate profile</h3> */}
      <div className="col-span-3"></div>
      <div>
        <div className="mt-1">
          <TTextInput
            formik={formik}
            formikKey="description"
            name="description"
            title="Job Description"
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
          Submit
        </button>
      </div>
    </form>
  )
}

export default JobForm
