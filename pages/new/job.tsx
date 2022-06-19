import JobForm from 'components/jobPostingPage/jobForm'
import Layout from 'components/layout'
import TwoSidedWrapper from 'components/layout/twoSidedWrapper'
import { FormikProps, useFormik } from 'formik'
import { websiteValidation } from 'lib'
import { classNames } from 'lib/index'
import React from 'react'
import { NewJobPost } from 'types'
import * as Yup from 'yup'

const RightComponent = ({ values }: { values: NewJobPost }) => {
  return (
    <div className={classNames('flex flex-col items-start gap-5')}>
      <h1>
        <i className="fa-solid fa-suitcase"></i>
        {values.jobTitle.length > 0 ? values.jobTitle : 'Role Title'}
      </h1>
      <p>
        <i className="fa-solid fa-location-dot"></i>
        {values.location ?? 'Location'}
      </p>
      <p>
        <i className="fa-solid fa-business-time"></i>
        {values.jobType?.name ?? 'Job Type'} -{' '}
        {values.experience ?? 'Experience Level'}
      </p>
    </div>
  )
}

const NewJob = () => {
  const initialValues: NewJobPost = {
    minSalary: '',
    website: '',
    linkedIn: '',
    maxSalary: '',
    apply_url: '',
    jobTitle: '',
    description: '',
    company: undefined,
    location: '',
    experience: [],
    jobType: undefined,
  }

  const formik: FormikProps<NewJobPost> = useFormik({
    initialValues,
    validationSchema: Yup.object({
      jobTitle: Yup.string().required('Required'),
      minSalary: Yup.number().typeError('Please Insert a valid Number'),
      maxSalary: Yup.number().typeError('Please Insert a valid Number'),
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
        LeftComponent={<JobForm formik={formik} />}
        RightComponent={<RightComponent values={formik.values} />}
        imageURL={
          'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHB5cmFtaWRzfGVufDB8fDB8fA%3D%3D'
        }
      />
    </Layout>
  )
}

export default NewJob
