/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, RefreshIcon, TruckIcon } from '@heroicons/react/outline'

const perks = [
  { name: '10-year all-inclusive warranty', description: 'We’ll replace it with a new one', icon: CalendarIcon },
  { name: 'Free shipping on returns', description: 'Send it back for free', icon: RefreshIcon },
  { name: 'Free, contactless delivery', description: 'The shipping is on us', icon: TruckIcon },
]

export default function Example() {
  return (
    <div className="bg-white">
      <h2 className="sr-only">Our perks</h2>
      <div className="max-w-7xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x">
        <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-8 w-8 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 flex-auto flex flex-col-reverse">
              <h3 className="font-medium text-gray-900">10-year all-inclusive warranty</h3>
              <p className="text-sm text-gray-500">We’ll replace it with a new one</p>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-8 w-8 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <div className="ml-4 flex-auto flex flex-col-reverse">
              <h3 className="font-medium text-gray-900">Free shipping on returns</h3>
              <p className="text-sm text-gray-500">Send it back for free</p>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-8 w-8 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                vectorEffect="non-scaling-stroke"
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
            <div className="ml-4 flex-auto flex flex-col-reverse">
              <h3 className="font-medium text-gray-900">Free, contactless delivery</h3>
              <p className="text-sm text-gray-500">The shipping is on us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
