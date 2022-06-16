import * as Yup from 'yup'

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function convertToBoolean(value: string | boolean) {
  return (value + '').toLowerCase() === 'true'
}

export const websiteValidation = Yup.string()
  .matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Enter correct url!'
  )
