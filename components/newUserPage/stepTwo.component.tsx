import { Switch } from '@headlessui/react'
import MultiSelect from 'components/shared/multiSelect'
import TTextInput from 'components/shared/textInput'
import { classNames } from 'lib'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Dropdown from '../shared/dropdown'

interface Props {
  handleSteps: (value: number) => void
}

const StepTwo: React.FC<Props> = ({ handleSteps }) => {
  const options = [
    {
      id: 1,
      name: '📧 Open to conversations',
    },
    {
      id: 2,
      name: '💭 Ready to interview',
    },
  ]

  const currencies = [
    { id: 1, name: 'EGP' },
    { id: 2, name: 'USD' },
    { id: 3, name: 'EUR' },
  ]

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all', criteriaMode: 'all' })
  const onSubmit = handleSubmit((data) => {
    reset()
  })
  const infoInputs = [
    {
      id: 1,
      label: 'How much experience do you have? Please select no more than 2.',
      options: [{ id: 1, name: 'Leslie Alexander' }],
      limitCount: 2,
    },
    {
      id: 2,
      label: 'What type of job are you looking for?',
      options: [{ id: 1, name: 'Leslie Alexander' }],
    },
    {
      id: 3,
      label:
        'What sorts of roles are you looking for? Please select no more than 3.',
      options: [{ id: 1, name: 'Leslie Alexander' }],

      limitCount: 3,
    },
    {
      id: 4,
      label:
        'What Industries are you interested in? Please select no more that 3.',
      options: [{ id: 1, name: 'Leslie Alexander' }],

      limitCount: 3,
    },
    {
      id: 5,
      label: 'Where would you prefer to work?',
      options: [{ id: 1, name: 'Leslie Alexander' }],
    },
  ]
  const [remoteOk, setRemoteOk] = useState(false)

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <hr className="mb-5" />
      <Dropdown
        options={options}
        label="Where are you at in your job search?"
      />
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          What are you looking for in your next role?
        </label>
        <div className="mt-1">
          <TTextInput
            id="nextRoleDes"
            isTextArea={true}
            name="nextRoleDes"
            error={errors.nextRoleDes?.message ?? undefined}
          />
        </div>
      </div>
      <hr className="mt-10" />
      <h2 className="text-2xl font-bold">Job Preferences</h2>
      <p>Tell companies what you are looking for in your next role</p>
      <div className="my-10 flex flex-col gap-5">
        {infoInputs.map((item) => (
          <div key={item.id}>
            <MultiSelect
              options={item.options}
              label={item.label}
              limitCount={item.limitCount}
            />
          </div>
        ))}
        <Switch.Group
          as="li"
          className="flex items-center justify-between py-4"
        >
          <div className="flex flex-col">
            <Switch.Label
              as="p"
              className="text-sm font-medium text-gray-900"
              passive
            >
              Are you open to remote roles?
            </Switch.Label>
            <Switch.Description className="text-sm text-gray-500">
              {remoteOk
                ? 'I am looking forward to working with companies both locally and internationally from home'
                : 'I want to go to the office and be around people to perform my best'}
            </Switch.Description>
          </div>
          <Switch
            checked={remoteOk}
            onChange={setRemoteOk}
            className={classNames(
              remoteOk ? 'bg-black' : 'bg-gray-200',
              'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                remoteOk ? 'translate-x-5' : 'translate-x-0',
                'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
        </Switch.Group>
        <div>
          <h3 className="text-xl font-bold">What is your expected salary?</h3>
          <p className="mb-3 text-gray-700">
            This should only be your cash amount you are looking for and not
            including methods of compensation
          </p>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-13 z-5">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <TTextInput
                type="text"
                name="salary"
                id="salary"
                placeholder="0.00"
                required
                error={errors.salary?.message ?? undefined}
              />
              <div className="absolute inset-y-0 right-0">
                <Dropdown
                  options={currencies}
                  defaultOption={currencies[0]}
                  noBorder
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-end gap-5">
        <button
          onClick={() => handleSteps(1)}
          className="text-md  flex justify-center rounded-md border-2 border-transparent border-black py-3 px-4 font-medium tracking-wide text-black shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="text-md flex  justify-center rounded-md border border-transparent border-black bg-black py-3 px-4 font-medium  tracking-wide text-white shadow-sm hover:border-2 hover:bg-transparent hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Submit Application
        </button>
      </div>
    </form>
  )
}

export default StepTwo
