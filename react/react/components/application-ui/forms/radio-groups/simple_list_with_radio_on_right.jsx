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
const sides = [
  { id: null, name: 'None' },
  { id: 1, name: 'Baked beans' },
  { id: 2, name: 'Coleslaw' },
  { id: 3, name: 'French fries' },
  { id: 4, name: 'Garden salad' },
  { id: 5, name: 'Mashed potatoes' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">Side</legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {sides.map((side, sideIdx) => (
          <div key={sideIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm">
              <label htmlFor={`side-${side.id}`} className="font-medium text-gray-700 select-none">
                {side.name}
              </label>
            </div>
            <div className="ml-3 flex items-center h-5">
              <input
                id={`side-${side.id}`}
                name="plan"
                type="radio"
                defaultChecked={side.id === null}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
