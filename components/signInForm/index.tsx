import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './style.module.scss'

interface Props {}

interface FormData {
  email: string
  password: string
}

const SignInForm: React.FC<Props> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'all', criteriaMode: 'all' })
  const onSubmit = (data: FormData) => {
    reset()
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        {/* TODO: replace with correct input */}
        <div
          className={styles[`input_wrapper`]}
          id={styles[`${errors.email ? 'error' : undefined}`]}
          data-error={errors.email?.message}
        >
          <input
            id="email"
            type="text"
            {...register('email', {
              required: { value: true, message: 'The Field is Required' },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Please Enter a Valid Email',
              },
            })}
            autoComplete="email"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        {/* TODO: replace with correct input */}
        <div
          className={styles[`input_wrapper`]}
          id={styles[`${errors.email ? 'error' : undefined}`]}
          data-error={errors.password?.message}
        >
          <input
            id="password"
            {...register('password', {
              required: { value: true, message: 'The Field is Required' },
              minLength: {
                value: 8,
                message: 'Please Enter a min 8 char password',
              },
            })}
            type="password"
            autoComplete="current-password"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Sign in
        </button>
      </div>
    </form>
  )
}

export default SignInForm
