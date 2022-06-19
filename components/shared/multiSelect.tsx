import { Combobox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { classNames } from 'lib'
import { useState } from 'react'
import { ListOptionType } from 'types'
import Pill from './pill'

export default function MultiSelect({
  options,
  defaultOptions,
  label = '',
  placeholder = '',
  noBorder = false,
  limitCount,
}: {
  options: ListOptionType[]
  defaultOptions?: ListOptionType[]
  label?: string
  placeholder?: string
  noBorder?: boolean
  limitCount?: number
}) {
  const [selectedOptions, setSelectedOptions] = useState<ListOptionType[]>(defaultOptions || [])
  const [query, setQuery] = useState('')

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase())
        })

  const removeOption = (id: string | number) => {
    setSelectedOptions(selectedOptions.filter((option) => option.id !== id))
  }
  return (
    <Combobox
      value={selectedOptions}
      onChange={(options) => {
        setSelectedOptions(options)
        setQuery('')
      }}
      multiple
    >
      <>
        <Combobox.Label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </Combobox.Label>
      {selectedOptions.length > 0 &&
          selectedOptions.map((option) => (
            <Pill
              key={option.id}
              title={option.name}
              id={option.id}
              onClick={() => removeOption(option.id)}
            />
          ))}
      </>
      <div className="relative mt-1">
        <Combobox.Input
          placeholder={placeholder}
          className={classNames(
            noBorder ? '' : 'border',
            'w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm'
          )}
          onChange={(event) => setQuery(event.target.value)}
          //   displayValue={(option: typeof options[number]) => option?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredOptions.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOptions.map((option) => (
              <Combobox.Option
                key={option.id}
                value={option}
                disabled={
                  limitCount ? selectedOptions.length >= limitCount : false
                }
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-black text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      {option.avatar && (
                        <img
                          src={option.avatar}
                          alt=""
                          className="h-6 w-6 flex-shrink-0 rounded-full"
                        />
                      )}
                      <span
                        className={classNames(
                          'ml-3 truncate',
                          selected ? 'font-semibold' : ''
                        )}
                      >
                        {option.name}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-black'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
