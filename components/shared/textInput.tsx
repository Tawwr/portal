import { ExclamationCircleIcon, XIcon } from '@heroicons/react/solid'
import { classNames } from 'lib'
import React from 'react'

type baseProps = {
  large?: boolean
  enableClear?: boolean
  passwordShow?: boolean
  canClearValue?: boolean
  error?: string
  isTextArea?: boolean
}

type textAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  baseProps

type textInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  baseProps

function TTextInput({
  error,
  isTextArea = false,
  name,
  required,
  title,
  large = false,
  enableClear = false,
  passwordShow = false,
  canClearValue = false,
  ...props
}: textInputProps | textAreaProps) {
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
            {...(props as textAreaProps)}
            rows={6}
            className={classNames(
              'block w-full rounded-md sm:text-sm',
              error
                ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                : 'block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm'
            )}
          />
        ) : (
          <input
            {...(props as textInputProps)}
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
          &nbsp; {error}
        </p>
      )}
    </>
  )
}

export default TTextInput
