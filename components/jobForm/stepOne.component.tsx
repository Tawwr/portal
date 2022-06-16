import { ListBox } from 'components/listbox'
import PhotoUpload from 'components/shared/photoUpload'
import { useFormik } from 'formik'
import { websiteValidation } from 'lib'
import React from 'react'
import * as Yup from 'yup'
import TTextInput from '../shared/textInput'

interface Props {
    handleSteps: (value: number) => void
}

const JobStepOne: React.FC<Props> = ({ handleSteps }) => {
    const jobOptions = [
        {
            id: 1,
            name: 'Full Time',
            avatar: '👩‍💻',
        },
        {
            id: 2,
            name: 'Part Time',
            avatar: '👨‍💻',
        },
    ]
    const currency = [
        {
            id: 1,
            name: 'EGP',
            avatar: '🇪🇬',
        },
        {
            id: 2,
            name: 'USD',
            avatar: '🇺🇸',
        },
    ]

    const initialValues = {
        firstName: '',
        companyDetails: '',
        companyEmail: '',
        salaryRange: '',
        website: '',
        linkedIn: '',
        github: '',
        apply_url: '',
        roleTitle: '',
        description: '',
        startDate: '',
        endDate: '',
        companyName: '',
        companyAvatarURL: '',
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
            <h1 className='text-4xl m-auto d-block text-center uppercase font-bold'>New Job</h1>
            <PhotoUpload
                id="companyAvatarURL"
                name="companyAvatarURL"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyAvatarURL}
                setFieldValue={(url) => formik.setFieldValue('companyAvatarURL', url)}
                label="Company Avatar"
            />
            <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="mt-1 col-span-3">
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
                        title="Apply URL"
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
            <ListBox options={jobOptions} label="Job Type" />
            <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="mt-1 col-span-3">
                    <ListBox options={currency} label="Currency" />
                </div>
                <div className="mt-1 col-span-3">
                    <TTextInput
                        type="text"
                        name="salaryRange"
                        id="salaryRange"
                        placeholder="$2500 - $5000"
                        autoComplete="salaryRange"
                        title="Salary Range"
                        required
                        error={errorMessage('salaryRange')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.salaryRange}
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
                        id="checkFirstJob"
                        aria-describedby="checkFirstJob-description"
                        name="checkFirstJob"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="checkFirstJob" className="font-medium text-gray-700">
                        Remote Job ?
                    </label>
                </div>
            </div>
            <div className="col-span-3">

            </div>
            {/* <hr />
      <h3>Start your candidate profile</h3> */}
            <div className="col-span-3">
            </div>
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
