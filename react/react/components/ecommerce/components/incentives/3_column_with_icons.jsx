/* This example requires Tailwind CSS v2.0+ */
import { BadgeCheckIcon, CalendarIcon, TruckIcon } from '@heroicons/react/outline'

const incentives = [
  { name: 'Free, contactless delivery', icon: TruckIcon },
  { name: 'No questions asked returns', icon: BadgeCheckIcon },
  { name: '2-year warranty', icon: CalendarIcon },
]

export default function Example() {
  return (
    <div className="bg-white">
      <h2 className="sr-only">Why you should buy from us</h2>
      <div className="flex overflow-x-auto">
        <div className="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="flex items-center text-sm font-medium text-indigo-600">
              <incentive.icon className="mr-2 flex-none w-6 h-6" aria-hidden="true" />
              <p>{incentive.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
