import TTextInput from 'components/shared/textInput'
import { useState } from 'react'
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks-web'

export default function JobSearchBox(props: UseSearchBoxProps) {
  const { query, refine, clear, isSearchStalled } = useSearchBox(props)
  const [value, setValue] = useState('')

  return (
    <TTextInput
      type="text"
      placeholder="Search by Job, Company, Tech stack, ..."
      required
      large
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        refine(e.target.value)
      }}
      autoFocus
    />
  )
}
