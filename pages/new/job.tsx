import Layout from 'components/layout'
import TwoSidedWrapper from 'components/twoSidedWrapper'
import React from 'react'
import JobStepOne from 'components/jobForm/stepOne.component'
import { websiteValidation } from 'lib'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type Props = {}

const RightComponent = ({ values }: any) => {
  return (
    <div>
      <span>{values.companyName ?? 'Company Name'}</span>
      <h3>{values.companyEmail ?? 'Company Email'}</h3>
      <h1>{values.jobRole ?? 'Job Role'}</h1>
      <p>{values.location ?? 'Location'}</p>
      <p>{values.jobType ?? 'Job Type'}</p>
      <p>{values.experience ?? 'Experience Level'}</p>
      <p>{values.currency ?? 'Currency'}</p>
    </div>
  )
}

const NewJob = (props: Props) => {
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
        LeftComponent={<JobStepOne formik={formik} />}
        RightComponent={<RightComponent values={formik.values} />}
        imageURL={
          'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHB5cmFtaWRzfGVufDB8fDB8fA%3D%3D'
        }
      />
    </Layout>
  )
}

export default NewJob
