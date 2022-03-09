/*
  This example requires Tailwind CSS v2.0+ 
  
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
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="account-number" className="block text-sm font-medium text-gray-700">
        Account number
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="account-number"
          id="account-number"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="000-00-0000"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
