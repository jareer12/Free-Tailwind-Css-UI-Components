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
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { DocumentAddIcon, FolderAddIcon, FolderIcon, HashtagIcon, TagIcon } from '@heroicons/react/outline'

const projects = [
  { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
  // More projects...
]
const recent = [projects[0]]
const quickActions = [
  { name: 'Add new file...', icon: DocumentAddIcon, shortcut: 'N', url: '#' },
  { name: 'Add new folder...', icon: FolderAddIcon, shortcut: 'F', url: '#' },
  { name: 'Add hashtag...', icon: HashtagIcon, shortcut: 'H', url: '#' },
  { name: 'Add label...', icon: TagIcon, shortcut: 'L', url: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)

  const filteredProjects =
    query === ''
      ? []
      : projects.filter((project) => {
          return project.name.toLowerCase().includes(query.toLowerCase())
        })

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
            className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all"
            onChange={(item) => (window.location = item.url)}
          >
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40"
                aria-hidden="true"
              />
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:ring-0"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            {(query === '' || filteredProjects.length > 0) && (
              <Combobox.Options
                static
                className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto"
              >
                <li className="p-2">
                  {query === '' && (
                    <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-900">Recent searches</h2>
                  )}
                  <ul className="text-sm text-gray-700">
                    {(query === '' ? recent : filteredProjects).map((project) => (
                      <Combobox.Option
                        key={project.id}
                        value={project}
                        className={({ active }) =>
                          classNames(
                            'flex cursor-default select-none items-center rounded-md px-3 py-2',
                            active && 'bg-gray-900 bg-opacity-5 text-gray-900'
                          )
                        }
                      >
                        {({ active }) => (
                          <>
                            <FolderIcon
                              className={classNames(
                                'h-6 w-6 flex-none text-gray-900 text-opacity-40',
                                active && 'text-opacity-100'
                              )}
                              aria-hidden="true"
                            />
                            <span className="ml-3 flex-auto truncate">{project.name}</span>
                            {active && <span className="ml-3 flex-none text-gray-500">Jump to...</span>}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </ul>
                </li>
                {query === '' && (
                  <li className="p-2">
                    <h2 className="sr-only">Quick actions</h2>
                    <ul className="text-sm text-gray-700">
                      {quickActions.map((action) => (
                        <Combobox.Option
                          key={action.shortcut}
                          value={action}
                          className={({ active }) =>
                            classNames(
                              'flex cursor-default select-none items-center rounded-md px-3 py-2',
                              active && 'bg-gray-900 bg-opacity-5 text-gray-900'
                            )
                          }
                        >
                          {({ active }) => (
                            <>
                              <action.icon
                                className={classNames(
                                  'h-6 w-6 flex-none text-gray-900 text-opacity-40',
                                  active && 'text-opacity-100'
                                )}
                                aria-hidden="true"
                              />
                              <span className="ml-3 flex-auto truncate">{action.name}</span>
                              <span className="ml-3 flex-none text-xs font-semibold text-gray-500">
                                <kbd className="font-sans">⌘</kbd>
                                <kbd className="font-sans">{action.shortcut}</kbd>
                              </span>
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </ul>
                  </li>
                )}
              </Combobox.Options>
            )}

            {query !== '' && filteredProjects.length === 0 && (
              <div className="py-14 px-6 text-center sm:px-14">
                <FolderIcon className="mx-auto h-6 w-6 text-gray-900 text-opacity-40" aria-hidden="true" />
                <p className="mt-4 text-sm text-gray-900">
                  We couldn't find any projects with that term. Please try again.
                </p>
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
