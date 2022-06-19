import { ExclamationCircleIcon, XIcon } from '@heroicons/react/solid'
import { FormikProps } from 'formik'
import { classNames } from 'lib'
import React from 'react'

type baseProps<T> = {
  large?: boolean
  enableClear?: boolean
  passwordShow?: boolean
  canClearValue?: boolean
  error?: string | string[]
  isTextArea?: boolean
  formik?: FormikProps<T>
  formikKey?: keyof T
}

type textAreaProps<T> = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  baseProps<T>

type textInputProps<T> = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  baseProps<T>

function TTextInput<T>({
  error: errorProp,
  isTextArea = false,
  name,
  required,
  title,
  large = false,
  enableClear = false,
  passwordShow = false,
  canClearValue = false,
  formik,
  formikKey,
  ...props
}: textInputProps<T> | textAreaProps<T>) {
  const error =
    errorProp ||
    (formik &&
    formikKey &&
    Boolean(formik.touched[formikKey]) &&
    Boolean(formik.errors[formikKey])
      ? formik.errors[formikKey]
      : undefined)

  const value =
    formik &&
    formikKey &&
    (formik.values[formikKey] as unknown as
      | string
      | ReadonlyArray<string>
      | number
      | undefined)

  return (
    <>
      <div className="flex justify-between">
        <label
          htmlFor={title}
          className="block text-sm font-medium text-gray-700"
        >
          {title}
        </label>
        {!required && (
          <span className="text-sm text-gray-500" id={name + '-optional'}>
            Optional
          </span>
        )}
      </div>

      <div className="relative mt-1 rounded-md shadow-sm">
        {isTextArea ? (
          <textarea
            name={formikKey as string}
            id={formikKey as string}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            value={value}
            rows={6}
            {...(props as textAreaProps<T>)}
            className={classNames(
              'block w-full rounded-md sm:text-sm',
              error
                ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                : 'block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm'
            )}
          />
        ) : (
          <input
          type={(props as textInputProps<T>).type || 'text'}
            name={formikKey as string}
            id={formikKey as string}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            value={value}
            {...(props as textInputProps<T>)}
            className={classNames(
              'block w-full rounded-md',
              large ? 'text-md py-4' : 'sm:text-sm',
              error
                ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                : 'border-gray-300 focus:border-black focus:ring-black'
            )}
          />
        )}
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
        {canClearValue && !error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <XIcon className="h-5 w-5 text-black" aria-hidden="true" />
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600" id={name + '-error'}>
          &nbsp; {error.toString()}
        </p>
      )}
    </>
  )
}

export default TTextInput
