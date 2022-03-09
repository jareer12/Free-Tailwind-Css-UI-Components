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
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pricing Plans
          </h2>
          <p className="mt-5 text-xl text-gray-400">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </div>
        <div className="mt-10 w-full max-w-xs">
          <label htmlFor="currency" className="block text-base font-medium text-gray-300">
            Currency
          </label>
          <div className="mt-1.5 relative">
            <select
              id="currency"
              name="currency"
              className="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm"
              defaultValue="United States (USD)"
            >
              <option>Argentina (ARS)</option>
              <option>Australia (AUD)</option>
              <option>United States (USD)</option>
              <option>Canada (CAD)</option>
              <option>France (EUR)</option>
              <option>Japan (JPY)</option>
              <option>Nigeria (NGN)</option>
              <option>Switzerland (CHF)</option>
              <option>United Kingdom (GBP)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
              <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
