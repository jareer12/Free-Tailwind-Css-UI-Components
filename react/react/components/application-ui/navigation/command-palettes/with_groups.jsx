/*
  This example requires Tailwind CSS v3.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { EmojiSadIcon, GlobeIcon } from '@heroicons/react/outline'
import { Combobox, Dialog, Transition } from '@headlessui/react'

const items = [
  { id: 1, name: 'Workflow Inc.', category: 'Clients', url: '#' },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [query, setQuery] = useState('')

  const [open, setOpen] = useState(true)

  const filteredItems =
    query === ''
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase())
        })

  const groups = filteredItems.reduce((groups, item) => {
    return { ...groups, [item.category]: [...(groups[item.category] || []), item] }
  }, {})

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
            onChange={(item) => (window.location = item.url)}
          >
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            {query === '' && (
              <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                <GlobeIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                <p className="mt-4 font-semibold text-gray-900">Search for clients and projects</p>
                <p className="mt-2 text-gray-500">Quickly access clients and projects by running a global search.</p>
              </div>
            )}

            {filteredItems.length > 0 && (
              <Combobox.Options static className="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2">
                {Object.entries(groups).map(([category, items]) => (
                  <li key={category}>
                    <h2 className="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900">{category}</h2>
                    <ul className="mt-2 text-sm text-gray-800">
                      {items.map((item) => (
                        <Combobox.Option
                          key={item.id}
                          value={item}
                          className={({ active }) =>
                            classNames('cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white')
                          }
                        >
                          {item.name}
                        </Combobox.Option>
                      ))}
                    </ul>
                  </li>
                ))}
              </Combobox.Options>
            )}

            {query !== '' && filteredItems.length === 0 && (
              <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                <EmojiSadIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                <p className="mt-4 font-semibold text-gray-900">No results found</p>
                <p className="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
