/* This example requires Tailwind CSS v2.0+ */
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <div className="bg-white border border-gray-300 overflow-hidden rounded-md">
      <ul role="list" className="divide-y divide-gray-300">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
