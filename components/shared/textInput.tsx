import { ExclamationCircleIcon, XIcon } from '@heroicons/react/solid'
import { classNames } from 'lib'
import React from 'react'

interface props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  large?: boolean
  enableClear?: boolean
  passwordShow?: boolean
  error?: { message: string }
}
function TTextInput({
  error,
  large = false,
  enableClear = false,
  passwordShow = false,
  ...props
}: props) {
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-700"
        >
          {props.name}
        </label>
        {!props.required && (
          <span className="text-sm text-gray-500" id={props.name + '-optional'}>
            Optional
          </span>
        )}
      </div>

      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          {...props}
          className={classNames(
            'block w-full rounded-md',
            large ? 'text-md py-4' : 'sm:text-sm',
            error
              ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
              : 'border-gray-300 focus:border-black focus:ring-black'
          )}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
        {props.value && !error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <XIcon className="h-5 w-5 text-black" aria-hidden="true" />
          </div>
        )}
      </div>

      <p className="text-sm text-red-600" id={props.name + '-error'}>
        &nbsp; {error?.message}
      </p>
    </div>
  )
}

export default TTextInput
