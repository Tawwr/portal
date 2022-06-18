import Layout from 'components/layout'
import TwoSidedWrapper from 'components/twoSidedWrapper'
import React, { useState } from 'react'
import JobStepOne from 'components/jobForm/stepOne.component'
import { websiteValidation } from 'lib'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { classNames } from 'lib/index'

type Props = {}

const RightComponent = ({ values }: any) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-start gap-5',
        values.companyName.length > 0 || values.roleTitle.length > 0
          ? 'text-black'
          : 'text-gray-600'
      )}
    >
      <span>
        <i className="fa-solid fa-camera"></i>{' '}
        {values.companyName.length > 0 ? values.companyName : 'Company Name'}
      </span>
      <h3>
        <i className="fa-solid fa-envelope"></i>{' '}
        {values.companyEmail.length > 0 ? values.companyEmail : 'Company Email'}
      </h3>
      <h1>
        <i className="fa-solid fa-suitcase"></i>{' '}
        {values.roleTitle.length > 0 ? values.roleTitle : 'Role Title'}
      </h1>
      <p>
        <i className="fa-solid fa-location-dot"></i>{' '}
        {values.location ?? 'Location'}
      </p>
      <p>
        <i className="fa-solid fa-business-time"></i>{' '}
        {values.jobType.name ?? 'Job Type'} -{' '}
        {values.experience ?? 'Experience Level'}
      </p>
    </div>
  )
}

const NewJob = (props: Props) => {
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
  const [selectedPeople, setSelectedPeople] = useState([jobOptions[0]])
  const initialValues = {
    companyDetails: '',
    companyEmail: '',
    minSalary: '',
    website: '',
    linkedIn: '',
    maxSalary: '',
    apply_url: '',
    roleTitle: '',
    description: '',
    companyName: '',
    companyAvatarURL: '',
    jobType: jobOptions[0],
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      roleTitle: Yup.string()
        .min(15, 'Must be 15 characters or more')
        .required('Required'),
      minSalary: Yup.number().typeError('Please Insert a vaild Number'),
      maxSalary: Yup.number().typeError('Please Insert a vaild Number'),
      companyName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      companyDetails: Yup.string()
        .max(250, 'Must be 250 characters or less')
        .required('Required'),
      description: Yup.string()
        .max(500, 'Must be 500 characters or less')
        .required('Required'),
      companyEmail: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      apply_url: Yup.string().required('Required'),
      website: websiteValidation,
      linkedIn: websiteValidation,
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Layout pageKey="SignUp" needsAuth={false}>
      <TwoSidedWrapper
        LeftComponent={
          <JobStepOne
            formik={formik}
            selectedPeople={selectedPeople}
            setSelectedPeople={setSelectedPeople}
            jobOptions={jobOptions}
          />
        }
        RightComponent={<RightComponent values={formik.values} />}
        imageURL={
          'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHB5cmFtaWRzfGVufDB8fDB8fA%3D%3D'
        }
      />
    </Layout>
  )
}

export default NewJob
