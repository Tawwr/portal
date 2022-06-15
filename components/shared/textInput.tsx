import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { classNames } from 'lib'
import React from 'react'
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

interface props
extends React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> {
  error?: string,
  register:(name: string, options?: RegisterOptions) => UseFormRegisterReturn;
}
function TTextInput({ error, register, ...props }: props) {
  const { type, title, name, autoComplete, placeholder, required } = props;
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={title}
          className="block text-sm font-medium text-gray-700"
        >
          {title}
        </label>
        {required === false && (
          <span className="text-sm text-gray-500" id={props.name + '-optional'}>
            Optional
          </span>
        )}
      </div>

      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          {...register(name?? "default", {required:{value:required?? true, message:"This Field Is Required"}})}
          className={classNames(
            'block w-full rounded-md sm:text-sm',
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
      </div>
      {error && (
        <p className="text-sm text-red-600" id={props.name + '-error'}>
          &nbsp; {error}
        </p>
          )}
    </div>
  )
}

export default TTextInput
