
import Dropdown from 'components/shared/dropdown'
import MultiSelect from 'components/shared/multiSelect'
import React, { Dispatch, SetStateAction } from 'react'

import TTextInput from '../shared/textInput'

interface Props {
  formik: any
  selectedPeople: any[]
  setSelectedPeople: Dispatch<SetStateAction<any[]>>
  jobOptions: any[]
}

const JobStepOne: React.FC<Props> = ({
  formik,
  selectedPeople,
  setSelectedPeople,
  jobOptions,
}) => {
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

  function errorMessage(key: string) {
    return Boolean(formik.touched[key]) && Boolean(formik.errors[key])
      ? formik.errors[key]
      : undefined
  }

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-3 mt-1">
          <TTextInput
            type="text"
            name="roleTitle"
            id="roleTitle"
            autoComplete="job-role"
            placeholder="Lead Product Designer"
            title="Role Title"
            error={errorMessage('roleTitle')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.roleTitle}
            required
          />
        </div>
        <div className="col-span-3">
          <TTextInput
            type="text"
            id="companyName"
            autoComplete="companyName"
            placeholder="Facebook, amazon, google..."
            title="Company Name"
            name="companyName"
            error={errorMessage('companyName')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
            required
          />
        </div>
      </div>
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="col-span-3">
          <TTextInput
            type="text"
            name="apply_url"
            id="apply_url"
            autoComplete="apply_url"
            placeholder="https://www.facebook.com/carrers"
            title="Link / email to apply"
            error={errorMessage('apply_url')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.apply_url}
            required
          />
        </div>
        <div className="col-span-3">
          <TTextInput
            id="companyEmail"
            name="companyEmail"
            type="email"
            autoComplete="companyEmail"
            placeholder="hr@amazon.com"
            title="Company Email"
            error={errorMessage('companyEmail')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyEmail}
            required
          />
        </div>
      </div>
      <div className="col-span-3">
        <TTextInput
          type="text"
          id="companyDetails"
          autoComplete="companyDetails"
          placeholder="Details About your company"
          required
          title="Company Details"
          name="companyDetails"
          error={errorMessage('companyDetails')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyDetails}
          isTextArea={true}
        />
      </div>
      <MultiSelect
        options={jobOptions}
        // selectedPeople={selectedPeople}
        // setSelectedPeople={setSelectedPeople}
        label="Job Type"
      />
      <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-5">
        <div className="col-span-1 mt-1">
          <Dropdown options={currency} label="Currency" />
        </div>
        <div className="col-span-2 mt-1">
          <TTextInput
            type="text"
            name="minSalary"
            id="minSalary"
            placeholder="$2500"
            autoComplete="minSalary"
            title="Min Salary"
            required
            error={errorMessage('minSalary')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.minSalary}
          />
        </div>
        <div className="col-span-2 mt-1">
          <TTextInput
            type="text"
            name="maxSalary"
            id="maxSalary"
            placeholder="$5000"
            autoComplete="maxSalary"
            title="Max Salary"
            required
            error={errorMessage('maxSalary')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maxSalary}
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
            id="description"
            name="description"
            title="Job Description"
            error={errorMessage('description')}
            isTextArea={true}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
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

export default JobStepOne
