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
const people = [
  { id: 1, name: 'Annette Black' },
  { id: 2, name: 'Cody Fisher' },
  { id: 3, name: 'Courtney Henry' },
  { id: 4, name: 'Kathryn Murphy' },
  { id: 5, name: 'Theresa Webb' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">Members</legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {people.map((person, personIdx) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm">
              <label htmlFor={`person-${person.id}`} className="font-medium text-gray-700 select-none">
                {person.name}
              </label>
            </div>
            <div className="ml-3 flex items-center h-5">
              <input
                id={`person-${person.id}`}
                name={`person-${person.id}`}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
