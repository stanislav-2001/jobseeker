import { JobSearchFormData } from '@/app/JobSearchBox'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
]

interface Person {
  id: number,
  name: string
}

interface CityDropdownProps {
  value: string
  handleInputChange: (name: keyof JobSearchFormData, value: string) => void
}

const CityDropdown: React.FC<CityDropdownProps> = ({ value, handleInputChange }) => {
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="mx-auto">
      <Combobox value={value} onChange={(value) => value && handleInputChange('city', value)} onClose={() => setQuery('')}>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-1 border-gray-300 bg-white py-1.5 pr-8 pl-3 text-sm/6 text-black',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
            placeholder="napr. Bratislava"
            displayValue={(person: Person) => person.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-hover:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'z-2 w-(--input-width) rounded-xl border border-white/5 bg-black/95 p-1 [--anchor-gap:--spacing(1)] empty:invisible',
            'transition duration-100 ease-in data-leave:data-closed:opacity-0'
          )}
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person.id}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
              <div className="text-sm/6 text-white">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}

export default CityDropdown